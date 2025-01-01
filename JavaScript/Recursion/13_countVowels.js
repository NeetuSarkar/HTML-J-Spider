function countVowels(str) {
  if (str === "") return 0;
  const vowels = "aeiouAEIOU";
  return (vowels.includes(str[0]) ? 1 : 0) + countVowels(str.slice(1));
}

console.log(countVowels("Neetu"));
