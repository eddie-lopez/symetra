const express   = require('express');
const router    = express.Router();
const Customers = require('../helpers/customers');

module.exports = router;

/**
 * Checks if user has discount code available 
 */
router.get('/:user_id/discount_code', async(req, res, next) => {
  try {
    let idNumber = parseInt(req.params.user_id); 
    const results = await Customers.haveDiscountCode(idNumber);
    res.status(200).json('Discount Code Set'); 
  }catch(error){
    console.log('error: ', error);
    res.status(500).json({message : error});
  }
});

/**
 * Makes a transaction
 */
router.post('/transaction/:user_id', async(req, res, next) => {
  try {
    let idNumber = parseInt(req.params.user_id); 
    const results = await Customers.makeTransaction(idNumber);
    res.status(200).json(results); 
  }catch(error){
    console.log('error: ', error);
    res.status(500).json({message : error});
  }
});