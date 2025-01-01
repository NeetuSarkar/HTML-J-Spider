let timeDisplay = document.getElementById("time-display");
let dateDisplay = document.getElementById("date-display");

function displayTime() {
  let now = new Date();
  timeDisplay.textContent = now.toLocaleTimeString();
  dateDisplay.textContent = now.toLocaleDateString();
}

setInterval(displayTime, 1000);
