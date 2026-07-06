//Comparison Operators........

let num = "5"
let num1 = 5

console.log(num == num1)

// == will convert one form to another to make result true
// === will compare the actual values without conversion [this should use in automation]


//Logical operators...........

// && both values should be true
// || any one value should be true
// != It will flip the result

let isLogged = true
let hasPermission = false

console.log(isLogged && hasPermission);

console.log(isLogged || hasPermission)

console.log(!isLogged)
console.log(!hasPermission)


//Conditional operators..........

//if else..

let QA = "loggedIn1"
let Prod = "notLogge0dIn"

if(QA === "loggedIn" && Prod === "notLoggedIn"){
    console.log("Test Passed")
}else if(QA === "loggedIn" || Prod === "notLoggedIn"){
    console.log("Test Passed")
}else{
    console.log("No Result..")
}