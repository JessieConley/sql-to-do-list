console.log('js');

$(document).ready(onReady);

function onReady(){
    //establish click listeners
    setupClickListeners();
    getTasks();
} //end onReady

function setupClickListeners(){
  $("#viewTasks").on("click", ".deleteButton", deleteTasks);
  $("#viewTasks").on("click", ".completeButton", putTasks);
  $( '#addTaskButton' ).on( 'click', function(){
    console.log( 'in addTaskButton on click' );
    // get user input and put in an object 
    let taskToSend = {
      taskName: $("#taskIn").val(),
      taskNote: $("#notesIn").val(),
      taskStatus: $("#status").val()
    };
    postTasks(taskToSend);
     
  }); 
} //end setupClickListeners

//function getTasks

function getTasks(){
  console.log ('in getTasks');
  // ajax GET request
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



function postTasks(newTask){
    console.log("in postTasks", newTask);
    // ajax POST request
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
  
} //end postTasks

//function to display tasks:
function displayTasks(response){
  console.log('in displayTasks', response);
  let el = $("#viewTasks");
  // console.log(el);
  el.empty();
  for(let i = 0; i < response.length; i++) {
    if (response[i].status == "Not Complete") {
     el.append(`<tr data-id=${response[i].id}>
     <td>${response[i].task}</td> <td>${response[i].notes}</td> <td class="red">${response[i].status}</td>
     <td><button class="completeButton">Completed</button></td>
     <td><button class="deleteButton">Delete</button></td>
     </tr>`);
    ;
  } 
  else if (response[i].status == "Complete") {
      el.append(`<tr data-id=${response[i].id}  class="green">
     <td>${response[i].task}</td> <td>${response[i].notes}</td> <td>${response[i].status}</td>
     <td><button class="completeButton">Completed</button></td>
     <td><button class="deleteButton">Delete</button></td>
     </tr>`);
    
  } //end conditional
} //end for loop
}//end displayTasks


function putTasks(){
  console.log("in putTasks");
  let targetId = $(this).parent().parent().data('id');
  console.log(targetId);
  //ajax PUT request
  $.ajax({
    type: "PUT",
    url: `/task/${targetId}`,
    data: {
      status: 'complete'
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
} //end putTasks

function deleteTasks() {
  console.log("in putTasks");
  let targetId = $(this)
    .parent()
    .parent()
    .data("id");
  console.log(targetId);
  //ajax DELETE request
  $.ajax({
    type: "DELETE",
    url: `/task/${targetId}`,
    data: {
      status: "complete"
    }
  }) //end ajax
    .then(function(response) {
      console.log("back from PUT with:", response);
      getTasks();
    })
    .catch(function(err) {
      console.log(err);
      alert("not working");
    });
} //end deleteTasks

