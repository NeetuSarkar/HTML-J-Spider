function reverse(str) {
  let arr = str.split(""); // Convert string to array
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }

  return arr.join(""); // Convert array back to string
}

let str = "Neetu";
console.log(reverse(str)); // Output: "uteeN"
