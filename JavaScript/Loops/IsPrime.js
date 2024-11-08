function isPrime(num) {

  for (let i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
}

let num = 2;
if (isPrime(num)) console.log(`${num} is prime`);
else console.log(`${num} is not prime`);