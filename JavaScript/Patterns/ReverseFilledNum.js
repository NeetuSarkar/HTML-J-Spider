function pattern(n) {
  let pat = "";
  for (let i = n; i > 0; i--) {
    for (let j = 1; j <= n; j++) {
      if (i == j) pat += j;
      else pat += "*";
    }
    pat += "\n";
  }
  console.log(pat);
}

pattern(7);
