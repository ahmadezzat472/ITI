use("task");

//* 8
db.users.find();

//* 9
db.users.find({ country: "France" });

//* 10
db.users
  .find({
    country: "France",
    age: { $gt: 40 },
  })
  .count();

//* 11
db.users.updateMany({ salary: { $exists: false } }, { $set: { salary: 2500 } });

//* 12
db.users.updateMany({ job: "Oodoo" }, { $inc: { salary: 1200 } });

//* 13
db.users.find().sort({ salary: -1 }).limit(3);

//* 14
db.users.find({ country: "Brazil" }).sort({ age: -1 });

//* 15
db.users.find().sort({ salary: -1 });

//* 16
db.users.find({}, { country: 1, address: 1, _id: 0 }).limit(30);

//* 17
db.users.find({
  country: "Chinese",
  age: { $gte: 16, $lte: 35 },
});

//* 18
db.users.find({}, { country: 1, address: 1, _id: 0 });

//* 19
use("task");
db.users.find({
  fruits: { $elemMatch: { $in: ["apple", "kiwi"] } },
});
db.users.find({
  fruits: { $all: ["apple", "kiwi"] },
});

//* 20
db.users.find({
  fruits: { $nin: ["banana", "apricot"] },
});

//* 21
db.users.find({
  country: { $in: ["China", "France", "Tanzania", "Poland"] },
});

//* 22
db.users.find({
  country: { $nin: ["Russia", "Indonesia"] },
});

//* 23
db.users.find({
  $or: [
    { country: "Russia", age: 32 },
    { country: "Germany", age: 51 },
  ],
});

//* 24
db.users
  .find(
    {},
    {
      "address.city": 1,
      _id: 0,
    },
  )
  .sort({ "address.city": 1 });

//* 25
db.users.find(
  { "address.city": "Auch" },
  {
    first_name: 1,
    last_name: 1,
    job: 1,
    _id: 0,
  },
);

//* 26
db.users.find({ job: "Graphic Designer" }).sort({ salary: -1 }).limit(1);

//* 27
db.users.findOne({ first_name: "Rosalia", last_name: "Frostdicke" });

//* 28
db.users.find({
  fruits: { $size: 4 },
});
