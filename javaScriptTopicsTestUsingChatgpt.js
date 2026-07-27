// const response = {
//     status: 200,
//     message: "Login Successful",
//     data: {
//         userId: 101,
//         username: "deepak",
//         role: "Admin",
//         token: "abc123xyz",
//         isActive: true
//     }
// };

// console.log("Status: ", response.status);
// console.log("Message: ", response.message);

// if (response.status === 200) {
//     console.log("Login API Passed");
// } else {
//     console.log("Login API Failed");
// }

// if (response.data.isActive === true) {
//     console.log("Token Generated Successfully");
// } else {
//     console.log("Token Missing");
// }

// const payments = [
//     {
//         id: 101,
//         amount: 500,
//         status: "SUCCESS"
//     },
//     {
//         id: 102,
//         amount: 700,
//         status: "FAILED"
//     },
//     {
//         id: 103,
//         amount: 300,
//         status: "SUCCESS"
//     }
// ];


// let matchRecord = payments.filter((code)=>{
//     return code.status === "SUCCESS";
// });

// // console.log("Only passed record ", matchRecord);

// matchRecord.forEach((code)=>{
//     console.log(code);
// });

// const statusCodes = [200, 201, 400, 401, 403, 404, 500];

// let successCodes = statusCodes.filter((code)=>{
//     return code === 200 || code === 201;
// });

// console.log(successCodes);


const payments = [
    { id: 1, status: "SUCCESS" },
    { id: 2, status: "FAILED" },
    { id: 3, status: "SUCCESS" },
    { id: 4, status: "FAILED" }
];

//Print only failed payment IDs
//Payment ID : 2
// Payment ID : 4

let failedPayments = payments.filter((payment) => {
    return payment.status === "FAILED";
});

failedPayments.forEach((codes) => {
    console.log(codes.id);
});

//Count Users.....
const users = [
    {name:"Deepak", active:true},
    {name:"Rahul", active:false},
    {name:"John", active:true},
    {name:"Sam", active:false}
];

// Active Users : 2
// Inactive Users : 2

let count = users.filter((user)=>{
   return user.active === true;
    return user.active === false;
});

console.log(count); //-------- this question need to discuss and execute...

//Task 4 - Find Invalid Tokens
const sessions = [
    {
        user: "Deepak",
        token: "abc123",
        isValid: true
    },
    {
        user: "Rahul",
        token: "xyz987",
        isValid: false
    },
    {
        user: "John",
        token: "hello123",
        isValid: true
    }
];
//Print only invalid users
let validSession = sessions.filter((session) => {
    return session.isValid === false;
});
validSession.forEach((code) => {
    console.log(code.user);
});


//Without writing property names directly, print.
//status : 200
// message : Login Successful
const response = {
    status: 200,
    message: "Login Successful",
    data: {
        userId: 101,
        username: "deepak",
        role: "admin"
    }
};

Object.keys(response).forEach((key) => {
    if (key === "status" || key === "message") {
        console.log(key + " : " + response[key]);
    }
});

//Find the payment having the highest amount.
const payments = [
    {id:101, amount:200},
    {id:102, amount:800},
    {id:103, amount:500},
    {id:104, amount:1000}
];

let highestAmount = payments[0];

for(let pay of payments){
    if(pay.amount > highestAmount.amount){
        console.log(pay);
    }
}