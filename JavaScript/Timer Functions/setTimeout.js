console.log(new Date().toLocaleDateString());
function main() {
  console.log("main starts");
  console.log("main ends");
}

let id = setTimeout(main, 3000);
clearTimeout(id);
console.log(id);
