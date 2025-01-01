let str = "Abc10def@";
console.log(str.toLowerCase());
console.log(str.charAt(2));

function countChar(str) {
  let CapCount = 0;
  let SmallCount = 0;
  let digitCount = 0;
  let specialCharacter = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    // Checking for uppercase letters
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      CapCount++;
    }
    // Checking for lowercase letters
    else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      SmallCount++;
    } else if (char >= "0" && char <= "9") {
      digitCount++;
    } else {
      specialCharacter++;
    }
  }
  console.log(`capital letter count = ${CapCount} `);
  console.log(`small letter count = ${SmallCount}`);
  console.log(`digit count = ${digitCount}`);
  console.log(`speical character count = ${specialCharacter}`);
}

countChar(str);
