const AMOUNT_OF_USERS = 3; 
const Users = new Map();

let nthTransaction = 3; 
let discountCode = 'discount10'; 

(function init() {
    for(let i = 1; i <= AMOUNT_OF_USERS; i++){
        let obj = {
            id : i, 
            discountCode : '',
            transactionsMade : 0,
            discountUses : 0
        }
        
        Users.set(i, obj);
    }
})();

module.exports = {
    Users,
    nthTransaction,
    discountCode
}
