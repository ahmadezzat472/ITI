// Varibales
// var let const
// numbers string boolean null undefined  => primitive data types
// objects arrays functions => refrenced data types

// functions declartion

// function statement
// function sayHello() {
//     console.log("Hello");
// }

// // function expression
// const sayHello2 = function() {
//     console.log("Hello");
// }

// // arrow function => this
// const sayHello3 = () => {
//     console.log("Hello");
// }


// map , reduce , filter find , findIndex , findLast every some forEach


// modern js features

// template literals
// const name = "John";
// // const lastName = "Doe";
// // const fullName = `${name} hfhfh ${lastName}`;

// const obj = {
//     name: "hamada",
//     age: 20,
//     city: "New York",
//     address: {
//         street: "123 Main St",
//         state: "NY",
//         zip: "10001"
//     }
// }

// const { name: userName, age: userAge } = obj

// console.log(userName, userAge);


// const [data, , dataSetter] = [1, 2, 3];

// console.log(data, dataSetter);


// spread , rest operators

// const newObj = { ...obj, city: "cairo" }

// function restExample(...args) {
//     console.log(args);
// }

// restExample(1, 2, 3, 4, 5, 6, 7, 8, 9);


// console.log(5 == "5")
// console.log(5 === "5")



// const obj = {
//     name: "shady",
//     age: 24,
//     address: {
//         city: "mansoura",
//         street: "123 Main St",
//     }
// }


// const obj2 = obj




// shallow copy , deep copy

// deep copy  => function thatr loops through obj keys recursivly

// const obj3 = { ...obj }
// obj3.name = "ahmed"
// obj3.age = 28

// obj3.name = "ahmed"
// obj3.age = 28
// obj3.address.city = "cairo"
// console.log("obj", obj)
// console.log("obj2", obj2)
// console.log("obj3", obj3)

// const obj3String = JSON.stringify(obj);

// console.log("obj3String", obj3String);
// const obj3 = JSON.parse(obj3String);
// console.log("obj3", obj3);
// // obj3.name = "ahmed"
// // obj3.age = 28
// // obj3.address.city = "cairo"
// // console.log("obj", obj)
// // console.log("obj2", obj2)
// // console.log("obj3", obj3)

// console.log("obj3 === obj", obj3 === obj);
// console.log("obj3 === obj2", obj3 === obj2);
// console.log("obj === obj2", obj === obj2);


// higher order functions =>function accept function as a parmater or return function


// function validator(schema) {
//     return function (req,res,next) {
//         return schema * multiplier;
//         // logic
//         next();
//     }
// }

// const multiplyBy2 = createMultiplier(2);
// const multiplyBy3 = createMultiplier(3);

// console.log(multiplyBy2(5));
// console.log(multiplyBy3(5));
