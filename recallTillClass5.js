//variables................

//let and const 2 variables in Js
//Always use const by default, if any variable value changes in testing then use let variable.

console.log("_____Printing variable values______")

let a = 10;

const b = 5;

console.log(a)
console.log(b)

// updating variables..

a = 20;

// b = 30;

console.log(a)
// console.log(b) //this will fail because b is constant and updating this variable is not allowed.

console.log("________Variables printing is completed_________")


//datatypes...........

console.log("_____Printing datatype values______")

let name = "test User"           //string
let age = 25                    //number
let isActive = true             //boolean
let isEnabled = undefined       //declared the variable but not assigned the value
let isPerson = null             //left empty this variable

console.log(name)
console.log(age)
console.log(isActive)
console.log(isEnabled)
console.log(isPerson)

console.log("____________________")

console.log(typeof name)
console.log(typeof age)
console.log(typeof isActive)
console.log(typeof isEnabled)
console.log(typeof isPerson)  //It return object always it's an issue in JS

console.log(typeof null)     //It return object always

console.log("_____Printing datatype values is done______")

//operators&Conditions............

console.log("_____Printing operators&Conditions______")

//comparison operators..........

// == and ===
// == always converts one value with another value this will work for qa testing.
// === this should be used in automation

let sum = "5"
let sum1 = 5