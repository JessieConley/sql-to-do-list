console.log('js');

$(document).ready(onReady);

function onReady(){
    //establish click listeners
    setupClickListeners();
    getTasks();
}

function setupClickListeners(){
  $("#viewTasks").on("click", ".completeButton", putTasks);
  $( '#addTaskButton' ).on( 'click', function(){
    console.log( 'in addTaskButton on click' );
    // get user input and put in an object 
    let taskToSend = {

      taskName: $('#taskIn').val(),
      taskNote: $('#notesIn').val(),
      taskStatus: $('#statusIn').val(),
    };
    postTasks(taskToSend);
     
  }); 
}

//function getTasks

function getTasks(){
    console.log ('in getTasks');
    // ajax call to server to get tasks
  $.ajax({
    type: 'GET',
    url: '/task'
  }).then(function(response) {
    console.log('getting back', response);

    displayTasks(response);

  }).catch(function(error){
    console.log('error in GET', error);
  });
  
} // end getTasks

//function to POST tasks

function postTasks(newTask){
    console.log("in postTasks", newTask);
    // ajax call to server to get tasks

    $.ajax({
      type: 'POST',
      url: '/task',
      data: newTask
    }).then(function(response) {
        console.log("response from server:", response);
        getTasks();
      })
      .catch(function(err) {
        console.log("error posting", err);
      });
  
}

//function to display tasks:
function displayTasks(response){
  console.log('in displayTasks', response);
  let el = $("#viewTasks");
  console.log(el);
  el.empty();
  for (let i = 0; i < response.length; i++) {
  //  if (
  //    response[i].status == "Not Completed" || response[i].status == "not completed"
  //  ) {
     el.append(`<tr data-id=${response[i].id}>
     <td>${response[i].id}</td> <td>${response[i].task}</td> <td>${response[i].notes}</td> <td>${response[i].status}</td>
     </tr>`);
  //  } else if (response[i].transfer == "Completed" || response[i].transfer == "completed") {
  //    el.append(`<tr data-id=${response[i].id}>
  //   <td>${response[i].id}</td> <td>${response[i].taskName}</td> <td>${response[i].taskNote}</td> <td>${response[i].taskStatus}</td> 
  //   <td><button class="completeButton">Completed</button></td>
  //   </tr>`);
  //  }
  }//end for
}//end displayTasks

function putTasks() {
  console.log("in putTasks");
  let targetId = $(this).parent().data("id");
  console.log(targetId);
  //ajax PUT request
  $.ajax({
    type: "PUT",
    url: `/task_list/${targetId}`,
    data: {
      taskCompleted: "complete"
    }
  })
    .then(function(response) {
      console.log("back from PUT with:", response);
      getTasks();
    })
    .catch(function(err) {
      console.log(err);
      alert("not working");
    });
}