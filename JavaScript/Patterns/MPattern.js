function pattern(n) {
  let pat = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (
        j == 0 ||
        j == n - 1 ||
        (i === j && j <= n / 2) ||
        (i + j === n - 1 && j >= n / 2)
      )
        pat += "*";
      else pat += " ";
    }
    pat += "\n";
  }
  console.log(pat);
}

pattern(7);
