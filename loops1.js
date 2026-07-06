//for loop classic
for(let i=1; i<=5; i++){
    console.log("values are : " + i)
}

console.log("________________________")

//while loop [which is mostly used in automation which will run till items in the array completes or loop completes]
let attempts = 0
while(attempts<5){
    console.log("Logins tried " + attempts);
    attempts++;
}

console.log("__________________________")

//for...of loop [which is mostly used in automation for list page values ex : response status, time, and other values in array]
let fruits = ["apple", "banana", "chiku", "orange"]
for(let fruit of fruits){
    if(fruit === "chiku"){
        console.log("Passed because it's : " + fruit)
    }else{
        console.log(fruit)
    }
}