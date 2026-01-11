// =====================================================
// QUESTIONS
// =====================================================

// N-1


foo();
console.log(foo)
function foo() {
    console.log("First foo");
}

function foo() {
    console.log("Second foo");
}

var foo = function() {
    console.log("Third foo");
};

// var foo ;
// var x = undefined;


// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------

// N-2


// var x = 10;
// var x = function () {
//     console.log("I'm a function");
// }
// x()
// console.log(typeof x);
// console.log(x);



// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------

// N-3

// var a = 1;

// function outer() {
//     var a = 2;

//     function inner() {
//         console.log(a);
//         var a = 3;
//     }

//     inner();
//     console.log(a);
// }

// outer();
// console.log(a);



// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------

// N-4

// var arr1 = [1, 2, 3];
// var arr2 = arr1;
// var arr3 = arr1.slice();

// arr1.push(4);

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);



// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------

// N-5

// console.log(Boolean("false"));


// console.log(Boolean(false));


// console.log(Boolean(0));
// console.log(Boolean("0"));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(""));
// console.log(Boolean(NaN));
// console.log(Boolean(isNaN));
// console.log(Boolean(isNaN(NaN)));
// console.log(Boolean(-1));
// console.log(Boolean({}));



// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------

// N-6

// var x = 5;
// var y = x++;

// console.log(x);
// console.log(y);

// var a = 5;
// var b = ++a;

// console.log(a);
// console.log(b);



// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------

// N-7

// console.log(null == undefined);
// console.log(null === undefined);
// console.log(0 == false);
// console.log(0 === false);
// console.log("" == false);
// console.log("" === false);
// console.log(NaN == NaN);
// console.log(NaN === NaN);
// console.log([1] == ![1]);
// console.log([] == []);
// console.log([] == ![]);
// []   == false
// []   == {new boolean}
// object == object

// console.log([1] == ![1]);
// console.log([])
// console.log(![])
// console.log({} == false);
// console.log([] == false);
// console.log(null == 0);
// console.log(null >= 0);
// console.log(null <= 0);


//**     == (abstract equality) has special rules for null and undefined.
//**    >= uses relational comparison, not abstract equality.
//**    null doesn't convert to 0 in abstract equality
//**    JavaScript converts null to 0 when doing numeric comparisons.


// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------

// N-8

// console.log(+"5+5");
// console.log(-"5+5");

// console.log(!![]);
// console.log(!!{});

// console.log([] + []);
// console.log([1] + [1]);
// console.log([1] - [1]);
// console.log([1,2] - [1,2]);
// console.log([1,2] + [1,2]);
// console.log([] + {});
// console.log([] - {});
// console.log({} +[]);
// console.log({} +[1]);
// console.log([1] + {});



// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------

// N-9

var a = 10;
var b = 20;
var c = 30;


//  && --> first false or last true
//  || --> first true  or last false
// console.log(a > b && b > c);
// console.log(a < b && b < c);
// console.log(a > b || b < c);
// console.log(a && b);
// console.log(a || b);
// console.log(0 && 10);
// console.log(0 || 10);
// console.log("" || "hello");
// console.log("hello" || "");
// console.log("" && "hello");



// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------

// N-10

// var arr = [1, 2, 3, 4, 5];

// arr.splice(2, 0, "a", "b");
// console.log(arr);
// // [1, 2, 'a', 'b', 3, 4, 5]

// arr.splice(3, 2);
// console.log(arr);
// // [1, 2, 'a', 4, 5]

// arr.reverse();
// console.log(arr);



// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------

// N-11

// for (var i = 0; i < 3; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 100);
// }



// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------

// N-12

// var arr = [];

// for (var i = 0; i < 5; i++) {
//     arr.push(function() {
//         console.log(i);
//     });
// }
// // console.log(arr[0]);
// arr[0]();
// arr[1]();
// arr[2]();



// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------

// N-13

var funcArr3 = [];

for (var i = 0; i < 3; i++) {
    (function (j) {
        funcArr3.push(function () {
            console.log(j);
        });
    })(i);
}

funcArr3[0]();
funcArr3[1]();
funcArr3[2]();




