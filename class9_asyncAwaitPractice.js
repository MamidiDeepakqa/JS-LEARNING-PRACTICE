
async function getDetails() {

    const response = await fetch("https://restful-booker.herokuapp.com/booking/4");
    
    if (response.status === 200) {

        const convertedResponse = await response.json();

        console.log(convertedResponse);

        console.log("firstname : ", convertedResponse.firstname);
        console.log("lastname : ", convertedResponse.lastname);
        console.log("checkIn Date : ", convertedResponse.bookingdates.checkin);

        if (convertedResponse.depositpaid === true) {
            console.log("Deposit confirmed");
        } else {
            console.log("Deposit pending");
        }
    } else {
        console.log("API failed : " + response.status);
    }

}

getDetails();