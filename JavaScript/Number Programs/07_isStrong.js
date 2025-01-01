function isStrong(n) {
  let temp = n;
  let sum = 0;
  while (temp) {
    let digit = temp % 10;
    sum += factorial(digit);
    temp = Math.trunc(temp / 10);
  }

  if (sum === n) return "Strong";
  else return "not Strong";
}

function factorial(n) {
  if (n == 1 || n == 0) return 1;
  return n * factorial(n - 1);
}

let n = 145;
console.log(`The given number ${n} is `, isStrong(n));
