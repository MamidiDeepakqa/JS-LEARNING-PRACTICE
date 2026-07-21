import {checkStatus,formatResult} from './testHelper.js';

let tests = [
    { name: "login_test", status: 200 },
    { name: "checkout_test", status: 404 },
    { name: "payment_test", status: 201 },
    { name: "logout_test", status: 500 }
];

//Loop through with .forEach() and print each result using both imported functions

tests.forEach((test)=>{
    console.log(formatResult(test.name, checkStatus(test.status)));
});