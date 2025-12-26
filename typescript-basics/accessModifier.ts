class UserData{
  private name: string;
  private age: number;
    constructor(name: string, age: number) {
      this.name=name;
      this.age=age;
  }
  getDetails(){
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}
let newData = new UserData("Hari",25);
newData.getDetails();