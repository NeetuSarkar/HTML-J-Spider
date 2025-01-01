function digitSum(n) {
  let ans = 0;
  while (n) {
    let digit = n % 10;
    ans += digit;
    n = Math.trunc(n / 10);
  }

  return ans;
}

let n = 123;
console.log(`The sum of all the digits in the number ${n} is `, digitSum(n));
