function toBinary(n) {
  if (n === 0) return "0";
  return toBinary(Math.floor(n / 2)) + (n % 2);
}
console.log(toBinary(20));
