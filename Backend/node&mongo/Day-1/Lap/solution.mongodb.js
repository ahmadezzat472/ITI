//* 1
//use task;
use("task");

//* 2
//show dbs;
db.getMongo().getDBs();

//* 3
db.createCollection("people");

//* 4
db.task.insertOne({
  first_name: "John",
  last_name: "Doe",
  age: 29,
  email: "ahmed@example.com",
});

//* 6
db.task.insertMany([
  {
    first_name: "John",
    last_name: "Doe",
    age: 29,
    email: "ahmed@example.com",
  },
  {
    first_name: "Jane",
    last_name: "Smith",
    age: 35,
    email: "jane@example.com",
  },
]);

//* 7
//show collections;
db.getCollectionNames();
