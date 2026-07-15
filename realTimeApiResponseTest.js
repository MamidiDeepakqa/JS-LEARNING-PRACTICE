let apiResponse = {
  status: 200,
  message: "User authenticated successfully",
  data: {
    user: {
      id: 101,
      username: "deepak_qa",
      email: "deepak@example.com",
      role: "admin",
      isActive: true
    },
    orders: [
      { orderId: "ORD001", item: "Laptop", amount: 75000, orderStatus: "delivered" },
      { orderId: "ORD002", item: "Mouse", amount: 999, orderStatus: "pending" },
      { orderId: "ORD003", item: "Keyboard", amount: 1500, orderStatus: "cancelled" },
      { orderId: "ORD004", item: "Monitor", amount: 12000, orderStatus: "delivered" }
    ],
    session: {
      token: "xyz789abc123",
      expiresIn: 3600,
      isValid: true
    }
  }
}


// Check 1: Verify the API call succeeded — print "API Test PASSED" if status === 200, otherwise "API Test FAILED".
console.log(apiResponse.status === 200 ? "API Test PASSED" : "API Test FAILED");


// Check 2: Verify the logged-in user is active and has admin role — print "User Verification PASSED" or "User Verification FAILED".
console.log(apiResponse.data.user.isActive === true && apiResponse.data.user.role === "admin" ? "User Verification PASSED" : "User Verification FAILED");


//Check 3: Verify the session token exists and is valid — print "Session Test PASSED" or "Session Test FAILED".
console.log(apiResponse.data.session.token === null || apiResponse.data.session.expiresIn > 0 ? "Session Test PASSED" : "Session Test FAILED");


console.log("________________")

// Check 4: Use .filter() to get only "delivered" orders, then use .forEach() to print each like: Delivered: ORD001 - Laptop - 75000

let deliveredOrders = apiResponse.data.orders.filter((orders)=>{

   return orders.orderStatus === "delivered";
});

deliveredOrders.forEach((filteredOrders)=>{
    console.log("Delivered : " + filteredOrders.orderId + " - " + filteredOrders.item + " - " +filteredOrders.amount);

});

//Check 5: Use .map() to transform all orders into just their orderStatus values and print the resulting array:
// ex : ["delivered", "pending", "cancelled", "delivered"]

let orderStatuses = apiResponse.data.orders.map((order)=>{
  return order.orderStatus;
});

console.log(orderStatuses);