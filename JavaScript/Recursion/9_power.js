function power(a, b) {
  if (b < 1) return 1;
  return a * power(a, b - 1);
}

console.log(power(8, 8));
