let container = document.querySelector(".container");

const quizQuestions = [
  {
    question: "What is the output of '2' + 2 in JavaScript?",
    options: ["'22'", "4"],
    correctAnswer: "'22'",
  },
  {
    question:
      "Which of the following is a way to declare a variable in JavaScript?",
    options: ["let", "variable"],
    correctAnswer: "let",
  },
  {
    question: "What does 'typeof null' return in JavaScript?",
    options: ["'null'", "'object'"],
    correctAnswer: "'object'",
  },
  {
    question: "Which method is used to add an element to the end of an array?",
    options: ["push()", "append()"],
    correctAnswer: "push()",
  },
  {
    question:
      "Which keyword is used to define a constant variable in JavaScript?",
    options: ["const", "constant"],
    correctAnswer: "const",
  },
];

let currentQuestionIndex = 0;
let score = 0;

// Start Quiz
function startQuiz() {
  renderQuestion();
}

// Render Current Question
function renderQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];

  container.innerHTML = `<div class="card">
        <div class="header">
          <div class="back">
            <i class="fa-solid fa-arrow-left" id="back-btn"></i>
            <p>Back</p>
          </div>
          <p><span id="curr">${
            currentQuestionIndex + 1
          }</span> of <span id="total">${quizQuestions.length}</span></p>
        </div>
        <h2>${currentQuestion.question}</h2>
        <div class="buttons">
          <button id="first-ans">${currentQuestion.options[0]}</button>
          <button id="second-ans">${currentQuestion.options[1]}</button>
        </div>
      </div>`;

  attachOptionListeners();
  attachBackButtonListener();
}

// Attach Click Listeners to Options
function attachOptionListeners() {
  const firstAnswer = document.getElementById("first-ans");
  const secondAnswer = document.getElementById("second-ans");
  const currentQuestion = quizQuestions[currentQuestionIndex];

  firstAnswer.addEventListener("click", () =>
    handleAnswer(currentQuestion.options[0])
  );
  secondAnswer.addEventListener("click", () =>
    handleAnswer(currentQuestion.options[1])
  );
}

// Handle User Answer
function handleAnswer(selectedOption) {
  const currentQuestion = quizQuestions[currentQuestionIndex];

  if (selectedOption === currentQuestion.correctAnswer) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    renderQuestion();
  } else {
    displayResults();
  }
}

// Display Results
function displayResults() {
  container.innerHTML = `<div class="card">
        <h2>Quiz Completed!</h2>
        <p>Your Score: ${score} / ${quizQuestions.length}</p>
        <button id="restart-btn">Restart Quiz</button>
      </div>`;

  document.getElementById("restart-btn").addEventListener("click", restartQuiz);
}

// Restart Quiz
function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  startQuiz();
}

// Attach Back Button Listener
function attachBackButtonListener() {
  let backBtn = document.getElementById("back-btn");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      container.innerHTML = `<div class="card">
            <h2>Let's Start the Quiz...</h2>
            <button id="start-btn">Start Quiz</button>
          </div>`;

      document.getElementById("start-btn").addEventListener("click", startQuiz);
    });
  }
}

// Initial Setup
document.getElementById("start-btn").addEventListener("click", startQuiz);
