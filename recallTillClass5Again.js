//Variables...........

let a = "test";

const b = 5;

console.log(a)
console.log(b)

//DataTypes..........

let name = "String"; 
let num = 5;
let isActive = true;
let ifEligible = undefined; //defined but not assigned any value.
let isAvailable = null;  //defined and kept as null

console.log(typeof name);
console.log(typeof ifEligible);
console.log(typeof isAvailable);

//Comparison operators.........

// == which will convert one value to another to pass the comparision
// === which will give the exact value after comparision

let sum = "5"
let sum1 = 5

console.log(sum == sum1);

console.log(sum === sum1);


//Logical operators.......

// &&, ||, !=

console.log(true && true);
console.log(true || false);
console.log(true != true);

//conditional operators.........

let age = 25;

let cls = "V";

if(age === 25 && cls === "V"){
    console.log("from conditional :"+age+ " and " +cls+ " are correct")
}else{
    console.log("from conditional :"+age+ " and " +cls+ " are incorrect")
}


//loops.....
//for loop......

for(let i=0; i<=5; i++){
    console.log(i)
}


//while loop....

let attempts = 0;

while(attempts < 3){
    console.log("Can login")
    attempts++;
}


//for of each loop

let ranks = [1,2,3,4,5]

for(let rank of ranks){

    // console.log("School ranks are : " +rank)

    if(rank === 4 || rank === 5){                 
        return "rank " +rank+ " is available";
    }else{
        return rank + " is not available";
    }
}


//functions.....

function checkLogin(username){  
        console.log(username)
}

checkLogin("kishan")


const chklogin = (user1) => {

    console.log(user1)
}

chklogin("Umesh")