function pattern(n) {
  let pat = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i % 2 === 0) pat += j;
      else pat += "*";
    }
    pat += "\n";
  }
  console.log(pat);
}

pattern(6);
