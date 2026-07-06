//for loop classic

for(let i=0; i<5; i++){
    console.log(i)
}


//while loop -- which we use in actual testing 

let attempts = 0;

while(attempts <3){
    console.log("Trying to login : "+attempts)
    attempts++;
}

//for...0f loop
let statusCodes = [200, 404, 500, 201, 403];

for(let code of statusCodes){
    if(code === 200 || code === 201){
        console.log("PASS : " + code)
    }else{
        console.log("FAIL : " +code)
    }
}

let value = "test"
let value1 = 39

console.log("value ")