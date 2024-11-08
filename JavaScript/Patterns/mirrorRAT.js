function pattern() {
  let str = "";
  for (let i = 5; i > 5; i--) {
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    str += "\n";
  }
  console.log(str);
}

pattern();
