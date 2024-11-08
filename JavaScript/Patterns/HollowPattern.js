function pattern() {
  let str = "";
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      if (i == 1 || j == 1 || i == 10 || j == 10) str += "*";
      else str += " ";
    }
    str += "\n";
  }
  console.log(str);
}
pattern();
