//Objects........

let user = {
  name: "test user",
  role: "qa",
  location: "hyd"
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

Object.keys(users).forEach((key) => {

  console.log(key + " : " + users[key]);
});



let loginResponse = {
  status: 200,
  message: "Login successful",
  data: {
    userId: 42,
    username: "deepak_qa",
    role: "admin",
    token: "xyz789abc"
  }
};

// Print the status and message directly from loginResponse...

Object.keys(loginResponse).forEach((key) => {

  console.log(key + " : " + loginResponse[key]);

});

//Print the username and token from inside the nested data object.

console.log("username : ", loginResponse.data.username);
console.log("token : ", loginResponse.data.token);


//if/else — check status === 200 AND data.role === "admin" → print "Access granted" or "Access denied".

loginResponse.data.forEach((key) => {
  let access = loginResponse.status === 200 && loginResponse.data.role === "admin" ? "Access granted" : "Access denied";
});

console.log(access);