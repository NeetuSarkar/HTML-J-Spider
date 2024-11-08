function isNiven(num) {
  let sum = 0;
  let org = num;
  while (org) {
    sum += org % 10;
    org = Math.trunc(org / 10);
  }
  if (num % sum == 0) console.log(`${num} is Niven`);
  else console.log(`${num} is not Niven`);
}

let num = 23;
isNiven(num);
