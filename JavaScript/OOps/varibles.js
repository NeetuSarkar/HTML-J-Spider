class C {
  static a = 10;
  static main() {
    console.log(this.a);
  }
}

C.main();
