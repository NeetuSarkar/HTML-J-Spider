function digitSum(n) {
  if (n < 1) return 0;
  return (n % 10) + digitSum(Math.trunc(n / 10));
}

console.log(digitSum(1234));
