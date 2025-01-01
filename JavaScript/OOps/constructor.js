class A {
  constructor() {
    console.log("A class constructor is executed");
  }
}

class Test1 {
  static main() {
    new A();
  }
}

Test1.main();
