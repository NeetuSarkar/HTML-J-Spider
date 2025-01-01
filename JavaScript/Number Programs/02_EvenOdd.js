function EvenOdd(n) {
  if (n % 2 == 0) return "even";
  else return "odd";
}

let n1 = 1;
let n2 = 2;
console.log(`the given number ${n1} is `, EvenOdd(n1));
console.log(`the given number ${n2} is `, EvenOdd(n2));
