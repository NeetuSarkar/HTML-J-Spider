function PrintDay() {
  let d1 = new Date();
  let day = d1.getDay();

  let today = "Today is ";

  switch(day){
    case 0:
      today += "Sunday";
      break;
    case 1:
      today += "Monday";
      break;
    case 2:
      today += "Tuesday";
      break;
    case 3:
      today += "Wednesday";
      break;
    case 4:
      today += "Thursday";
      break;
    case 5:
      today += "Friday";
      break;
    case 6:
      today += "Saturday";
      break;
    default:
      console.log("Error!!");
  }

  console.log(today);
  
}

PrintDay();
