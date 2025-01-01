// First class function in JavaScript

//Function Statement
function a() {
  console.log("a called");
}

//Function Expression
var b = function () {
  console.log("B CALLED");
};

//The Difference between function expression and statement
//is hoisting function statement are hosited, but function
//expression are not

//function Decleration is same as function statement
function c() {
  console.log("B called");
}

//Anonymous Function
//this is used when function is used as values
var x = function () {
  console.log("X called");
};

//Named Function Expression
var z = function xyz() {
  console.log("Z called");
};

a();
b();
z();
// xyz(); this give reference error

//Different between parameters and arguments?
//parameters are in functin decleration
//arguments are used in function call

/* First Class Function
    Ability to do the things:-
    -function can be passed into a function.
    -function can returned by a function.
    -function can be stored into a varibale.

*/

var b = function (param1) {
  return function xyz() {};
};

console.log(b());

// Functions are first class citizen
// This is same as first class citizen.

//Arrow Function

let n = () => {
  console.log("Inside Arrow Function");
};

n();
