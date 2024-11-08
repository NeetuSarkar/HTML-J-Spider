let student = {
  stuId: "JS101",
  fName: "Neetu",
  lName: "Sarkar",
  brithYear: 2001,
  gender: "Male",
};

// console.log(student);

//Accessing props using dot notation
// let studnetName = student.fName;
// let studentId = student.stuId;

// console.log(`Student id is ${studentId} and Student Name is ${studnetName}`);

//Accessing props using [] notation
let studnetName = student["fName"];
let stuId = student["stuId"];
console.log(`Student id is ${stuId} and Student Name is ${studnetName}`);

let obj1 = new student();
obj1.fName = "Jeetu";
console.log(obj1.fName);
