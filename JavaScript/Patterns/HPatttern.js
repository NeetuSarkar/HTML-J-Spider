function pattern() {
  let pat = "";
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
      if (j == 1 || j == 5 || i == 3) pat += "*";
      else pat += " ";
    }
    pat += "\n";
  }
  console.log(pat);
}

pattern();
