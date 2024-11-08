function pattern(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      str += " *";
    }
    for (let j = 1; j <= n * 2 - i * 2; j++) {
      str += "  ";
    }
    for (let j = 1; j <= i; j++) {
      str += " *";
    }
    str += "\n";
  }
  console.log(str);
}

pattern(10);
