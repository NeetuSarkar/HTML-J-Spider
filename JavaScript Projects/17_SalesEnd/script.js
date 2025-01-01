let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let salesPara = document.getElementById("sales-para");

let hr = 14;
let min = 0;
let sec = 10;

function displayTime() {
  sec = sec - 1;
  if (sec < 0) {
    sec = 59;
    min -= 1;
    if (min < 0) {
      min = 59;
      hr -= 1;
      if (hr < 0) {
        hr = 0;
        min = 0;
        sec = 0;
        clearInterval(timer);
        salesPara.innerHTML = `<p> Sales ends, Next sale is in 1st January`;
      }
    }
  }

  hours.textContent = hr.toString().padStart(2, "0");
  minutes.textContent = min.toString().padStart(2, "0");
  seconds.textContent = sec.toString().padStart(2, "0");
}

let timer = setInterval(displayTime, 1000);
console.log(typeof timer);

displayTime();
