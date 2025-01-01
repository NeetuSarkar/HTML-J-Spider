String.prototype.sliceSlice = function () {
  let i = 0;
  let j = 0;
  let word = "";
  let arr = [];
  const str = this; // Use `this` to reference the string instance

  while (j < str.length) {
    if (str[j] === " ") {
      arr.push(word);
      word = "";
      i = j + 1;
    } else {
      word += str[j];
    }
    j++;
  }
  arr.push(word); // Push the last word
  return arr;
};

function wordOcurrance(str) {
  let words = str.sliceSlice();

  for (let i = 0; i < words.length; i++) {
    let count = 1;
    if (words[i] == "") continue;
    for (let j = i + 1; j < words.length; j++) {
      if (words[i] === words[j]) {
        count++;
        words[j] = "";
      }
    }
    console.log(`${words[i]} = ${count}`);
  }
}

let str = "Happy Happy Birthday";
wordOcurrance(str);
