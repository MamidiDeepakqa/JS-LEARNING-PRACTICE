console.log("Variables........");
let a = 5; //Can be updated any time.
console.log(a);

const b = 10; //Cannot be changed -- defined only once.
console.log(b);
console.log("___________");

console.log("DataTypes.......");
let String = "Deepak";
let age = 30;
let isActivte = true;
let isAvailable = undefined;
let isProduct = null;
console.log("___________");

console.log("Loops.........");
console.log("for loop...");
for(let a = 0; a<=5; a++){
console.log(a);
}
console.log("___________");

console.log("While loop...")
let attempt = 0;
while(attempt<3){
    console.log("Logged In");
    attempt++;
}
console.log("___________");

console.log("for each loop...");
let fruits = ["apple","orange","jack fruit"];

for(let fruit of fruits){
    console.log(fruit);
}

console.log("_________________");

console.log("operators&conditions.........");
console.log("Comparison operator...");
// ==, ===
let sum = 5;
let sum1 = "5";
console.log(sum == sum1); // converts one type to another one to match the value and it will give true always.
console.log(sum === sum1); //this will give actual output and we use in automation testing.

console.log("_______________");

console.log("Logical operators....");
// &&, ||, !==
let ab = true;
let cd = true;

console.log(ab && cd);
console.log(ab || cd);
console.log(ab !== cd);

console.log("_______________");

console.log("conditional operators....");
let Area = 5;
if(Area === 10){
    console.log("matching area");
}else{
    console.log("not matching area")
}

console.log("_______________");

console.log("Functions....");
function checkLogin(username){
    console.log("normal function : ", username);
}

checkLogin("Deepak");


const chklogin = (usename) =>{
    console.log("from fat arrow function : ", usename);
};

chklogin("karan arjun");

console.log("_______________");

console.log("Arrays....");

let statusCodes = [200,201,400,403,500];

//fetch values..
console.log(statusCodes[2]);

//add value...
statusCodes.push(501);
console.log(statusCodes);

//forEach... do something with the values.
//map().... Transform values to something new
//filter()... Keep only condition matched values...

statusCodes.forEach((code)=>{
    console.log(code);
});

let codeStatuses = statusCodes.map((code)=>{
        return code === 200 ? "PASS" : "FAIL";
});

console.log(codeStatuses);

let filteredCodes = statusCodes.filter((codes)=>{
    return codes !== 400;
});

console.log(filteredCodes);

console.log("_______________");

console.log("Objects....");
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

Object.keys(loginResponse).forEach((key)=>{
    console.log(key  + " : " + loginResponse[key])
});

console.log("_______________");

console.log("async/await....");