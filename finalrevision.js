//https://fakestoreapi.com/products

let TotalTestProcessed = 0;
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
            TotalTestProcessed++;
            let convertedResponse = await response.json();
            let validation = validateProduct(convertedResponse);
            if (validation.isValid) {
                Passed++;
                console.log("Passed");
            } else {
                Failed++;
                console.log(`Failed error: `,errors);
            }
        } else if (response.status !== 200) {
            TotalTestProcessed++;
            NotFound++;
            console.log(`Not Found: ${productId}`);
        }
    } catch (error) {
        console.log("catch error: ", error.message);
    } finally {
        console.log("Product validation is passed!");
    }
}

async function runSuite() {
    for (let a of [1, 2, 3, 6, 4, 5]) {
        await testProduct(a);
    }
    console.log("=========Test Summary===========");
    console.log(`TotalTestProcessed: ${TotalTestProcessed}`);
    console.log(`Passed: ${Passed}`);
    console.log(`Failed: ${Failed}`);
    console.log(`NotFound: ${NotFound}`);

}


export { runSuite };