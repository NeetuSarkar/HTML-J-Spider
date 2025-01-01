function occurance(str) {
  let arr = new Array(26).fill(0);

  str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    arr[str.charCodeAt(i) - 97]++;
  }

  // let max = 0;
  // let char = "";
  // for (let i = 0; i < 26; i++) {
  //   if (arr[i] > 0) {
  //     if (max < arr[i]) {
  //       max = arr[i];
  //       char = String.fromCharCode(97 + i);
  //     }n`
  //   }
  // }

  let char = String.fromCharCode(arr.indexOf(Math.min(...arr)) + 97);

  console.log(`The maximum occurance character in the string is = ${char}`);
}

let str = "banana";
occurance(str);
