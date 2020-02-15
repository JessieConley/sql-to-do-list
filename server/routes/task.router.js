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
    let queryText = 'SELECT * FROM "tasks" ORDER BY "id" ASC';
    pool.query(queryText).then(result => {
      // Sends back the results in an object
      res.send(result.rows);
    })
    .catch(error => {
      console.log('error getting task', error);
      res.sendStatus(500);
    });
})


//POST
taskRouter.post('/', (req, res) => {
  console.log("in POST:", req.body);
  let queryString = `INSERT INTO tasks( "task", "notes", "status") VALUES ($1, $2, $3)`;
  //INSERT INTO "tasks"("task", "notes", "status") VALUES ('fold laundry', 'test', 'Not complete');
  pool.query(queryString, [
      req.body.taskName,
      req.body.taskNote,
      req.body.taskStatus
    ])
    .then(results => {
      console.log("added task");
      res.sendStatus(201);
    })
    .catch(err => {
      res.sendStatus(500);
      console.log(err);
    });
});


//PUT
taskRouter.put('/:id', (req, res) => {
  console.log("hello from put/id", req.params);
  queryString = `UPDATE "tasks" SET "status" = 'Complete' WHERE "id" = ${req.params.id}`;
  console.log("complete");
  pool.query(queryString).then(results => {
    res.sendStatus(200);
  });
});

//DELETE
taskRouter.delete("/:id", (req, res) => {
  console.log("hello from put/id", req.params);
  queryString = `DELETE FROM "tasks" WHERE "id" = ${req.params.id}`;
  console.log("delete");
  pool.query(queryString).then(results => {
    res.sendStatus(200);
  });
});

module.exports = taskRouter;