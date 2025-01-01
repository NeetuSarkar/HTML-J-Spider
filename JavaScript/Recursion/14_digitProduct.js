function digitProduct(n) {
  if (n === 1) return 0;
  if(n < 10) return n;

  return (n % 10) * digitProduct(Math.trunc(n / 10));
}

console.log(digitProduct(123));
