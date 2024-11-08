function smallestDigit(num) {
  let maxi = -1;

  while (num) {
    maxi = Math.max(num % 10, maxi);
    num = Math.trunc(num / 10);
  }
  console.log(maxi);
}

let num = 5673023;
smallestDigit(num);
