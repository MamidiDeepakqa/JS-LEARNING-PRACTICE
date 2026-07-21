console.log("Part 1: Given this JSON string from an API response, parse it and print:")
// bookingId
// firstname and lastname
// checkin date from inside bookingdates
// Whether depositpaid is true — print "Deposit confirmed" or "Deposit pending"

let apiResponseString = '{"bookingId":101,"firstname":"Deepak","lastname":"Kumar","totalprice":75000,"depositpaid":true,"bookingdates":{"checkin":"2024-01-15","checkout":"2024-01-20"},"additionalneeds":"Breakfast"}';


const jsonResponse = JSON.parse(apiResponseString);
console.log("Response converted to JSON Object: ",jsonResponse);
console.log("Booking Id: ",jsonResponse.bookingId);
console.log("FirstName: ",jsonResponse.firstname);
console.log("LastName: ",jsonResponse.lastname);
console.log("checkin date: ", jsonResponse.bookingdates.checkin);
if(jsonResponse.depositpaid === true){
    console.log("Deposit confirmed");
}else{
    console.log("Deposit pending");
}

let backtoJsonString = JSON.stringify(jsonResponse);
console.log("Response converted back to json String ", backtoJsonString);


console.log("Part 2: Given this array of test results, convert it to a JSON string and print it in a pretty format (with 2 spaces indentation):");
let testResults = [
    { testName: "login_test", status: 200, passed: true },
    { testName: "checkout_test", status: 404, passed: false },
    { testName: "payment_test", status: 201, passed: true }
];
console.log(JSON.stringify(testResults,null,2));


console.log("Part 3: Write a safeParseJSON function using try/catch that handles both valid and invalid JSON — test it with:");
function safeParseJSON(jsonString){
    try{
        let convertedJSON = JSON.parse(jsonString);
        console.log("Valid Json: ", convertedJSON);
    }catch(error){
        console.log("Invalid Json: ", error.message);
    }
}

safeParseJSON('{"name":"Deepak","role":"QA"}');  // valid
safeParseJSON("Not Found");                        // invalid
safeParseJSON('{"name":"Deepak"');                 // malformed