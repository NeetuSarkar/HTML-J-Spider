function factor(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) count++;
  }
  console.log(`There are ${count} factor for the num ${num}`);
}

let num = 6;
factor(num);
