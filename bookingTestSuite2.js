//https://fakestoreapi.com/products

let TotalTests = 0;
let Passed = 0;
let Failed = 0;
let NotFound = 0;

function validateProduct(product) {

    let issues = [];

    if (!product.title) {
        issues.push("Missing Title");
    }
    if (!product.price > 0) {
        issues.push("Price is less than 0");
    }
    if (!product.category) {
        issues.push("Missing category");
    }
    if (!product.image) {
        issues.push("Missing Image");
    }
    if (!product?.rating?.rate) {
        issues.push("Missing rating rate");
    }

    return {
        isValid: issues.length === 0,
        errors: issues
    }
}

async function testProduct(productId) {
    try {
        let response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        if (response.status === 200) {
            TotalTests++;
            let convertedResponse = await response.json();
            let validation = validateProduct(convertedResponse);
            if (validation.isValid) {
                Passed++;
                console.log(`Pass: Backpack`);
            } else {
                Failed++;
                console.log(`Fail: - Missing image - Invalid price`);
            }
        } else if (response.status !== 200) {
            TotalTests++;
            NotFound++;
            console.log(`Not Found: ${productId}`);
        }
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log("Product testing is done.")
    }
}

async function runSuite1() {
    for (let code of [1, 5, 20, 999]) {
        await testProduct(code);
    }
    console.log("=========Test Summary===========");
    console.log(`Total Tests: ${TotalTests}`);
    console.log(`Passed: ${Passed}`);
    console.log(`Failed: ${Failed}`);
    console.log(`NotFound: ${NotFound}`);
}

export { runSuite1 };