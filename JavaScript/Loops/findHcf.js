function findHCF(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function findLcm(a, b) {
  return (a * b) / findHCF(a, b);
}

let num1 = 12;
let num2 = 15;

let hcf = findHCF(num1, num2);
let lcm = findLcm(num1, num2);
console.log(`The HCF of ${num1} and ${num2} is ${hcf}`);

console.log(`The LCM of ${num1} and ${num2} is ${lcm}`);
