// arrays..

let fruits = ["orange","banana","apple","coconut"];

console.log(fruits[2]);

console.log(fruits.length);

console.log(fruits);

fruits.push("Omega");

console.log(fruits);

//.forEach -- Do something with the items..
//.map -- Transform items to something else..
//.filter -- keep only items matched a condition..


fruits.forEach((code)=>{
    console.log("fruits in the list ",code);
});


let newFruitsArrayMap = fruits.map((code)=>{
    return code === "apple" ? "PASS" : "FAIL";
});

console.log(newFruitsArrayMap);


let newFruitsArrayFilter = fruits.filter((code)=>{

    return code !== "apple" && code !== "Omega";
});

console.log(newFruitsArrayFilter);



let testResults = [
  { name: "login_test", status: 200 },
  { name: "checkout_test", status: 404 },
  { name: "payment_test", status: 200 },
  { name: "logout_test", status: 500 },
  { name: "signup_test", status: 201 }
];

//1.Use .filter() to create a new array containing only the failed tests (anything that's not 200 or 201).

let failedTestCases = testResults.filter((code)=>{
    return code.status !== 200 && code.status !== 201;
});

console.log(failedTestCases);

//2.Use .forEach() to print each failed test's name and status like: "FAILED: checkout_test - 404"

failedTestCases.forEach((code)=>{
    console.log("FAILED : " + code.name + " - " + code.status)
});