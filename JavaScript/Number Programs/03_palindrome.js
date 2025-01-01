function isPalindrome(n) {
  let temp = n;
  let rev = 0;
  while (temp) {
    let digit = temp % 10;
    rev = rev * 10 + digit;
    temp = Math.trunc(temp / 10);
  }
  if (rev === n) return "palindrome";
  else return "not palindrome";
}

let n = 121;
console.log(`the given number ${n} is `, isPalindrome(n));
