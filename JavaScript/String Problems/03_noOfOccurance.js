function occurance(str) {
  let arr = new Array(26).fill(0);
  str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    arr[str.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i < 26; i++) {
    if (arr[i] > 0) {
      console.log(`${String.fromCharCode(97 + i)} = ${arr[i]}`);
    }
  }
}

let str = "banana";
occurance(str);
