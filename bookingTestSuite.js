// Test these 4 booking IDs from Restful Booker API:
// https://restful-booker.herokuapp.com/booking/1
// https://restful-booker.herokuapp.com/booking/2
// https://restful-booker.herokuapp.com/booking/3
// https://restful-booker.herokuapp.com/booking/9999  ← doesn't exist

// For each booking, your suite should:
// 1. Fetch the booking
// 2. Check status code
// 3. Validate firstname and lastname exist
// 4. Validate depositpaid is a boolean
// 5. Validate checkin date exists
// 6. Report PASS or FAIL with details
// 7. Handle errors gracefully
// 8. Print a final summary at the end

// function validateBooking(bookingData, bookingId) {
//     if (
//         bookingData.firstname != null &&
//         bookingData.lastname != null &&
//         typeof bookingData.depositpaid === "boolean" &&
//         bookingData.bookingdates.checkin !== null
//     ) {
//         console.log("PASS: ", bookingId + " ", bookingData.firstname + " ", bookingData.lastname);
//         return true;
//     } else {
//         console.log("FAIL: ", bookingId + " - " + "issues");
//         return false;
//     }
// }

let totalTests = 0;
let passed = 0;
let failed = 0;
let notFound = 0;

function validateBooking(bookingData) {
    let issues = [];

    if (!bookingData.firstname) {
        issues.push("Missing firstname");
    }
    if (!bookingData.lastname) {
        issues.push("Missing lastname");
    }
    if (typeof bookingData.depositpaid !== "boolean") {
        issues.push("depositpaid is not a boolean");
    }
    if (!bookingData.bookingdates.checkin) {
        issues.push("Missing checkin date");
    }

    return {
        isValid: issues.length === 0,
        issues: issues
    };
}

async function testBooking(bookingId) {
    try {
        let response = await fetch(`https://restful-booker.herokuapp.com/booking/${bookingId}`);
        if (response.status === 200) {
            totalTests++;
            let convertedResponse = await response.json();
            const validation = validateBooking(convertedResponse);
            if (validation.isValid) {
                passed++;
                console.log(`PASS: Booking ID ${bookingId} - ${convertedResponse.firstname} ${convertedResponse.lastname}`);
            } else {
                failed++;
                console.log(`FAIL: Booking ID ${bookingId}`);
            }

        } else if (response.status === 404) {
            totalTests++;
            notFound++;
            console.log(`NOT FOUND : ${bookingId}`);
        } else {
            console.log("NOT FOUND: ", bookingId);
        }
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log("Tested Booking Id: ", bookingId);
    }
}

async function runTestSuite() {
    for (let codes of [1, 2, 3, 9999]) {
        await testBooking(codes);
    }

    console.log("\n========== TEST SUMMARY ==========");
    console.log(`Total tests: ${totalTests}`);
    console.log(`Passed: ${passed}`);
    console.log(`Failed: ${failed}`);
    console.log(`Not Found: ${notFound}`);
    console.log("==================================");
}
export { runTestSuite };