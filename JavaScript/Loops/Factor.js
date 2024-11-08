function factor(num) {
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) console.log(i);
  }
}

let num = 6;
factor(num);
