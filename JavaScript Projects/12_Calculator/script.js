let clearBtn = document.getElementById("clear-btn");
let resetBtn = document.getElementById("reset-btn");
let equalBtn = document.getElementById("equal-btn");
let buttons = document.getElementById("buttons");

let a = "";
let b = "";
let operator = "";

console.log(buttons);

buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("num")) {
    if (operator === "") {
      a += e.target.textContent;
      console.log(a);
    } else {
      b += e.target.textContent;
      console.log(b);
    }
  } else if (e.target.id === "equal-btn") {
    calculate(a, b, operator);
  } else if (e.target.classList.contains("operation")) {
    if (a !== "") {
      operator = e.target.id;
      console.log(operator);
      console.log(e.target.id);
    }
  }
});
