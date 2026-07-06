//method 1 classic function....
function checkLogin(statusCodes){

    console.log("received status code : " + statusCodes)

}

checkLogin(56789)


//method 2 with fat arrow....
const checkLGN = (statusValue) => {

    console.log("Received statusvalue is : " + statusValue)
}

checkLGN(334)


const codes = (statusCode2) => {

    if(statusCode2 === 200 || statusCode2 === 201){

        return "Pass " + statusCode2;
    }else{
        return "Fail " + statusCode2;
    }
}

let statusCodes1 = [200, 404, 500, 201, 403];

for(let code of statusCodes1){
    console.log(codes(code));
}




const checkUsername = (username) =>{
    if(username === "admin"){
        return "Valid";
    }else{
        return "Invalid";
    }
}

let roles = ["admin", "guest", "Admin"];

for(let role of roles){

    console.log(checkUsername(role));
}

