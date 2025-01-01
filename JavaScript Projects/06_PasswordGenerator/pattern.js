function pattern(n) {
  let stars = 1;
  let pat = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= stars; j++) {
      pat += "*";
    }
    if (i < n / 2) {
      stars++;
    } else {
      stars--;
    }
    pat += "\n";
  }
  console.log(pat);
}

pattern(7);
