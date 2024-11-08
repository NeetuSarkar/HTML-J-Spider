function pattern(n) {
  let res = "";
  for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= n; j++) {
      if (i == j) res += i * 2;
      else res += "*";
    }
    res += "\n";
  }
  console.log(res);
}

pattern(5);
