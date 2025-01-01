function countDigit(n) {
  let count = 0;
  let temp = n;
  while (temp) {
    count++;
    temp = Math.trunc(temp / 10);
  }
  return count;
}

function isArmstrong(n) {
  let temp = n;
  let sum = 0;
  let count = countDigit(temp);
  while (temp) {
    let digit = temp % 10;
    sum += Math.pow(digit, count);
    temp = Math.trunc(temp / 10);
  }
  if (sum === n) return "Armstrong";
  else return "Not Armstrong";
}

let n = 153;
console.log(`The given number ${n} is `, isArmstrong(n));
