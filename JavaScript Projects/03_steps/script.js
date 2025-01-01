let firstBtn = document.querySelector("#one");
let secondBtn = document.querySelector("#two");
let thridBtn = document.querySelector("#three");
let display = document.querySelector(".display-content");
let prevBtn = document.querySelector("#prev-btn");
let nextBtn = document.querySelector("#next-btn");
let startBtn = document.querySelector("#start");
let displayCard = document.querySelector("#steps-card");
let crossBtn = document.querySelector("#cross-button");

let message = [
  "Come to class",
  "Practice Daily",
  "Get placed, give testimonial",
];

let step = 0;

function updateDisplay() {
  if (step === 0) {
    display.textContent = "Start your journey";
  } else {
    display.textContent = message[step - 1];
  }

  if (step >= 1) firstBtn.classList.add("active");
  else firstBtn.classList.remove("active");

  if (step >= 2) secondBtn.classList.add("active");
  else secondBtn.classList.remove("active");

  if (step >= 3) thridBtn.classList.add("active");
  else thridBtn.classList.remove("active");
}

nextBtn.addEventListener("click", () => {
  if (step < 3) {
    step++;
    updateDisplay();
  }
});

prevBtn.addEventListener("click", () => {
  if (step > 0) {
    step--;
    updateDisplay();
  }
});

startBtn.addEventListener("click", function () {
  displayCard.classList.remove("hidden");
});

crossBtn.addEventListener("click", function () {
  displayCard.classList.add("hidden");
});

document.addEventListener("keydown", function (e) {
  console.log(e);
  if (e.key === "Escape" && !displayCard.classList.contains("hidden")) {
    displayCard.classList.add("hidden");
  }
});

updateDisplay();
