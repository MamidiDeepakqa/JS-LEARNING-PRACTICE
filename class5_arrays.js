//Arrays........

//Creating and accessing array.........

let names = ["umesh","mahesh","ganesh","srujan"];

console.log("accessing array value of Index : ", names[2]);

console.log(names.length);


//Adding values to the existing array.......

names.push("Kishan");

console.log(names.length);

console.log(names);


//.foreach() -- Do something with Each Item....
//.map() -- Transform each item into something new....
//.filter() --keep only items which are matched a condition....


//.forEach -- Do something with Each items...

let statusCodes = [200,201,400,404,500,501];

statusCodes.forEach((code)=>{

    console.log("Status Codes : ", code);
})


//.map() --Transform items to something new....

let stateCode = [400,200,404,500];
let codes = stateCode.map((code)=>{
    return code === 200 ? "PASS" : "FAIL";
});
console.log(codes);


//.filter() -- Keep only items matched the condition..

let allCodes = [200, 404, 500, 201, 403];

let matchedValues = allCodes.filter((code)=>{

    return code != 404 && code != 403;

})

console.log("Matched values are : ",matchedValues);



let testResults = [
  { name: "login_test", status: 200 },
  { name: "checkout_test", status: 404 },
  { name: "payment_test", status: 200 },
  { name: "logout_test", status: 500 },
  { name: "signup_test", status: 201 }
];

//1.Use .filter() to create a new array containing only the failed tests (anything that's not 200 or 201).

let failedtests = testResults.filter((code)=>{

  return  code.status !==200 && code.status !==201;

});

console.log("Failed test cases : ", failedtests);

//2.Use .forEach() to print each failed test's name and status like: "FAILED: checkout_test - 404"

failedtests.forEach((code)=>{

console.log("Failed: " + code.name + " - " + code.status);    

});