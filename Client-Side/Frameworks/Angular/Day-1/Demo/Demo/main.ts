// var x = 0;
// x = 10;
// x = "Hello";
//JS --> Loosely Data Type
//TS --> strong Data Type

//number - string - boolean - null - undefined

//Falsy Values [ 0 - NaN - null - undefined - false - "" ]

var x: number;
x = 0;
x = 10;
// x = "";
// x = false;
// x = function(){}

// console.log(x);


// var x;
let y: string = "Hello";
y = "Welcome";
y = "";

let z:boolean;
z = false;
z = true;

const c: number=10;
// c = 20;

let t;
t = 10;
t = "Hello";
t = true;
t = ()=>{}

let t2:any;
t2 = 10;
t2 = "Hello";
t2 = true;
t2 = ()=>{}



// let u = 10; // type inference ===> number
// u = 20;
// u = "Hello";


let arr: [];
arr = [];
// arr = [1]
// arr = ["hello"]

let arr1: [number];
// arr1 = [];//XXXXXXXXXXXXXX
arr1 = [10];
// arr1 = [10,20];//XXXXXXXXXX

let arr2: number[];
arr2 = [];
arr2 = [10];
arr2 = [10,20];
arr2 = [10,20,30];
// arr2 = [10,20,30,""];

let arr3: [number, string, boolean];//tuble array
arr3 = [10, "", true];
// arr3 = [10, true, ""];

// [10, "Hello", 520, 10]
// [10, "Hello", 520, 10, "jhkasbd"]
// [10, "Hello", 520, 10, 20]

let arr4: (number|string) [];
arr4 = [];
arr4 = [10];
arr4 = [""];
arr4 = ["",10];
arr4 = ["",10,10];
arr4 = ["",10,""];


let obj:{};
obj = {};
obj = {name:"Ahmed"}
obj = {age:20}

let obj2: {name?:string};

obj2 = {name: "Ahmed"};
obj2 = {};


//destructuring
//1-array
var arr11 = [10,"Hello", true, 0, ()=>{}];
// var q = arr11[0];//10
// var r = arr11[2];//true
var [q,,r] = arr11;//q=10, r=true
//2-object
var obj11 = {lname: "Ahmed", age: 20, address:"123 st."};
// var userName = obj11.name;//Ahmed
// var userAddress = obj11.address;//123 st.
// var {userName, , userAddress} = obj11;

// var {address, lname:userName} = obj11;

// console.log(userName);
// // console.log(lname);

// console.log(address);

// type strNum = (number|string);

// function add(x=0, y=0):strNum{
//     return x+y+"";
// }

// function add(x?:number, y?:number){
//     return (x?x:0) + (y?y:0);
// }

// add();
// add(10);
// add(10,20);


class Person{
    // name:string="";
    // age:number=0;
    // constructor(name="Person Name", age=0){
    //     this.name = name;
    //     this.age = age;
    // }
    constructor(private name="", private age=0){}
}
// var p1 = Person();//window{name, age}
var p1 = new Person();//Person{name, age}
var p2 = new Person("Ahmed");
var p3 = new Person("Osama", 10);


