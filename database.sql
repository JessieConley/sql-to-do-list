CREATE TABLE "tasks"
(
    "id" serial primary key,
    "task" varchar(120) not null,
    "notes" varchar(300) not null,
    "status" varchar(120) not null
);

SELECT * FROM "tasks";

-- Testing server side:
-- INSERT INTO "tasks"("task", "notes", "status") VALUES ('fold laundry', 'test', 'Not complete');