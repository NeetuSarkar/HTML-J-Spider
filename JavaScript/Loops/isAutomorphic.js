function isAutomorphic(num) {
  let numSqr = num * num;
  let org = num;

  while (org) {
    if (numSqr % 10 != org % 10) return false;
    numSqr = Math.trunc(numSqr / 10);
    org = Math.trunc(org / 10);
  }
  return true;
}

let num = 376;
if (isAutomorphic(25)) console.log(`${num} is automorphic`);
else console.log(`${num} is not automorphic`);
