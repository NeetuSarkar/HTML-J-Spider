function isPalindrome(num) {
  let revNum = 0;
  let org = num;

  while (org > 0) {
    revNum = revNum * 10 + (org % 10);
    org = Math.trunc(org / 10);
  }

  if (revNum === num) console.log(`${num} is palindrome`);
  else console.log(`${num} is not palindrome`);
}

let num = 1221;
isPalindrome(num);
