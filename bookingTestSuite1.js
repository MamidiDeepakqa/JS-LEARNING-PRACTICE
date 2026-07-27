// Build from scratch: Flight Booking Test Suite ✈️
// Test this real API:
//https://jsonplaceholder.typicode.com/users

let totalTests = 0;
let passed = 0;
let failed = 0;
let notFound = 0;

function validateUser(data) {

    let issues = [];

    if (!data.name) {
        issues.push("Missing Name");
    }
    if (!data?.email) {
        issues.push("Missing email");
    }
    if (!data?.phone) {
        issues.push("Missing phone");
    }
    if (!data.username) {
        issues.push("Missing username");
    }
    return {
        isValid: issues.length === 0,
        errors: issues
    };
}

async function testUser(userId) {
    try {
        let userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (userResponse.status === 200) {
            totalTests++;
            let convertedresponse = await userResponse.json();
            let validation = validateUser(convertedresponse);
            if (validation.isValid) {
                passed++;
                console.log(`PASS: ${convertedresponse.name} - ${convertedresponse.email}`);
            } else {
                failed++;
                console.log("FAIL");
            }
        } else if (userResponse.status !== 200) {
            totalTests++;
            notFound++;
            console.log(`NOT FOUND: ${convertedresponse.name} - ${convertedresponse.email}`);
        }
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log("User API Testing is done");
    }
}

async function runSuite() {
    for (let codes of [1, 2, 9999]) {
        await testUser(codes);
    }
    console.log("===========Test Summary od bookingTestSuite1================")
    console.log(`totalTests: ${totalTests}`);
    console.log(`passed: ${passed}`);
    console.log(`failed: ${failed}`);
    console.log(`notFound: ${notFound}`);
    console.log("============End============")
}

export {runSuite};

// runSuite();