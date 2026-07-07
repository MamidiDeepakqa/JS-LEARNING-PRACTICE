//Objects........

let user ={
    name : "test user",
    role : "qa",
    location : "hyd"
}

//Object is a collection of key-value pair.

//Accessing value...

console.log(user.name);

let key = "name";

console.log((user[key]));

console.log(user)

//Updating the value in object...

user.name = "QA Engineer";

console.log(user.name);

console.log(user)

//Adding a new property...

user.experience = 10;

console.log(user);

//Get all the values of an object without knowing the key's
let users = {
  name: "Deepak",
  role: "QA Engineer",
  isLoggedIn: true
};

Object.keys(users).forEach((key)=>{

    console.log(key + " : " + users[key]);
});