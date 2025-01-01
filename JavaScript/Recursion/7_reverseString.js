function reverseString(str, i, j) {
  if (i >= j) return str;

  // Convert the string to an array for mutation
  let strArray = str.split("");

  // Swap characters
  let temp = strArray[i];
  strArray[i] = strArray[j];
  strArray[j] = temp;

  // Convert back to a string and recursively call the function
  return reverseString(strArray.join(""), i + 1, j - 1);
}

let str = "Neetu";
str = reverseString(str, 0, str.length - 1);
console.log(str); // Output: "uteeN"
