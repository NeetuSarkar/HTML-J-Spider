function pattern(n) {
  let pat = "";
  let space = Math.floor(n / 2);
  let star = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= space; j++) {
      pat += " ";
    }
    for (let j = 1; j <= star; j++) {
      pat += "*";
    }
    if (i < n / 2) {
      star++;
      space--;
    } else {
      star--;
      space++;
    }
    pat += "\n";
  }
  return pat;
}

console.log(pattern(7));
