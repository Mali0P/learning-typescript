class User{
  name:string;
  age:number;
  constructor(name:string,age:number){
    this.name=name;
    this.age=age;
} 
greet(){
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}
}
let newUser = new User("Hari",23)
newUser.greet();


