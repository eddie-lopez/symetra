let { discountCode, nthTransaction, Users } = require('../init');

module.exports = { 
    setDiscountCode,
    getDiscountCode,
    setTransactionNumber,
    getReport
}

async function setDiscountCode(body) {
    discountCode = body.discountCode;
}

async function getDiscountCode() {
    return discountCode;
}

async function setTransactionNumber(body){
    nthTransaction = body.transactionNumber;
}

async function getReport() {
    let totalTransactions = 0; 
    let totalDiscounts = 0; 
    let iterator = Users.values();

    for(let i = 0; i < Users.size; i++){
        let currObj = iterator.next().value;
        totalTransactions += currObj.transactionsMade;
        totalDiscounts += currObj.discountUses;
    }
    
    return `Total Transaction: ${totalTransactions} Total Discounts: ${totalDiscounts}`;
}