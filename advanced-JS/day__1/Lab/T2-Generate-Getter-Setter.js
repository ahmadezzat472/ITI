/**
 ** Create your own custom object that has getSetGen as function value, this
 ** function should generate setters and getters for the properties of the caller
 ** object This object may have description property of string value if needed
 ** Let any other created object can use this function property to generate
 ** getters and setters for his own properties Avoid generating getters or
 ** setters for property of function value
 */

var obj = {
  name: "Ahmed",
  age: 25,

  getSetGen: function () {
    for (var key in this) {
      if (typeof this[key] === "function") continue;

      var _this = this; //** use "this" here because use it inside the "self invoked function" refer to Window

      (function () {
        //** "this" here refer to Window inside so will use "_this"
        var value = _this[key];

        Object.defineProperty(_this, key, {
          get: function () {
            return value;
          },
          set: function (newValue) {
            value = newValue;
          },
        });
      })();
    }
  },
};

console.log(obj);
/**
 ** Before Calling getSetGen
 ** *************************
 ** {name: 'Ahmed', age: 25, getSetGen: ƒ}
 ** age: 25
 ** getSetGen: ƒ ()
 ** name :  "ahmed"
 */
obj.getSetGen();
console.log(obj);
/**
 * ** After Calling getSetGen
 ** *************************
 ** {name: 'Ahmed', age: 25, getSetGen: ƒ}
 ** age: 25
 ** getSetGen: ƒ ()
 ** name :  "ahmed"
 ** get age :  ƒ ()
 ** set age :  ƒ (newValue)
 ** get name :  ƒ ()
 ** set name :  ƒ (newValue)
 */

/** Getter */
console.log(obj.name);
console.log(obj.age);

/** Setter */
obj.name = "new name";
obj.age = 10;

/** Getter */
console.log(obj.name);
console.log(obj.age);

var user = { name: "bind name", age: 22 };
obj.getSetGen.call(user);

console.log(user.name);
user.name = "Mohamed";
console.log(user.name);
