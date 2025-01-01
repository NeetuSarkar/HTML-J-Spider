function reverse_num(n) {
  let ans = 0;
  while (n) {
    let digit = n % 10;
    ans = ans * 10 + digit;
    n = Math.trunc(n / 10);
  }
  return ans;
}

let n = 1234;
console.log(`The reverse number of the given number ${n} is `, reverse_num(n));
