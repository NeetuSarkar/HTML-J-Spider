function countSum(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "0" && str[i] <= "9") {
      sum += Number(str[i]) ;
    }
  }
  console.log(sum);
}

let str = "JSP@1404.com";
countSum(str);
