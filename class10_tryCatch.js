
// async function getDetails() {

//     try{
//     const response = await fetch("https://restful-booker.herokuapp.com/booking/4");

//     if (response.status === 200) {

//         const convertedResponse = response.json();

//         console.log(convertedResponse);

//         console.log("firstname : ", convertedResponse.firstname);
//         console.log("lastname : ", convertedResponse.lastname);
//         console.log("checkIn Date : ", convertedResponse.bookingdates.checkin);

//         if (convertedResponse.depositpaid === true) {
//             console.log("Deposit confirmed");
//         } else {
//             console.log("Deposit pending");
//         }
//     } else {
//         console.log("API failed : " + response.status);
//     }
// }catch(error){
//     console.log("message from catch block..")
// }finally{
//     console.log("Printing from finally block..")
// }

// }

// getDetails();


// async function testBookingAPI(bookingId) {
//     try {
//         console.log("Testing booking ID:", bookingId);

//         const response = await fetch(`https://restful-booker.herokuapp.com/booking/${bookingId}`);

//         // check status first
//         if (response.status === 200) {
//             const data = await response.json();
//             console.log("PASS: Booking found -", data.firstname, data.lastname);
//         } else {
//             console.log("FAIL: Booking not found - status:", response.status);
//         }

//     } catch (error) {
//         console.log("ERROR: Test crashed -", error.message);

//     } finally {
//         console.log("Test complete for booking ID:", bookingId);
//     }
// }

// // test multiple booking IDs
// testBookingAPI(1);
// testBookingAPI(2);
// testBookingAPI(9999);  // this one will fail gracefully




// Task - 1.........

async function testMultipleBookings() {

    let bookingIds = [1, 3, 9999, 5];

    for (let bookId of bookingIds) {
        try {
            const response = await fetch(`https://restful-booker.herokuapp.com/booking/${bookId}`);

            if (response.status === 200) {
                const bookingResponse = await response.json();
                console.log("PASS:", bookingResponse.firstname, bookingResponse.lastname);
            } else {
                console.log("Failed to find booking id: ", bookId);
            }
        } catch (error) {
            console.log("ERROR: " + error.message);
        } finally {
            console.log("Tested booking ID: " + bookId);
        }
    }
}

testMultipleBookings();