function fibonacci(start, end) {
  let a = 0;
  let b = 1;

  while (a <= end) {
    if (a >= start) {
      console.log(a);
    }
    let next = a + b;
    a = b;
    b = next;
  }
}
let start = 1;
let end = 50;

fibonacci(start, end);
