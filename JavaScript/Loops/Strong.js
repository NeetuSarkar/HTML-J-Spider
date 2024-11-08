function isStrong(num) {
  let org = num;
  let sum = 0;
  while (num) {
    let digit = num % 10;
    let fact = 1;
    for (let i = 1; i <= digit; i++) {
      fact *= i;
    }
    sum += fact;
    num = Math.trunc(num / 10);
  }
  return sum === org;
}

let num = 100;
if (isStrong(num)) console.log(`${num} is strong`);
else console.log(`${num} is not strong`);
