//* 1
use("task");
db.users.find({ first_name: { $regex: /^EM/ } });

//* 2
use("task");
db.users.find({ fruits: { $size: { $lt: 3 } } });

//* 3
use("task");
db.users.updateOne(
  { first_name: "John", last_name: "Doe" },
  { $push: { fruits: { $each: ["orange"], $position: 1 } } },
);

//* 4
use("task");

//* 5
use("task");
db.users.updateMany(
  {
    country: "France",
    email: { $ne: "esetchfield2n@ox.ac.uk" },
  },
  { $inc: { salary: 100 } },
);

//* 6
use("task");
db.users.findOneAndDelete({ country: "Sweden" }, { sort: { age: 1 } });
