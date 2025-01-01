function pattern(n) {
  let pat = "";
  let star = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = star; j >= 1; j--) {
      pat += j;
    }
    pat += "\n";
    if (i < n / 2) star++;
    else star--;
  }
  return pat;
}

console.log(pattern(7));
