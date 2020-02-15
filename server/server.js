//set up requires
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const taskRouter = require("./routes/task.router");
//uses
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("server/public"));

//routes
app.use("/task_list", taskRouter);

//spin up server
app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
