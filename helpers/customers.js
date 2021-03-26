const { Users, nthTransaction, discountCode } = require('../init');
const Admin = require('../helpers/admin');

module.exports = {
    haveDiscountCode,
    makeTransaction
}

async function haveDiscountCode(userId) {
    let user = Users.get(userId);
    return user.discountCode.trim().length > 0
}

async function makeTransaction(userId) {
    if(!Users.has(userId)) return `User with ${userId} does not exist`;

    let user =  Users.get(userId)
    
    user.transactionsMade++;

    if(user.transactionsMade % nthTransaction === 0){
        let code = await Admin.getDiscountCode();
        user.discountCode = code;
    }

    let doesHaveDiscount = await haveDiscountCode(userId);
    if(doesHaveDiscount){
        user.discountCode = '';
        user.discountUses++;
        return "User made a purchase with a discount code";   
    }else{
        return "User made a purchase";
    }
}