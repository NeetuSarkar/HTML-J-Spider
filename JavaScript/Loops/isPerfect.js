function isperfect(num) {
  let fact_sum = 0;
  for (let i = 1; i <= Math.trunc(num / 2); i++) {
    if (num % i == 0) fact_sum += i;
  }

  if (fact_sum == num) console.log(`${num} is perfect`);
  else console.log(`${num} is not perfect`);
}

let num = 6;
isperfect(num);
