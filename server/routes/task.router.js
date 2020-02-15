const express = require("express");
const taskRouter = express.Router();
const pg = require("pg");

// DB CONNECTION
const pool = new pg.Pool({
  database: "task_list",
  host: "localhost",
  port: 5432,
  max: 12,
  idleTimeoutMillis: 30000
}); //end pool


// GET
taskRouter.get('/', (req, res)=> {
    let queryText = 'SELECT * FROM "tasks"';
    pool.query(queryText).then(result => {
      // Sends back the results in an object
      res.send(result.rows);
    })
    .catch(error => {
      console.log('error getting inventory', error);
      res.sendStatus(500);
    });
})


//POST
taskRouter.post("/", (req, res) => {
  console.log("in POST:", req.body);
  let queryString = `INSERT INTO tasks( "task", "notes", "status") Values ('${req.body.task}', '${req.body.notes}', '${req.body.status}')`;
  //INSERT INTO "tasks"("task", "notes", "status") VALUES ('fold laundry', 'test', 'Not complete');
  pool.query(queryString).then(results => {
      console.log("added koala");
      res.sendStatus(201);
    })
    .catch(err => {
      res.sendStatus(500);
      console.log(err);
    });
});


//PUT


//DELETE


module.exports = taskRouter;