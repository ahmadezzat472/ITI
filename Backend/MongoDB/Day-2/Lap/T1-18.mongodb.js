use("task");

//* 1 -------------------------
db.users.find({ $or: [{ age: 40 }, { company: "Aivee" }] });

//* 2 -------------------------
db.users
  .find({
    age: { $gte: 25, $lte: 38 },
  })
  .limit(5);

//* 3 -------------------------
db.users
  .find({
    salary: { $gt: 2000 },
  })
  .sort({ age: 1 })
  .limit(1);

//* 4 -------------------------
db.users.find({ country: "Russia" }).sort({ age: -1 }).skip(2).limit(1);

//* 5 -------------------------
db.users.distinct("country").length;

use("task");
db.users.aggregate([
  {
    $group: {
      _id: "$country",
      count: { $sum: 1 },
    },
  },
]);

//* 6 -------------------------
use("task");
db.users.aggregate([
  {
    $group: {
      _id: 0,
      totalSalary: { $sum: "$salary" },
    },
  },
]);

//* 7 -------------------------
use("task");
db.users.aggregate([
  { $sort: { salary: -1 } },
  { $limit: 3 },
  { $group: { _id: null, sumTop3: { $sum: "$salary" } } },
]);

//* 8 -------------------------
db.users.aggregate([
  { $group: { _id: "$company", avgSalary: { $avg: "$salary" } } },
  { $sort: { avgSalary: -1 } },
]);

//* 9 -------------------------
db.users.aggregate([
  {
    $match: {
      country: "Germany",
    },
  },
  {
    $project: {
      _id: 0,
      fullname: { $concat: ["$first_name", " ", "$last_name"] },
    },
  },
]);

//* 10 -------------------------
db.users.aggregate([
  {
    $group: {
      _id: "$age",
      count: {
        $sum: 1,
      },
    },
  },
]);

//* 11 -------------------------
db.users.aggregate([
  {
    age: { $gte: 30 },
  },
  {
    _id: 0,
    email: 1,
  },
]);

//* 12 -------------------------
db.users.aggregate([
  {
    $project: {
      _id: 0,
      fullname: { $concat: ["$first_name", " ", "$last_name"] },
      age: 1,
      country: 1,
      salary: { $multiply: ["$salary", 3] },
    },
  },
  { $out: "people_transformed" },
]);

//* 13 -------------------------
db.users.getIndexes();

//* 14 -------------------------
use("task");
db.users.find({ email: "test@example.com" }).explain("executionStats");

//* 15 -------------------------
db.users.createIndex({ email: 1 }, { unique: true });
db.users.find({ email: "test@example.com" }).explain("executionStats");

//* 16 -------------------------
db.users.createIndex({ email: 1, age: 1 });

//* 17 -------------------------
db.users.getIndexes();

//* 18 -------------------------
db.users.dropIndexes();
