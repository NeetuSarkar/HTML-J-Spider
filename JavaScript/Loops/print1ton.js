function print(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    if (i <= 9) str = str + i + ",";
    else str = str + i;
  }
}

print(10);
