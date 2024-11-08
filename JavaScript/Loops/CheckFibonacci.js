function isFibonacci(n) {
  let a = 0;
  let b = 1;

  if (n == a || n == b) return true;
  let count = 2;

  while (b < n) {
    let next = a + b;
    a = b;
    b = next;
    count++;
  }

  return b === n;
}

const num = 21;

if (isFibonacci(num)) console.log(num + " is a Fibonacci number.");
else console.log(num + " is not a fibonacci number.");
