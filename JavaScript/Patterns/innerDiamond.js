function pattern(n) {
  let pat = "";
  let space = 1;
  let left = Math.trunc(n / 2);
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= left; j++) {
      pat += "*";
    }
    for (let j = 1; j <= space; j++) {
      pat += " ";
    }
    for (let j = 1; j <= left; j++) {
      pat += "*";
    }
    if (i <= n / 2) {
      left--;
      space += 2;
    } else {
      left++;
      space -= 2;
    }
    pat += "\n";
  }
  console.log(pat);
}

pattern(7);
