function pattern(n) {
  let pat = "";
  let star = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= star; j++) {
      pat += i;
    }
    pat += "\n";
    if (i < n / 2) star++;
    else star--;
  }
  return pat;
}

console.log(pattern(7));
