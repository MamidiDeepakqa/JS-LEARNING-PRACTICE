//https://fakestoreapi.com/products

let TotalTestsProcessed = 0;
let Passed = 0;
let Failed = 0;
let NotFound = 0;
let errors = [];

function validateProduct(product) {
    let issues = [];

    if (!product.title) {
        issues.push("Missing Title");
    }
    if (!product.price) {
        issues.push("Missing Price");
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
            TotalTestsProcessed++
            let convertedResponse = await response.json();
            let validation = validateProduct(convertedResponse);
            if (validation.isValid) {
                Passed++;
                console.log(`Passed: ${productId}`);
            } else {
                Failed++;
                console.log(`Failed: ${errors}`);
            }
        } else if (response.status !== 200) {
            TotalTestsProcessed++;
            NotFound++;

        }
    } catch (error) {
        console.log(`Error: ${productId} `, error.message);
        NotFound++;
    } finally {
        console.log(`ProductId: ${productId} tested`);
    }
}

async function runSuite() {
    for (let a of [1, 2, 3, 4, 5, 6, 6, 7, 532, 13, 34, 2, 52, 6]) {
        await testProduct(a);
    }

    console.log("=============log summary===============");
    console.log(`TotalTestsProcessed: ${TotalTestsProcessed}`);
    console.log(`Passed: ${Passed}`);
    console.log(`Failed: ${Failed}`);
    console.log(`NotFound: ${NotFound}`);

}

export { runSuite };