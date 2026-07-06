//variables......

// let, const

let a = 5;
const b = "deepak";

console.log(a)
console.log(b)

//dataTypes.....

let name = "test" //String
let age = 50;    // number
let isAvailable = true //boolean
let istrue = undefined; // defined variable but forgot to send / assign value
let isActive = null;

console.log(typeof isAvailable)
console.log(typeof istrue)
console.log(typeof isActive)
console.log(typeof age)
console.log(typeof name)


//operators............

//Comparision operators....

// ==, ===

let sum = "5";
let sum1 = 5;

console.log(sum == sum1)
console.log(sum === sum1)


//Logical operators......

// &&, ||, !=

let rank = 10;
let value = 5;

console.log(rank === 1 && value === 5)

console.log(rank === 1 || value === 5)

console.log(rank != value)


// Conditional operators.......
let carsCount = 5;
let sol = 5;

if(carsCount > 5){
    console.log("Branded cars");
}else{
    console.log("normal cars")
}

if(carsCount === 5 && sol === 5){
    console.log("from 1st console")
}else if(carsCount > 5 && sol < 5){
    console.log("from 2nd console")
}else{
    console.log("from 3rd console")
}

//loops........

// for loop..

for(let a = 0; a<=5; a++){
    console.log(a);
}

//while loop.....

let attempts = 1;

while(attempts<3){
    console.log(attempts)
    attempts++;
}

// for of loop...

let numbers = [1,2,3,4,5]

for(let num of numbers){

    console.log("array numbers : "+num)

    if(num === 3 || num === 4){
        console.log("matched the num")
    }else{
        console.log("Did not matched any num")
    }
}



//functions.........

function checkLogin(username){
    console.log("Username is : " +username)
}

checkLogin("DeepakM");

const chcklogin = (username1) => {

    console.log(username1)
}

chcklogin("Umesh")


const checkNumbers = (number) => {
     
    if(number < 10){
        console.log("Printing from console 1")
    }else{
        console.log("Printing from console 2")
    }
}

let numbs = [20,30,5,2,4,7]

for(let numb of numbs){

    console.log(checkNumbers(numb))
}