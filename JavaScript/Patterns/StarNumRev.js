function pattern(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (j <= n - i) str += " ";
      else str += j;
    }
    str += "\n";
  }
  console.log(str);
}

pattern(5);

