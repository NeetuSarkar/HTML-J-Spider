function pattern(n) {
  let pat = "";
  let star = 1;
  let space = Math.trunc(n / 2);
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= space; j++) {
      pat += " ";
    }
    let num = 1;
    for (let j = 1; j <= star; j++) {
      pat += num;
      if (j <= star / 2) num++;
      else num--;
    }
    pat += "\n";
    if (i <= n / 2) {
      space--;
      star += 2;
    } else {
      space++;
      star -= 2;
    }
  }
  console.log(pat);
}

pattern(7);
