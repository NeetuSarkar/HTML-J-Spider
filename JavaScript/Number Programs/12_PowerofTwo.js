function powerOfTwo(n) {
  let pow = 2;
  for (let i = 1; i <= Math.trunc(n / 2); i++) {
    if (n == pow) return "power of two";
    pow *= 2;
  }
  return "not power of two";
}

let num = 8;
console.log(`The given number ${num} is `, powerOfTwo(num));
