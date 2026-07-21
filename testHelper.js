// testHelper.js

// Function 1: checkStatus
// takes a status code as parameter
// returns "PASS" if status is 200 or 201
// returns "FAIL" for anything else

export function checkStatus(statusCode){

    if(statusCode === 200 || statusCode === 201){
        return "PASS";
    }else{
        return "FAIL";
    }
}

// Function 2: formatResult
// takes two parameters: name and result
// returns "name : result"
// example: formatResult("login_test", "PASS") → "login_test : PASS"

// remember to EXPORT both functions

export function formatResult(name, result){
    return `${name} : ${result}`;
}