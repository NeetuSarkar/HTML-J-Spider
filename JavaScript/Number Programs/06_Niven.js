function digitSum(n) {
  let sum = 0;
  while (n) {
    sum += n % 10;
    n = Math.trunc(n / 10);
  }
  return sum;
}

function isNiven(n) {
  let digitsum = digitSum(n);
  if (n % digitsum == 0) return "Niven";
  else return "not Niven";
}

let n = 21;
console.log(`The given number ${n} is `, isNiven(n));
