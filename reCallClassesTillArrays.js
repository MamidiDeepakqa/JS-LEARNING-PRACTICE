//Variables...

let a = 10;

const b =19;

//dataTypes.......

let name = "Test";
let age = 30;
let isAvaiable = true;
let isActive = undefined;
let isCreated = null;

console.log(typeof isCreated);

//Operators.......

//Comparison Operators.......

//== , === 

let sum = 5;
let sum1 = "5";

console.log("using == ", sum == sum1);
console.log("using === ", sum === sum1);

//Logical operators.....
//&&, ||, !=

let ab = true;
let ba = false;

console.log("using &&", ab && ba);
console.log("using ||", ab || ba);
console.log("using !=", ab != ba);


//conditional Operators....

let resultPercentage = 76;
let marks = 501;

if(resultPercentage > 75 && marks > 500){
    console.log("Elgible for conselling");
}else{
    console.log("Not Eligible for counselling");
}

//loops........

for(let a = 0; a < 5; a++){

    console.log("from for loop ", a);
}


//while loop...

let attempts = 0;

while(attempts<3){
    console.log("from while loop : logged In ", attempts);
    attempts++;
}

//for of loop......


let codes = [200,201,400,401,500];

for(let code  of codes){
    // console.log("from for of loop ", code);

    if(code === 500){
        console.log("Entered If condition loop : ",code);
    }
}

//Arrays.......

let codevalues = [500,200,403,201,404,503];

//accessing values..

console.log("accessing array values : ", codevalues);

console.log(codevalues[4]);

// adding new value to array...

codevalues.push(100);

console.log(codevalues);

//.forEach -- do something with the values.
//.map -- Transform values to something new.
//.filter -- keep only the value which are matched with the condition.

//.foreach....
codevalues.forEach((code)=>{
    console.log("from forEach loop ", code);
})

//.map....

let resultOfCodes = codevalues.map((code)=>{
    return code === 200 ? "PASS" : "FAIL";
});
console.log(resultOfCodes);


//.filter...

let codevaluess = [780,234,200, 673,434,52,100]

let successCodes = codevalues.filter((code)=>{

    return code === 200 || code === 100;
})

console.log(successCodes);


//functions....

function checkLogin(username){
    console.log("from normal function class username is : ", username);
}

checkLogin("deepak mamidi");

//fat arrow.....

const chckLogin = (usename) => {
    console.log("from fat arrow function username is : ", usename);
}

chckLogin("QA Deepak M");


//fat arrow fuction for validating the codes..

const getMatchingFruit = (fruitName) =>{

    return fruitName.toLowerCase() === "orange" || fruitName.toLowerCase() === "banana";
}

let fruits = ["carrot","kiwi","Orange", "guava", "pineapple", "pumpkin"];

let matchedFruits = fruits.filter((fruitName) => {

       return getMatchingFruit(fruitName);
})

matchedFruits.forEach((code)=>{
        console.log("Matched fruit name are : ", code);
});

console.log("--------------------")


//Test Function behaviour.......

const testCode = (statusCode) => {

    return statusCode === 200 || statusCode === 201 ? "PASS" : "FAIL";
}

let sstatusCodes = [400,600,323, , 200,434,145,201,500];

let matchedCode = sstatusCodes.filter((code)=>{
    return testCode(code)
});


matchedCode.forEach((sstatusCodes)=>{
    console.log(testCode(sstatusCodes));
})

//Objects........


let userDetails = {
name : "Deepak",
age : 30,
dep : "QA",
iActive : true
}

//Get all the values of an object without knowing the key's
Object.keys(userDetails).forEach((key)=>{
    console.log(key + " : " + userDetails[key]);
})

// // Get the object values..
// console.log(userDetails.name);

// //Adding New property...
// userDetails.role = "Quality Analyst";
// console.log(userDetails);

// //updating the value..
// userDetails.name = "Akash";
// console.log(userDetails);


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

console.log("___________________")

//if/else — check status === 200 AND data.role === "admin" → print "Access granted" or "Access denied".

           console.log(loginResponse.status === 200 && loginResponse.data.role === "admin" ? "Access granted" : "Access denied");
