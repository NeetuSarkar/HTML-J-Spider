function main() {
  m1(a);
  console.log(a);
}

function m1(a, b) {
  console.log(a, b);
  console.log(arguments);
}

main();
