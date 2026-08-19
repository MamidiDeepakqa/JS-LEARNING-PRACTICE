//data Types...
let name = "Deepak";
let age = 30;
let isAvailable = true;
let isActive = undefined;
let isCountable = null;

console.log(typeof name);
console.log(typeof isCountable);

//operators&Conditions.....
//comparison operators..
// ==, ===
let sum = 5;
let sum1 = "5";
console.log(sum == sum1);
console.log(sum === sum1);

//Logical operators..
//&&, ||, !
let ab = true;
let bc = false;

console.log(ab && bc);
console.log(ab || bc);
console.log(ab !== bc);

//conditional operators..
//if else.

let status = 200;
let responseBody = "Login Successful";

if (status === 200 && responseBody === "Login Successful") {
    console.log("Test Passed")
} else {
    console.log("Test Failed");
}


//loops....
//for loop..
for (let a = 0; a <= 5; a++) {
    console.log("a value is: ", a);
}

//while loop..
let attempt = 0;
while (attempt < 3) {
    console.log("Attempted to login: ", attempt);
    attempt++;
}

//for of loop..
let statusCodes = [200, 201, 204, 400, 401, 403, 404, 500];

for (let codes of statusCodes) {
    if (codes === 401) {
        console.log(codes);
    }
}

//Arrays....
let fruits = ["apples", "oranges", "bananas", "green apples"];

console.log(fruits[3]);

console.log(fruits);

fruits.push("kiwi");

console.log(fruits);

// fruits.splice(1,2);

// console.log(fruits);

//.forEach() -- Do something with each items.
//.forMap() -- Transform the items into something new.
//.filter() -- Keep the items which are matching the condition.

//.forEach()
fruits.forEach((code) => {
    console.log(code);
});

//.forMap()
let fruity = fruits.map((code) => {
    return code;
});
console.log(fruity);

//.filter()..
let fruitz = fruits.filter((code) => {
    return code === "kiwi";
})
console.log(fruitz);

//functions...
function checkLogin(name) {
    console.log("hello world: ", name);
}
checkLogin("Earth");

const chkLogin = (username) => {
    console.log(username);
}

chkLogin("Salman Khan");

//objects....
let user = {
  name: "test user",
  role: "qa",
  location: "hyd"
}

console.log(user.name);
user.name = "QA Engineer";
console.log(user.name);
user.properties = "test";
console.log(user);

console.log("============")

//Get all the values of an object without knowing the key's
Object.keys(user).forEach((details)=>{
    console.log(details + " : " + user[details]);
});


//async&Await..
//pending --- Waiting for the result.
//fulfilled -- Completed Successfully, here is the result.
//rejected -- Something went wrong, here is the error.

//Async tell to function this function contains slow operations.

//tryCatch...
try{

}catch(error){

}finally{
console.log("Always prints");
}