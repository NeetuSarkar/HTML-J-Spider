function isAnagram(str1, str2) {
  if (str1.length != str2.length) return false;

  let arr1 = [...str1];
  let arr2 = [...str2];

  arr1.sort();
  arr2.sort();

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) return false;
  }
  return true;
}

let str1 = "race";
let str2 = "care";
isAnagram(str1, str2) ? console.log("is Anagram") : console.log("not Anagram");
