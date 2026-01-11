// var obj = {
//     name: "menna",
//     age: 25,
//     getSetGen: function () {
//         //var data
//         // var keys =  Object.keys(this);
//         for (var key in this) {
//             if (typeof this[key] !== "function") {
//                 var _this = this;
//                 (function () {
//                     var data = _this[key];
//                     Object.defineProperty(_this, key, {
//                         get: function () {
//                             return data;

//                         },
//                         set: function (v) {
//                             data = v;

//                         }
//                     });

//                 })();

//             }



//         }

//     }
// }
// obj.getSetGen();
// var user = {
//     id:25,
//     address:"ismailia"
// }

// obj.getSetGen.call(user);

// console.log(user);
// console.log(obj);
// console.log(obj.name);//get
// obj.name = "hamada";
// console.log(obj.name);
// console.log(obj.age);
// obj.age = 25;


// var divs= document.querySelectorAll("div");

// for(var i=0;i<divs.length;i++){
//     (function(){
//         var x = i;//0 1 2 3 
//         divs[i].addEventListener("click",function(){
//             // console.log(i);
//             console.log(divs[x].textContent);
//         });

//     })();
// }

///////////////////////////////////
//inhertance
function User(n,a){
    if(this.constructor ===User){
        throw("error this is an abstract class");

    }
    this.name = n;
    this.age = a;

}
User.prototype.print=function(){
    console.log(this.name,this.age);
}

//var user = new User("m",32);
function Employee(x,y,s){
    User.call(this,x,y);
    this.salary = s;

}
///////////=================
Employee.prototype = Object.create(User.prototype);
//override 
Employee.prototype.constructor = Employee;
///////////////////===========================
Employee.prototype.print = function(){
    console.log("hello i am employee");
}
Employee.prototype.calcSalary = function(b){
    return this.salary + b;
}
Employee.prototype.toString = function(){
    return this.name;
}

function Student(n,a,g)
{
    User.call(this,n,a);
    this.grades = g;
}
Student.prototype = Object.create(User.prototype);
Student.prototype.calcGrades = function(){
    console.log("hello");
}
var emp = new Employee("menna",25,3000);
console.log(emp.constructor);
emp.print();
document.write(emp);//toString()
var emp2 = new Employee("hamada",25,3000);
console.log(emp2);
var stu = new Student("menna",20,600);
console.log(stu);