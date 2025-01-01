let str = "Abc10def@.";

function validation(str) {
  if (str.length < 8 && str.length > 10) return false;
  let cap = 0;
  let small = 0;
  let digit = 0;
  let special = 0;
  let dot = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      cap++;
    } else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      small++;
    } else if (char >= "0" && char <= "9") {
      digit++;
    } else {
      if (char === ".") dot++;
      special++;
    }
  }

  if (small >= 3 && cap >= 2 && digit >= 1 && special >= 2 && dot >= 1)
    return true;
  else return false;
}

console.log(validation(str));
