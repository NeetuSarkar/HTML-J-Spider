console.log(myVar); // undefined (due to var hoisting)
console.log(myLet); // ReferenceError (temporal dead zone for let)
console.log(myConst); // ReferenceError (temporal dead zone for const)

myFunction(); // Works because myFunction is hoisted

console.log(myArrowFunc); // undefined (myArrowFunc is hoisted, but not initialized)
myArrowFunc(); // TypeError: myArrowFunc is not a function

// Variable and function declarations
var myVar = 10;
let myLet = 20;t myConst = 30;

// Function Declaration
function myFunction() {
  console.log("This is a regular function.");
}

// Function Expression (Arrow function assigned to a variable)
var myArrowFunc = () => {
  console.log("This is an arrow function.");
};
