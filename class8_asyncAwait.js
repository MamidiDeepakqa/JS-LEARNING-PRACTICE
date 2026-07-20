// console.log("Step 1: Start test");

// setTimeout(() => {
//     console.log("Step 2: Page loaded");
// }, 2000);  // pretend this takes 2 seconds

// console.log("Step 3: Check result");

// //Promise has 3 states.....

// Pending --- Still waiting for the result...
// Fulfilled --- Completed Successfully, here's is the result...
// Rejected --- Something went wrong, here is the error...

// console.log("gfgh5678909---------------------------------");

// // async tells JavaScript: "this function contains slow operations"
// async function loadPage() {

//     console.log("Step 1: Starting test");

//     // await tells JavaScript: "WAIT HERE until this finishes before moving on"
//     await new Promise(resolve => setTimeout(resolve, 2000));

//     console.log("Step 2: Page loaded from function");

//     console.log("Step 3: Checking result");
// }

// loadPage();

// async function testBankingAPI() {

//     console.log("Step 1: Fetching user data from API...");

//     let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//     let data = await response.json();

//     console.log("Step 2: Data received - checking details");
//     console.log("User ID:", data.id);
//     console.log("Name:", data.name);
//     console.log("Email:", data.email);

//     console.log("Step 3: Validating response");
//     if (data.id === 1 && data.name) {
//         console.log("API Test PASSED");
//     } else {
//         console.log("API Test FAILED");
//     }
// }

// testBankingAPI();