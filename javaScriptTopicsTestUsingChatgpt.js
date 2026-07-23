const response = {
    status: 200,
    message: "Login Successful",
    data: {
        userId: 101,
        username: "deepak",
        role: "Admin",
        token: "abc123xyz",
        isActive: true
    }
};

console.log("Status: ", response.status);
console.log("Message: ", response.message);

if(response.status === 200){
    console.log("Login API Passed");
}else{
    console.log("Login API Failed");
}

if(response.data.isActive === true){
    console.log("Token Generated Successfully");
}else{
    console.log("Token Missing");
}

const payments = [
    {
        id: 101,
        amount: 500,
        status: "SUCCESS"
    },
    {
        id: 102,
        amount: 700,
        status: "FAILED"
    },
    {
        id: 103,
        amount: 300,
        status: "SUCCESS"
    }
];


let matchRecord = payments.filter((code)=>{
    code.status === "SUCCESS";
});

matchRecord.forEach((code)=>{
    console.log(code);
})