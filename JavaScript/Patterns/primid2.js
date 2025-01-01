function pattern(n) {
  let pat = "";
  let start = n * 2 - 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i - 1; j++) {
      pat += " ";
    }
    for (let j = start; j >= 1; j--) {
      pat += j;
    }
    pat += "\n";
    start -= 2;
  }
  console.log(pat);
}

pattern(5);
