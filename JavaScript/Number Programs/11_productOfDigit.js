function digitProduct(n) {
  let ans = 1;
  while (n) {
    let digit = n % 10;
    ans *= digit;
    n = Math.trunc(n / 10);
  }

  return ans;
}

let n = 123;
console.log(
  `The product of all the digits in the number ${n} is `,
  digitProduct(n)
);
