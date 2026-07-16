let bankingSystem = {
    bankName: "SecureBank",
    branch: "Hyderabad Central",
    apiStatus: 200,
    data: {
        account: {
            accountId: "ACC001",
            holderName: "Deepak Kumar",
            accountType: "savings",
            balance: 250000,
            isActive: true,
            kyc: {
                isVerified: true,
                documentType: "Aadhar",
                expiryYear: 2027
            }
        },
        transactions: [
            { txnId: "T001", type: "credit", amount: 50000, status: "success", category: "salary" },
            { txnId: "T002", type: "debit", amount: 5000, status: "success", category: "shopping" },
            { txnId: "T003", type: "debit", amount: 2000, status: "failed", category: "bills" },
            { txnId: "T004", type: "credit", amount: 10000, status: "success", category: "transfer" },
            { txnId: "T005", type: "debit", amount: 8000, status: "pending", category: "shopping" },
            { txnId: "T006", type: "credit", amount: 25000, status: "failed", category: "salary" }
        ],
        loans: {
            hasActiveLoan: true,
            loanAmount: 500000,
            monthlyEMI: 12000,
            isPaid: false
        }
    }
};



//Task 1: Print bankName, branch, and apiStatus directly from bankingSystem.
console.log(bankingSystem.bankName);
console.log(bankingSystem.branch);
console.log(bankingSystem.apiStatus);

//Task 2: Print holderName, accountType, and balance from the nested account object. 
// Then print documentType and isVerified from the deeply nested kyc object inside account.
console.log(bankingSystem.data.account.holderName);
console.log(bankingSystem.data.account.accountType);
console.log(bankingSystem.data.account.balance);

console.log(bankingSystem.data.account.kyc.documentType);
console.log(bankingSystem.data.account.kyc.isVerified);

//Task 3: Write an if/else that checks all four simultaneously:
// apiStatus === 200
// account.isActive === true
// account.kyc.isVerified === true
// account.balance > 100000
// Print "Account fully verified and active" if all true, otherwise "Account verification failed".
if (bankingSystem.apiStatus === 200 &&
    bankingSystem.data.account.isActive === true &&
    bankingSystem.data.account.kyc.isVerified === true &&
    bankingSystem.data.account.balance > 100000) {
    console.log("Account fully verified and active");
} else {
    console.log("Account verification failed");
}

//Task 4: Use .filter() to get only successful transactions (status === "success"), then use .forEach() to print each like:
//Success: T001 - credit - 50000 - salary

let successfulTransactions = bankingSystem.data.transactions.filter((successTransactions) => {
    return successTransactions.status === "success";
});

successfulTransactions.forEach((successDetails) => {
    console.log("Sucess : " + successDetails.txnId + " : " + successDetails.type + " : " + successDetails.amount + " : " + successDetails.category);
});


//Task 5: Use .filter() to get only failed or pending transactions (status === "failed" OR status === "pending"), 
// then use .map() to transform each into just their txnId and print the resulting array:
//["T003", "T005", "T006"]

let transactionsInNewArray = bankingSystem.data.transactions.filter((transactions) => {
    return transactions.status === "failed" || transactions.status === "pending"
})

let finalTxnId = transactionsInNewArray.map((trans) => {
    return trans.txnId;
})

console.log(finalTxnId);


//Task 6: Write a function called getTransactionLabel that takes a transaction object and returns:
// "Money In" if type is "credit" AND status is "success"
// "Money Out" if type is "debit" AND status is "success"
// "Failed Transaction" if status is "failed"
// "Pending Clearance" if status is "pending"
// "Unknown" for anything else
//Then call it for every transaction using .forEach() and print:
// T001 : Money In
// T002 : Money Out
// T003 : Failed Transaction
// T004 : Money In
// T005 : Pending Clearance
// T006 : Failed Transaction

const getTransactionLabel = (transaction) => {

    if (transaction.type === "credit" && transaction.status === "success") {
        return "Money In";
    } else if (transaction.type === "debit" && transaction.status === "success") {
        return "Money Out";
    } else if (transaction.status === "failed") {
        return "Failed Transaction";
    } else if (transaction.status === "pending") {
        return "Pending Clearance";
    } else {
        return "Unknown";
    }
}

bankingSystem.data.transactions.forEach((transactionRecords)=>{
    // console.log(transactionRecords);
    console.log(transactionRecords.txnId + " : " + getTransactionLabel(transactionRecords));
});


//Task 7: Write an if/else that checks the loans object:
// If hasActiveLoan === true AND isPaid === false AND monthlyEMI > 10000 — print "High EMI active loan detected - review required"
// If hasActiveLoan === true AND isPaid === false — print "Active loan - regular EMI"
// If isPaid === true — print "Loan cleared"
// Otherwise — print "No active loans"

let path = bankingSystem.data.loans;

if(path.hasActiveLoan === true && path.isPaid === false && path.monthlyEMI > 10000){
    return "High EMI active loan detected - review required";
}else if(path.hasActiveLoan === true && path.isPaid === false){
    return "Active loan - regular EMI";
}else if(path.isPaid === true){
    return "Loan cleared";
}else{
    return "No active loans";
}