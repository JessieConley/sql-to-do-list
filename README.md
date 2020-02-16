# Project Name
Duration: 2 Day Sprint.

Weekend SQL To Do List


## Description

The Week 9 Challenge our cohort received was to develop a ‘To Do’ application where a user can create a task on the front-end and have it displayed on the page once added, as well as show whether the task has been completed or not. Each task must have the option to complete or delete on the front end as well.  The task created by the user should also be stored in an SQL database. Any updates to the task list on the front end should be reflected in the database as well. The challenge also directed programmers to apply CSS styling to move the aesthetic of the page beyond the vanilla HTML look.

## Approach

The approach I took to this challenge was to start  by creating a rough sketch of my To Do app and setting up my database, determining what key inputs should be included in my database table. Following database set up, I set up my working files and server connection. After file set up and successful connection to the server, I set up my functionality both on the front end and back end, testing functionality throughout the process.

One roadblock I ran into while setting up the functionality was setting up the logic to update the task status upon completion. When I set up my database, I set the value parameter of my “status” key to a "varchar" value with a character limit, but once I started setting up my functions, I realized this value would make it difficult to set a condition to change the value upon completion and I should have set it to a boolean value instead. I wanted to avoid having to recreate my database and as a solve, I ended up updating the Status input in my html file to a Select with options of “Not Complete” and “Complete”. Following this update, I was able to create a conditional based on the option selected and have this visualized on the front-end when the task was appended to the Task table. While this solve involved more coding on my end, I think it makes the logic straightforward and the code easy to read.

Once all my functionality was set up, tested and working, I approached CSS styling, applying a background image to fit the theme of the challenge and adding colors to elements to break up the sections of the application and be visually appealing. The goal of my styling was to keep a clean look and a consistent color scheme throughout. Enjoy!

## Prerequisites

- JQuery
- Node
- Express
- Body-Parser
- Postico
- Postgres

## Installation

1. Create a database named your database name,
2. The queries in the task_list.sql file are set up to create the necessary table and populate the needed data to allow the application to run correctly. The project is built on Postgres, so you will need to make sure to have that installed. 
3. Open up your editor of choice and run an npm init --yes
4. Run npm install express body-parser pg
5. Add npm start short-cut to you package.json
5. Run npm start to run your application on Local Host

## How to Use Application: 
1. In the "Add Task" block of the application page, you will enter your task name and any notes associated with the task to the input fields. Then, select if the task is complete or not complete from the dropdown menu next to your input fields. For instance, you may have already completed a task, but you want it logged in your task list below along with your other tasks. If that is the case, you can select "Complete" from the dropdown and your task will display as completed on your list. 
2. After your inputs have been entered and selection made from the dropdown, click the "Add Task" button to have your task displayed in a table below on the same page. Add as many tasks as necessary. 
3. When you complete the tasks on your Task List, you can mark the task as complete by clicking the "Completed" button within your table row. Once clicked, the background color of the row will change to green and the status will change to "Complete".
4. You can also delete the task by selecting the "Delete" button within the task table should you want to remove this from your list. Otherwise, you can keep all completed tasks displayed to celebrate that you have completed all your to do items! 





