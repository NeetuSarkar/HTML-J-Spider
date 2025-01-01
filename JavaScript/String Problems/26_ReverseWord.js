function rev2(str) {
  let ans = "";
  for (let i = str.length - 1; i >= 0; i--) {
    ans += str[i];
  }
  return ans;
}

function reverse(str) {
  let arr = str.split(" ");
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    let rev = rev2(arr[i]);
    res += rev;
    if (i !== arr.length - 1) res += " ";
  }
  console.log(res);
}

let str = "javascript is very easy";
reverse(str);
