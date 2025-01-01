function removeDuplicate(str) {
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    if (!ans.includes(str[i])) ans += str[i];
  }
  return ans;
}

console.log(removeDuplicate("banana"));
