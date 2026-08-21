//https://fakestoreapi.com/products

let TotalTestsPerformed = 0;
let Passed = 0;
let Failed = 0;
let Not_Found = 0;
let errors = [];

function validateProduct(product) {
    let issues = [];

    if (!product.title) {   //undefined / null / empty
        issues.push("Missing title");
    }
    if (!product.price) {
        issues.push("Missing price");
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
            TotalTestsPerformed++;
            let convertedResponse = await response.json();
            let validation = validateProduct(convertedResponse);
            if (validation.isValid) {
                Passed++;
                console.log(JSON.stringify(convertedResponse, null, 2));
                console.log(`productId: ${productId} is Executed`);
            } else {
                Failed++;
                console.log(`Failed: ${productId} `, errors);
            }
        } else if (response.status !== 200) {
            TotalTestsPerformed++;
            Not_Found++;
        }
    } catch (error) {
        console.log("error: ", error.message);
    } finally {
        console.log("Product validation is done.")
    }
}

async function runSuiteQA(){
    for(let products of [1,2,3,4,5,6]){
        await testProduct(products);
    }
    console.log("===========Test Summary============");
    console.log(`TotalTestsPerformed : ${TotalTestsPerformed}`);
    console.log(`Passed : ${Passed}`);
    console.log(`Failed : ${Failed}`);
    console.log(`Not_Found : ${Not_Found}`);
}

export { runSuiteQA };