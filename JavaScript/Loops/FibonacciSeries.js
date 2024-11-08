function alternativeFibonacci(n) {
  let a = 0; 
  let b = 1;
  let count = 0;

  while (count < n) {
    if (count % 2 == 0) {
      console.log(a);
    }

    let next = a + b;
    a = b;
    b = next;
    count++;
  }
}

alternativeFibonacci(20);
