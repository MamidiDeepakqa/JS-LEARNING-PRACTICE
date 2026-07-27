
function validateUserDetails(userData){

    let users= [];

    if(!userData.id){
        users.push("Missing id");
    }


}



async function checkDetails(userId) {
    try {
        let userDetails = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

        if(userDetails.status === 200){


        }




    }
}