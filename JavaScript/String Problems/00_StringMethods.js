// 1. charAt(index): this return character at specified index
console.log("Neetu".charAt(1));

//2. concate(string2,...,stringN): concatenates strings
let str = "Neetu";
console.log(str.concat("you", "are", "awsome"));

//3. includes(substring): check if the string contains the specified substring
str = "Hello";
console.log(str.includes("ll"));

//4. indexOf(substring, startPos): return the first occurance of a substring
str = "Neetu";
console.log(str.indexOf("e"));

//5. split(seperator, limit): split the string into an array based on a seperator
str = "Hello World";
console.log(str.split(" "));
