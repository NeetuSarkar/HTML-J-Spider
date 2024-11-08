function fact(num) {
  let fac = 1;
  for (let i = 1; i <= num; i++) {
    fac *= i;
  }
  console.log(`The factorial of ${num} is ${fac}`);
}

let num = 5;
fact(num);
