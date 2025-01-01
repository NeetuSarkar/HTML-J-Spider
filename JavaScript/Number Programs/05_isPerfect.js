function isPerfect(n) {
  let sum = 0;
  for (let i = 1; i <= Math.trunc(n / 2); i++) {
    if (n % i == 0) sum += i;
  }
  if (sum === n) return "Perfect";
  else return "not Perfect";
}

let n = 496;
console.log(`The given number ${n} is `, isPerfect(n));
