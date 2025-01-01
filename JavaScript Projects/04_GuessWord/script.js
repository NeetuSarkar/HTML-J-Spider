const attemptLeft = document.getElementById("attempt-left");
const wordDisplay = document.querySelector("#word-display");
const answer = document.getElementById("answer");
const showAnswer = document.getElementById("show-answer");
const passBtn = document.getElementById("pass");
const submitBtn = document.getElementById("submit");
const answerMessage = document.getElementById("answer-message");
const inputsContainer = document.querySelector(".inputs");

const MAX_ATTEMPTS = 5;
let currentWord = null;
let attempts = MAX_ATTEMPTS;

// Word Bank
const words = [
  { word: "apple", display: "epalp" },
  { word: "banana", display: "anbaan" },
  { word: "cherry", display: "cyerhr" },
  { word: "grape", display: "perag" },
  { word: "orange", display: "geanro" },
  { word: "mango", display: "ngoma" },
  { word: "watermelon", display: "wmaetleorn" },
];

// Utility Functions
function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

function displayRandomWord() {
  // Reset UI
  inputsContainer.innerHTML = "";
  answerMessage.textContent = "";
  answer.textContent = "";

  // Fetch random word
  const randomWord = getRandomWord();
  currentWord = randomWord.word;
  wordDisplay.textContent = randomWord.display;

  // Generate input fields
  randomWord.word.split("").forEach(() => {
    const input = document.createElement("input");
    input.type = "text";
    input.maxLength = 1;
    input.classList.add("letter-input");
    inputsContainer.appendChild(input);
  });

  // Reset attempts
  attempts = MAX_ATTEMPTS;
  attemptLeft.textContent = attempts;
}

function checkAnswer() {
  const inputs = Array.from(inputsContainer.querySelectorAll("input"));
  const userInput = inputs.map((input) => input.value).join("");

  if (userInput.toLowerCase() === currentWord.toLowerCase()) {
    answerMessage.textContent = "Correct! 🎉";
    answerMessage.style.color = "green";
    disableInputs(inputs);
  } else {
    attempts--;
    attemptLeft.textContent = attempts;
    highlightIncorrectInputs(inputs);

    if (attempts === 0) {
      answerMessage.textContent = "No attempts left! Try again.";
      answerMessage.style.color = "red";
      disableInputs(inputs);
    } else {
      answerMessage.textContent = "Incorrect. Keep trying!";
      answerMessage.style.color = "red";
    }
  }
}

function highlightIncorrectInputs(inputs) {
  inputs.forEach((input, index) => {
    if (input.value.toLowerCase() !== currentWord[index]) {
      input.classList.add("incorrect");
      input.value = "";
    } else {
      input.classList.remove("incorrect");
    }
  });
}

function disableInputs(inputs) {
  inputs.forEach((input) => {
    input.disabled = true;
  });
}

function showCorrectAnswer() {
  answer.textContent = `The correct word is: ${currentWord}`;
}

// Event Listeners
inputsContainer.addEventListener("input", (event) => {
  if (event.target.value.length === 1 && event.target.nextElementSibling) {
    event.target.nextElementSibling.focus();
  }
});

inputsContainer.addEventListener("keydown", (event) => {
  if (
    event.key === "Backspace" &&
    !event.target.value &&
    event.target.previousElementSibling
  ) {
    event.target.previousElementSibling.focus();
  }
});

submitBtn.addEventListener("click", checkAnswer);
passBtn.addEventListener("click", displayRandomWord);
showAnswer.addEventListener("click", showCorrectAnswer);

// Initialize Game
displayRandomWord();
