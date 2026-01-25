//* 39
use("task");
db.users.deleteMany({
  country: "China",
  age: { $lt: 40 },
  job: "Marketing Manager",
});

//* 40
use("task");
db.users.countDocuments({
  country: "China",
  age: { $lte: 40 },
});

//* 41
use("task");
db.users.find().sort({ salary: -1 }).skip(1).limit(1);

//* 42
use("task");
db.users.find().sort({ salary: 1 }).skip(2).limit(1);

//* 43
use("newDB");
db.newCollection.insertOne({ example: "test" }); // create collection implicitly

//* 44
db.newCollection.renameCollection("renamedCollection");
db.renamedCollection.drop();

//* 45
use("newDB");
db.dropDatabase();
