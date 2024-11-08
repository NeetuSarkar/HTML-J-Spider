function pattern(n) {
  let res = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if (i === Math.ceil(n / 2)) {
        res += 2 * i + j;
      } else res += "*";
    }
    res += "\n";
  }
  console.log(res);
}

pattern(5);
