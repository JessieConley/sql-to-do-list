CREATE TABLE "tasks"
(
    "id" serial primary key,
    "task" varchar(120) not null,
    "notes" varchar(300) not null,
    "status" varchar(120) not null
);

SELECT * FROM "tasks";

