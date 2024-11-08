function smallestDigit(num) {
  let mini = 10;

  while (num) {
    mini = Math.min(num % 10, mini);
    num = Math.trunc(num / 10);
  }
  console.log(mini);
}

let num = 5673023;
smallestDigit(num);
