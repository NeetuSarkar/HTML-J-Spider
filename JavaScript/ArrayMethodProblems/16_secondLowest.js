function findSecondLowest(arr) {
  let arr2 = [...new Set(arr)];
  arr = arr2.sort();

  if (arr[1]) {
    console.log(arr);
  } else {
    console.log("Second lowest is not present");
  }
}

findSecondLowest([10, 30, 5, 20, 25]);
