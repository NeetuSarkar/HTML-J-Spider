function calc(n1, n2, type) {
  let a = type(n1, n2);
  console.log(a);
  console.log("Neetu");
}

function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}

calc(10, 20, add);
