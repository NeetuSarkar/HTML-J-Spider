function MaxOcurrance(str) {
  let arr = new Array(26).fill(0);
  str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    arr[str.charCodeAt(i) - 97]++;
  }

  let maxi = -1;
  let char = "";
  for (let i = 0; i < 26; i++) {
    if (arr[i] > 0) {
      if (maxi < arr[i]) {
        maxi = arr[i];
        char = String.fromCharCode(97 + i);
      }
    }
  }
  return char;
}

let str = "banana";
console.log(MaxOcurrance(str));
