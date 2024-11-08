function reverseNum(num) {
  let revNum = 0;
  let org = num;

  while (org > 0) {
    revNum = revNum * 10 + (org % 10);
    org = Math.trunc(org / 10); 
  }
  console.log(`The reverse of ${num} is ${revNum}`);
}

let num = 1234;
reverseNum(num);
