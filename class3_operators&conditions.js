//Comparison Operators...

// == and ===

// == is always converts one type to match another type

//ex : 
 let number1 = "5"
 let number2 = 5

console.log(number1 == number2) //This operator will convert number1 to match the number2 which always give True.

console.log(number1 === number2) //This operator will not convert any value this will compare correctly.

// always should use === in automation testing to do the assertions....

// ex : In API testing if expected value can be number but in response it returned string then it will be test case failure [assertions fails].
//If used == In API testing if expected value can be number but in response it returned string then it will be convert the values then test case passes [assertions passes]. which is wrong and should not use.




console.log("----------------------------")
// Logical operators: &&, ||, !

let isLoggedIn = true
let hasPermission = false

console.log(isLoggedIn && hasPermission);  // false — BOTH must be true
console.log(isLoggedIn || hasPermission);  // true  — at least ONE is true
console.log(!isLoggedIn);                  // false — flips true to false



console.log("----------------------------")

//Conditionals: if / else and ternary

let statusCode = 200;
let responseBody = "Login Successful";

if(statusCode === 200 && responseBody === "Login successful"){
    console.log("test passed")
}else {
    console.log("Test Failed")
    
}