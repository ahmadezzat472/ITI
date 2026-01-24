//* 29
use("task");
db.users.updateOne(
  { first_name: "Grannie", last_name: "Glader", company: "Jayo" },
  { $set: { email: "gglader@jayo.edu" } },
);

//* 30
use("task");
db.users.updateOne(
  { first_name: "Agnola", last_name: "Janaud" },
  { $set: { "fruits.2": "apple" } },
);

//* 31
use("task");
db.users.updateMany({ country: "Vietnam" }, { $inc: { age: -5 } });

//* 32
use("task");
db.users.updateMany(
  {},
  {
    $set: {
      laptop: {
        CPU: "Intel i7",
        RAM: "16GB",
        GPU: "RTX 3060",
        DISK: "1TB SSD",
      },
    },
  },
);

//* 33
use("task");
db.users.updateMany(
  { country: "Indonesia", company: "Zava" },
  { $set: { company: "" } },
);

//* 34
use("task");
db.users.replaceOne(
  { email: "sbucke6@mozilla.com" },
  {
    first_name: "NewName",
    last_name: "NewLastName",
    age: 30,
  },
);
use("task");
db.users.find({ first_name: "NewName" });

//* 35
use("task");
db.users.updateMany({ company: "Skajo" }, { $mul: { salary: 0.9 } });

//* 36
use("task");
db.users.updateOne(
  { "address.city": "Yauca" },
  { $set: { "address.city": "Berlin" } },
);

//* 37
use("task");
// if not exists, add the field
db.users.updateOne(
  { first_name: "Murray", last_name: "Jannings" },
  { $addToSet: { fruits: "kiwi" } },
);
// else
db.users.updateOne(
  { first_name: "Murray", last_name: "Jannings" },
  { $push: { fruits: "kiwi" } },
);

//* 38
use("task");
db.users.updateOne(
  { first_name: "Geraldine", last_name: "Spittal" },
  { $pull: { fruits: "papaya" } },
);
