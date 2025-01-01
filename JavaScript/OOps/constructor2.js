class Student {
  name;
  age;
  static count = 0;
  constructor(name, age) {
    this.name = name;
    this.age = age;
    Student.count++;
  }
}

let s1 = new Student("neetu", 23);
let s2 = new Student("Heet", 22);
console.log(s1);
console.log(Student.count);