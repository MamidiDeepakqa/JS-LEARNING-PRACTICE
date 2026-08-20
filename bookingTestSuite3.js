let hotelSystem = {
    hotelName: "Grand Palace",
    location: "Hyderabad",
    apiStatus: 200,
    data: {
        manager: {
            managerId: "M001",
            name: "Rajesh Kumar",
            department: "Operations",
            isOnDuty: true
        },
        rooms: [
            { roomId: "R001", type: "deluxe", price: 5000, isAvailable: true, floor: 3 },
            { roomId: "R002", type: "suite", price: 15000, isAvailable: false, floor: 5 },
            { roomId: "R003", type: "standard", price: 2500, isAvailable: true, floor: 1 },
            { roomId: "R004", type: "deluxe", price: 6000, isAvailable: true, floor: 4 },
            { roomId: "R005", type: "suite", price: 18000, isAvailable: false, floor: 5 }
        ],
        hotel: {
            totalRooms: 50,
            occupancyRate: 75,
            isOpen: true,
            membership: {
                plan: "Premium",
                isActive: true,
                expiryYear: 2028
            }
        }
    }
};

//Task 1: Print hotelName, location and apiStatus directly.
console.log(hotelSystem.hotelName);
console.log(hotelSystem.location);
console.log(hotelSystem.apiStatus);

//Task 2: Print name, department and isOnDuty from manager.
console.log(hotelSystem.data.manager.name);
console.log(hotelSystem.data.manager.department);
console.log(hotelSystem.data.manager.isOnDuty);

//Task 3: Print plan, isActive and expiryYear from deeply nested membership object.
console.log(hotelSystem.data.hotel.membership.plan);
console.log(hotelSystem.data.hotel.membership.isActive);
console.log(hotelSystem.data.hotel.membership.expiryYear);

//Task 4: Write an if/else checking all four simultaneously:
// apiStatus === 200
// manager.isOnDuty === true
// hotel.isOpen === true
// hotel.membership.isActive === true

// Print "Hotel system fully operational" if all true, otherwise "System issue detected".
if (hotelSystem.apiStatus === 200 && hotelSystem.data.manager.isOnDuty === true
    && hotelSystem.data.hotel.isOpen === true && hotelSystem.data.hotel.membership.isActive === true) {
    console.log("Hotel system fully operational");
} else {
    console.log("System issue detected");
}

//Task 5: Use .filter() to get only available rooms (isAvailable === true), then .forEach() to print:
//Available: R001 - deluxe - 5000
let availableRooms = hotelSystem.data.rooms.filter((rooms) => {
    return rooms.isAvailable === true;
});
availableRooms.forEach((rms) => {
    console.log(`Available:  ${rms.roomId} -  ${rms.type} - ${rms.price}`);
});

//Task 6: Use .filter() to get only unavailable rooms, then .map() to extract just roomId values and print:
//["R002", "R005"]
let unAvailableRooms = hotelSystem.data.rooms.filter((rooms) => {
    return rooms.isAvailable === false;
});
let unAvailableRoomsArray = unAvailableRooms.map((code) => {
    return code.roomId;
});
console.log(unAvailableRoomsArray);

//Task 7: Use .map() on full rooms array to transform every room into a string like:
//"R001 : deluxe : floor 3 : 5000"
let roomsArray = hotelSystem.data.rooms.map((code) => {
    return `${code.roomId} : ${code.type} : floor ${code.floor} : ${code.price}`;
});
console.log(roomsArray);

//Task 8: Write a function called getRoomCategory that takes a room object and returns:
//"Budget Stay" if type is "standard"
// "Comfortable Stay" if type is "deluxe" AND price is <= 5500
// "Premium Stay" if type is "deluxe" AND price is > 5500
// "Luxury Stay" if type is "suite"
// "Unknown" for anything else

// Then call it for every room using .forEach() and print:
// R001 : Comfortable Stay
// R002 : Luxury Stay

function getRoomCategory(room) {
    if (room.type === "standard") {
        return "Budget Stay";
    } else if (room.type === "deluxe" && room.price <= 5500) {
        return "Comfortable Stay";
    } else if (room.type === "deluxe" && room.price > 5500) {
        return "Premium Stay";
    } else if (room.type === "suite") {
        return "Luxury Stay";
    } else {
        return "Unknown";
    }
}
hotelSystem.data.rooms.forEach((typee) => {
    console.log(`${typee.roomId} : `, getRoomCategory(typee));
});

//Task 9: Use Object.keys() and .forEach() to print every key and value from the hotel object (top level only):
//totalRooms : 50
// occupancyRate : 75
// isOpen : true
// membership : [object Object]

Object.keys(hotelSystem.data.hotel).forEach((code) => {
    console.log(code + ":" + hotelSystem.data.hotel[code]);
});

//Task 10: Write an async function called getManagerData that:
//Fetches https://jsonplaceholder.typicode.com/users/5
// Uses try/catch/finally
// Checks response.status === 200
// Parses JSON response
// Prints name, email and phone from response
// Uses JSON.stringify(data, null, 2) to print full response prettily
// catch prints "ERROR: " + error.message
// finally prints "Manager API test complete"

async function getManagerData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users/5");
        if (response.status === 200) {
            let convertedresponse = await response.json();
            console.log(convertedresponse.name);
            console.log(convertedresponse.email);
            console.log(convertedresponse.phone);
            let modified = JSON.stringify(convertedresponse, null, 2);
            console.log(modified);
        }
    } catch (error) {
        console.log("ERROR: " + error.message);
    } finally {
        console.log("Manager API test complete");
    }
}
getManagerData();