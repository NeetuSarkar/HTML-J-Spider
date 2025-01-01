function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i < Math.trunc(n / 2); i++) {
    if (n % i == 0) return false;
  }
  return true;
}

let n = 7;
console.log(isPrime(n));
