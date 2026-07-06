//Variables......

// let, const

let a = 5;
const b = "5"

console.log("let variable value " +a);

a = 10;
console.log("Updated let variable value " +a);


//datatypes..........

let name = "Deepak";
let age = 30;
let isActive = true;
let isAvailable = undefined;
let isCancelled = null;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isActive);
console.log(typeof isAvailable);
console.log(typeof isCancelled);


//Operators......

//comparison operators...

// ==, ===

let sum = 5;
let sum1 = "5";

console.log(" from == operator : ", +sum == sum1);

console.log(" from === operator : ", +sum === sum1);


//Logical operators.....

// &&, ||, !=

let val = true;
let val1 = false;

console.log(" from && operator : ", + val && val1);

console.log(" from || operator : ", + val || val1);

console.log(" from != operator : ", + val != val1);


//conditional operators......

let score = 92;

if(score <= 100 && score >= 90){

    console.log(" In first class ", + score);

}else{

    console.log("In second class ", + score)
}




//loops...........

//for loop.....

for(let a = 0; a<5; a++){
    console.log("from for loop : ", +a);
}


//while loop.........

let attemptss = 0;

while(attemptss < 3){
    console.log("from while loop : ", +attemptss);
    attemptss++;
}


//for of loop......

let fruits = ["Orange", "Banana", "Grapes", "Jack Fruit"];

for(let fruit of fruits){
    console.log(`from for of loop ${fruit}`);
}


//Functions...............

// Normal Function.....

function checkLogin(username){

    console.log("Login Name : " +username);
}

checkLogin("Test User");

// advance Function with fat arrow.....

const chckLogin = (surname) => {

    console.log("from fat arrow function : ", surname);
}

chckLogin("Arjun Kumar");


const checkRank = (score) => {

    if(score <= 100 && score >= 90){
        return `from 90 to 100 marks : ${score}`
    }else if (score <=89 && score >= 80){
        return `from 80 to 89 marks : ${score}`
    }else{
        return `not eligible " ${score}`
    }
}


let marks = [40,89,91,81,95];

for(let mark of marks){

    console.log(checkRank(mark));
}