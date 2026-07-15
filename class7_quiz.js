//You're a QA engineer testing an e-commerce application. You have this data:
let ecommerceData = {
    appName: "ShopEasy",
    version: "2.1.0",
    apiStatus: 200,
    data: {
        loggedInUser: {
            userId: 501,
            username: "deepak_qa",
            role: "admin",
            isActive: true
        },
        products: [
            { productId: "P001", name: "Laptop", price: 75000, category: "electronics", inStock: true },
            { productId: "P002", name: "Shoes", price: 2999, category: "fashion", inStock: false },
            { productId: "P003", name: "Phone", price: 25000, category: "electronics", inStock: true },
            { productId: "P004", name: "shirt", price: 999, category: "fashion", inStock: true },
            { productId: "P005", name: "Headphones", price: 5000, category: "electronics", inStock: false }
        ],
        cart: {
            totalItems: 3,
            totalAmount: 102999,
            isPaid: false
        }
    }
};

//Task 1: Print appName, version and apiStatus directly from ecommerceData.
console.log("from classk 1......");
console.log("appName : ", ecommerceData.appName);
console.log("version :", ecommerceData.version);
console.log("apiStatus :", ecommerceData.apiStatus);


//Task 2: Print username and role from the nested loggedInUser object.
console.log("from class 2........");
console.log("username :", ecommerceData.data.loggedInUser.username);
console.log("role :", ecommerceData.data.loggedInUser.role);


//Task 3: Write an if/else that checks:
// apiStatus === 200 AND
// loggedInUser.isActive === true AND
// loggedInUser.role === "admin"
console.log("from class 3........");
if (ecommerceData.apiStatus === 200 && 
    ecommerceData.data.loggedInUser.isActive === true &&
    ecommerceData.data.loggedInUser.role === "admin"
) {
    console.log("apiStatus is 200");
}else{
    console.log("Access denied");
}

//Task 4: Use .filter() to get only products that are in stock (inStock === true), then use .forEach() to print each like:
// In Stock: P001 - Laptop - 75000
console.log("from class 4........");
let itemsInStock = ecommerceData.data.products.filter((inStock) => {
    return inStock.inStock === true;
});

console.log("In Stock Items ", itemsInStock);
itemsInStock.forEach((availableInStockItems) => {
    console.log("In Stock:", availableInStockItems.productId + " - " + availableInStockItems.name + " - " + availableInStockItems.price);
});

//Task 5: Use .map() to transform all products into just their name values and print the resulting array:
//["Laptop", "Shoes", "Phone", "shirt", "Headphones"]
console.log("from class 5........");
let productWithNames = ecommerceData.data.products.map((products) => {
    return products.name;
});

console.log(productWithNames);

//Task 6: Write a function called getProductCategory that takes a product object and returns:
// "Premium Electronics" if category is "electronics" AND price is greater than 10000
// "Budget Electronics" if category is "electronics" AND price is 10000 or less
// "Fashion Item" if category is "fashion"
// "Unknown" for anything else

// Then call it for every product using .forEach() and print:
// Laptop : Premium Electronics
// Shoes : Fashion Item
// Phone : Premium Electronics
// shirt : Fashion Item
// Headphones : Budget Electronics


const getProductCategory = (product) => {
    if (product.category === "electronics" && product.price > 10000) {
        return "Premium Electronics"
    } else if (product.category === "electronics" && product.price < 10000) {
        return "Budget Electronics"
    } else if (product.category ==="fashion") {
       return "Fashion Item"
    } else {
        return "Unknown"
    }
}

ecommerceData.data.products.forEach((product)=>{
    console.log(product.name + " - " + getProductCategory(product));
});
