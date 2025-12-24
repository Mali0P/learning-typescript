//to provide the rules and structure to the object
 interface User {
    name: string;
    age: number;
    email?: string; //optional property
  }
  interface Admin extends User {
    isAdmin: boolean;
  }

  let storeUser: User;
  storeUser = {
    name: "Hari",
    age: 25,
    email: "",
  };
  console.log(storeUser);
  let storeAdmin: Admin;
  storeAdmin={
    isAdmin:true,
    name:"Admin Hari",
    age:30
  }
  console.log(storeAdmin)
