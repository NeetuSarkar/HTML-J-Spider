function digit_count(n) {
  let count = 0;
  while (n) {
    count++;
    n = Math.trunc(n / 10);
  }
  return count;
}

function reverseDigits(n) {
  let ans = 0;
  while (n) {
    let digit = n % 10;
    ans = ans * 10 + digit;
    n = Math.trunc(n / 10); // This line was missing in your code
  }
  return ans;
}

function isAutomorphic(n) {
  let num_squared = Math.pow(n, 2); // Square the number
  let count_number = digit_count(n); // Count digits of the original number
  let last_digits_ofSquaredNumberRev = 0;

  // Extract the last digits of the squared number
  while (count_number) {
    let digit = num_squared % 10;
    last_digits_ofSquaredNumberRev =
      last_digits_ofSquaredNumberRev * 10 + digit;
    num_squared = Math.trunc(num_squared / 10); // Reduce the squared number
    count_number--;
  }

  // Reverse the last digits to compare with the original number
  let last_digits_ofSquaredNumber = reverseDigits(
    last_digits_ofSquaredNumberRev
  );

  // Check if the number is Automorphic
  if (n === last_digits_ofSquaredNumber) return "Automorphic";
  else return "Not Automorphic";
}

let n = 76;
console.log(`The given number ${n} is ${isAutomorphic(n)}`);
