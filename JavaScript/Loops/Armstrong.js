function armStrong(num) {
  let digits = Math.trunc(Math.log10(num) + 1);
  let sum = 0;
  let temp = num;
  while (temp) {
    sum += Math.pow(temp % 10, digits);
    temp = Math.trunc(temp / 10);
  }
  return sum === num;
}

let num = 153;
if (armStrong(num)) 
  console.log(`${num} is armstrong.`);
else 
  console.log(`${num} is not armstrong`);
