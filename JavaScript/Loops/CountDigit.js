function countDigit(num){
  let count = 0;
  while(num){
    num = Math.trunc(num/10);
    count++;
  }
  console.log(count);
}

let num = 1234;
countDigit(num);