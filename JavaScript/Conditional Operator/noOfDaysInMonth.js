function noOfDays(year, month) {
  if (month == 2) {
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
      console.log(29);
    } else console.log(28);
  } else if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12
  )
    console.log(31);
  else console.log(30);
}

let year = 2000;
let month = 4;
noOfDays(year, month);
