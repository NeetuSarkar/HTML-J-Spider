function MinOcurrance(str) {
  let arr = new Array(26).fill(0);
  str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    arr[str.charCodeAt(i) - 97]++;
  }

  let mini = Infinity;
  let char = "";
  for (let i = 0; i < 26; i++) {
    if (arr[i] > 0) {
      if (mini > arr[i]) {
        mini = arr[i];
        char = String.fromCharCode(97 + i);
      }
    }
  }
  return char;
}

let str = "banana";
console.log(MinOcurrance(str));
