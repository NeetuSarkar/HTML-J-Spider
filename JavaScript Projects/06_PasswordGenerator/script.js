let passwordDisplay = document.getElementById("password-display");
let selectorDiv = document.querySelector(".type-selector");
let refreshButton = document.getElementById("refresh-btn");
let copyButt = document.getElementById("copy-password");

function generatePassword() {
  const upperCase = document.getElementById("upper-case").checked;
  const lowerCase = document.getElementById("lower-case").checked;
  const numbers = document.getElementById("number").checked;
  const symbols = document.getElementById("symbol").checked;

  // Random length between 8 to 15
  const length = Math.floor(Math.random() * (15 - 8 + 1)) + 8;

  // Character sets
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = '!@#$%^&*()-_=+[]{}|;:",.<>?/';

  // Pool to hold selected characters
  let characterPool = "";

  if (upperCase) characterPool += uppercaseChars;
  if (lowerCase) characterPool += lowercaseChars;
  if (numbers) characterPool += numberChars;
  if (symbols) characterPool += symbolChars;

  if (!characterPool) {
    passwordDisplay.value = "Please select at least one option!";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool[randomIndex];
  }

  // Display the generated password
  passwordDisplay.value = password;
}

// Generate password on any checkbox click
selectorDiv.addEventListener("click", (e) => {
  if (e.target.tagName === "INPUT") {
    generatePassword();
  }
});

// Generate password on refresh button click
refreshButton.addEventListener("click", () => {
  generatePassword();
});

// Copy password to clipboard
copyButt.addEventListener("click", () => {
  const password = passwordDisplay.value;
  if (password && password !== "Please select at least one option!") {
    navigator.clipboard
      .writeText(password)
      .then(() => {
        alert("Password copied to clipboard!");
      })
      .catch((err) => {
        alert("Failed to copy password.");
        console.error(err);
      });
  } else {
    alert("No password to copy!");
  }
});
