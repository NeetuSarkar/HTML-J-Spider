function digitSum(num) {
  let sum = 0;
  while (num) {
    sum += num % 10;
    num = Math.trunc(num / 10);
  }

  console.log(sum);
}

let num = 1234;
digitSum(num);
