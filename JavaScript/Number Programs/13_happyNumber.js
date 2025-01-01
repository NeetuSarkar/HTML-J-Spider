function digitSquredSum(n) {
  let sum = 0;
  while (n) {
    let digit = n % 10;
    sum = sum + Math.pow(digit, 2);
    n = Math.trunc(n / 10);
  }
  return sum;
}

function isHappy(n) {
  while (n > 10) {
    n = digitSquredSum(n);
  }
  if (n == 1) return "Happy";
  else return "not Happy";
}

let n = 13;
console.log(`The given number ${n} is `, isHappy(n));
