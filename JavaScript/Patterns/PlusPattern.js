function printPlusPattern(n) {
  let pat = "";
  const mid = Math.floor(n / 2) + 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === mid) {
        pat += j;
      } else if (j === mid) {
        pat += i;
      } else {
        pat += " ";
      }
    }
    pat += "\n";
  }
  console.log(pat);
}

printPlusPattern(5);
