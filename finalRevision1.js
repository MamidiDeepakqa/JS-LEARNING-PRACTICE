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

async function runSuiteQA() {
    for (let products of [1, 2, 3, 4, 5, 6]) {
        await testProduct(products);
    }
    console.log("===========Test Summary============");
    console.log(`TotalTestsPerformed : ${TotalTestsPerformed}`);
    console.log(`Passed : ${Passed}`);
    console.log(`Failed : ${Failed}`);
    console.log(`Not_Found : ${Not_Found}`);
}

export { runSuiteQA };


//Complete Playwright Actions Reference
//Navigation..
await page.goto('www.google.com');
await page.goBack();
await page.goForward();
await page.reload();
await page.waitForLoadState('networkidle');

//Clicking..
await page.click('#element');
await page.getByRole('button', { name: 'Started' }).click();
await page.getByRole('link', { name: 'Sign In' }).click();
await page.dblClick();
await page.click('#element', { button: 'right' });

//Typing / Filling input fields
await page.fill('#element', 'Admin');
await page.fill('.element', 'Admin');
await page.getByPlaceholder('.element').fill('test data');
await page.type('.element', 'Admin')
await page.fill('#element', '');
await page.press('#element', 'Tab');
await page.press('.element', 'Enter');

//Checkboxes and Radio buttons
await page.check('#element');
await page.uncheck('#element');
await page.click('#element');
await expect(page.locator('.element')).toBeChecked();

//Dropdowns / Select
await page.selectOption('.element', 'india');
await page.selectOption('#element', { index: 2 });
await page.selectoption('.element', { label: 'US' });
await page.selectOption('#element', ["apple", "orange"]);

//File Upload
await page.setInputFile('#file-upload', 'c://omega/files.png');
await page.setInputFile('.file-upload', ['path1', 'path2']);

//Hover and Focus
await page.hover('#element');
await page.focus('.element');

//Waiting
await page.waitForSelector('#element');
await page.waitForTimeOut(2000);
await page.waitForURL('www.google.com');
await page.waitForSelector('text=test');

//Getting text and values
let textvalue = await page.locator('#element').textContent();
let inputValue = await page.locator('.element').inputValue();

//Assertions (expect) — checking results
await expect(page.locator('.element')).toBeEnabled();
await expect(page.locator('.element')).toContaintext();
await expect(page.locator('.element')).toHaveValue();
await expect(page.locator('.element')).toBeDisabled();
await expect(page.locator('.element')).toHaveTitle();
await expect(page.locator('.element')).toHaveURL('');
await expect(page.locator('.element')).toHaveText();

//Screenshots (useful for debugging)
await page.screenshot({path: 'screenshot.png', fullPage: true});
await page.locator('.header').screenshot({path: 'screen.png'});

//Alerts and Popups
page.on('dialog', dialog => dialog.accept);
page.on('dialog', dialog => dialog.dismiss);
page.on('dialog', dialog=>{
    console.log(dialog.message())
    dialog.accept();
});

//Keyboard shortcuts
await page.keyboard.press('Control+A');
await page.keyboard.press('Control+C');
await page.keyboard.press('Escape');
await page.keyboard.press('Enter');

//Frames (iframes)
let frame = await page.frameLocator('#element');
await frame.locator('.element').click();