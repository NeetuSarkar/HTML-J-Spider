function firstEven(arr) {
  return arr.find((num) => num % 2 === 0);
}
console.log(firstEven([1, 3, 5, 8]));
