const appName = "TestMaster"
console.log(appName);
console.log(typeof appName);

let testCount = 0
console.log(testCount);
console.log(typeof testCount);

let isRunning = false;
console.log(isRunning);
console.log(typeof isRunning);

const maxRetries = 3;
console.log(maxRetries);
console.log(typeof maxRetries);


//Task : 2 If else condition
let responseStatus = 201;
let responseTime = 850;
let isAuthenticated = true;
if ((responseStatus === 200 || responseStatus === 201) &&
    responseTime < 1000 && isAuthenticated === true) {
    console.log("All checks passed — API healthy");
} else {
    console.log("API health check failed")
}

//Task : 3 for of loop
let apiEndpoints = [
    { endpoint: "/login", responseTime: 450 },
    { endpoint: "/checkout", responseTime: 1200 },
    { endpoint: "/payment", responseTime: 800 },
    { endpoint: "/logout", responseTime: 1500 },
    { endpoint: "/dashboard", responseTime: 350 }
];

for (let item of apiEndpoints) {
    if (item.responseTime < 1000) {
        console.log("FaST: " + item.endpoint + " - " + item.responseTime + "ms");
    } else {
        console.log("SLOW: " + item.endpoint + " - " + item.responseTime + "ms");
    }
}
console.log("________________________")
//Task : 4 Functions..
const getResponseLabel = (endpoint, responseTime) => {
    if (responseTime < 1000) {
        return "FAST: " + endpoint + " - " + responseTime + "ms";
    } else {
        return "SLOW: " + endpoint + " - " + responseTime + "ms";
    }
}

console.log(getResponseLabel("/login", 450));
console.log(getResponseLabel("/checkout", 1200));
console.log(getResponseLabel("/payment", 800));

console.log("_________________")

//Topic 5: Arrays (.filter, .map, .forEach)
let testResults = [
    { name: "login_test", status: 200, duration: 450 },
    { name: "checkout_test", status: 404, duration: 1200 },
    { name: "payment_test", status: 201, duration: 800 },
    { name: "logout_test", status: 500, duration: 1500 },
    { name: "dashboard_test", status: 200, duration: 350 }
];

//1. Use .filter() to get only passed tests (status === 200 or 201), then .forEach() to print:
let passedStatus = testResults.filter((results) => {
    return results.status === 200 || results.status === 201;
});

passedStatus.forEach((records) => {
    console.log("PASS: " + records.name + " - " + records.duration + "ms");
});

console.log("______________")
//2. Use .filter() to get only failed tests, then .map() to extract just the name values and print the array:
let failedStatus = testResults.filter((results) => {
    return results.status !== 200 && results.status !== 201;
});
console.log("failedStatus values: ", failedStatus);
let onlyFailedStatus = failedStatus.map((fail) => {
    return fail.name;
});
console.log(onlyFailedStatus);

console.log("____________")
// 3. Use .map() on the full array to transform every test into a string like "login_test : PASS" or "login_test : FAIL" — use your getResponseLabel logic for PASS/FAIL based on status — and print the resulting array.
let finalResult = testResults.map((test) => {
    return `${test.name}: ${test.status === 200 || test.status === 201 ? "PASS" : "FAIL"}`;
});

console.log(finalResult);

let orderResults = [
    { name: "order_placed", status: 201, duration: 320 },
    { name: "payment_gateway", status: 200, duration: 1500 },
    { name: "inventory_check", status: 404, duration: 450 },
    { name: "shipping_label", status: 500, duration: 890 },
    { name: "order_confirmed", status: 200, duration: 280 }
];

console.log("Task 1:")
//Task 1: Use .filter() to get only passed orders (status === 200 or 201), then .forEach() to print:
//PASS: order_placed - 320ms

let passOrders = orderResults.filter((order) => {
    return order.status === 200 || order.status === 201;
});
passOrders.forEach((result) => {
    console.log("only passed orders: ", result);
});

console.log("Task 2:")
//Task 2: Use .filter() to get only failed orders, then .map() to extract just name values and print the array:
//["inventory_check", "shipping_label"]

let failedResults = orderResults.filter((orders) => {
    return orders.status !== 200 && orders.status !== 201;
});
let finalOutput = failedResults.map((results) => {
    return results.name;
});
console.log(finalOutput);


console.log("Task 3:")
//Task 3: Use .map() on the full array to transform every order into a string like:
//"order_placed : PASS"
// "payment_gateway : PASS"
// "inventory_check : FAIL"

let results = orderResults.map((result) => {
    return `${result.name} : ${result.status === 201 || result.status === 200 ? "PASS" : "FAIL"}`;
});
console.log(results);



//Objects...
let flightBooking = {
    bookingRef: "FL2024",
    apiStatus: 200,
    data: {
        passenger: {
            passengerId: "P001",
            name: "Deepak Kumar",
            seatClass: "Business",
            isCheckedIn: false
        },
        flight: {
            flightNo: "AI-202",
            from: "Hyderabad",
            to: "Mumbai",
            departure: "10:30",
            status: "on-time"
        },
        payment: {
            totalFare: 15000,
            isPaid: true,
            method: "UPI"
        }
    }
};

console.log("Task 1: Print bookingRef and apiStatus directly.")
console.log(flightBooking.bookingRef);
console.log(flightBooking.apiStatus);

console.log("Task 2: Print name and seatClass from passenger.")
console.log(flightBooking.data.passenger.name)
console.log(flightBooking.data.passenger.seatClass)

console.log("Task 3: Print flightNo, from, to and status from flight.")
console.log(flightBooking.data.flight.flightNo);
console.log(flightBooking.data.flight.from);
console.log(flightBooking.data.flight.to);
console.log(flightBooking.data.flight.status);

console.log("Task 4: Write an if/else checking all three simultaneously:")
// /apiStatus === 200
// payment.isPaid === true
// passenger.isCheckedIn === false
// Print "Booking verified - check-in pending" if all true, otherwise "Booking issue detected".

if (flightBooking.apiStatus === 200 &&
    flightBooking.data.payment.isPaid === true &&
    flightBooking.data.passenger.isCheckedIn === false) {
    console.log("Booking verified - check-in pending");
} else {
    console.log("Booking issue detected");
}


console.log("Task 5: Use Object.keys() and .forEach() to print every key and value from the payment object like:")

Object.keys(flightBooking.data.payment).forEach((key) => {
    console.log(key + " - " + flightBooking.data.payment[key]);
});

console.log("______________________________________________________________")
console.log("Topics 7-10 in one combined task:");

async function testPostAPI() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

        if (response.status === 200) {
            let JSONResponse = await response.json();
            console.log("Title: ", JSONResponse.title);
            console.log("Body: ", JSONResponse.body);

            let responseInString = JSON.stringify(JSONResponse, null, 2);
            console.log(responseInString);
        }
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log("API test complete");
    }
}
testPostAPI();