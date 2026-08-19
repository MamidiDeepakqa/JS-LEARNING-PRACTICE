//variables...
let ab = 5;
const bc = 10;

console.log(ab);
console.log(bc);

//Data Types...
let name = "string";
let age = 30;
let isActive = true;
let isAvailable = undefined;
let isVisible = null;

console.log(typeof isVisible);
console.log(typeof name);
console.log(typeof isActive);


//Operators&Conditions..
// a.Comparison operator
// ==, ===
//b.logical operator
// &&, ||, !
//c.conditional operator
//if else


//Loops....
//for loop
//while loop
//for of loop
let fruits = ["apple", "oranges", 'jack fruit', "kiwi"];
for (let fruit of fruits) {
    console.log("Fruit Name is: ", fruit);
}

//Arrays......
console.log(fruits);
fruits.push("Guava");
console.log(fruits);

console.log(fruits[3]);

//.forEach() -- do something with each item
//.map() -- Transform each item into something new
//.filter() -- keep only matched condition records.

console.log("Below one forEach().....");
//.forEach().......
fruits.forEach((code) => {
    console.log(code);
});

console.log("Below one map().....");
//.map()........
let fruity = fruits.map((code) => {
    return code === "apple" ? "PASS" : "FAIL";
});
console.log(fruity);

console.log("Below one filter().....");
//.filter().........
let fru = fruits.filter((code) => {
    return code !== "apple";
});

console.log(fru);

let testResults = [
    { name: "login_test", status: 200 },
    { name: "checkout_test", status: 404 },
    { name: "payment_test", status: 200 },
    { name: "logout_test", status: 500 },
    { name: "signup_test", status: 201 }
];

//1.Use .filter() to create a new array containing only the failed tests (anything that's not 200 or 201).
let failedTests = testResults.filter((result) => {
    return result.status !== 200 && result.status !== 201;
});
console.log(failedTests);

//2.Use .forEach() to print each failed test's name and status like: "FAILED: checkout_test - 404"
failedTests.forEach((failedTest) => {
    console.log("FAILED: " + failedTest.name + " - " + failedTest.status)
});


//functions........

function checkLogin(alpha) {
    console.log("received value is: " + alpha);
}
checkLogin("Deepak");

const chkLogin = (statusCode) => {
    console.log("Status code is: " + statusCode);
}
chkLogin("500");


//Objects........

let user = {
    name: "test userrrrrrrrrrrrr",
    role: "qa",
    location: "hyd"
}

//Object is a collection of key-value pair.

//Accessing value...

console.log(user.name);

let key = "name";

console.log((user[key]));

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

