function pattern(n) {
  let pat = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n + i - 1; j++) {
      if (j <= n - i) pat += " ";
      else pat += "*";
    }
    pat += "\n";
  }
  console.log(pat);
}

pattern(5);
