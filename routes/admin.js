const express = require('express');
const router = express.Router();
const Admin = require('../helpers/admin');

module.exports = router;

/**
 * Retrieves the discount code
 */
router.get('/code', async(req, res, next) => {
  try {
    const results = await Admin.getDiscountCode();
    res.status(200).json(results);
  }catch(error){
    console.log('error: ', error);
    res.status(500).json({message : error});
  }
});

/**
 * Retrieves the discount code
 */
router.get('/code', async(req, res, next) => {
  try {
    const results = await Admin.getDiscountCode();
    res.status(200).json(results);
  }catch(error){
    console.log('error: ', error);
    res.status(500).json({message : error});
  }
});

/**
 * Retrieves the transaction report
 */
router.get('/report', async(req, res, next) => {
  try {
    const results = await Admin.getReport();
    res.status(200).json(results);
  }catch(error){
    console.log('error: ', error);
    res.status(500).json({message : error});
  }
});

/**
 * Sets discount code
 */
router.post('/set_code', async(req, res, next) => {
  try {
    const results = await Admin.setDiscountCode(req.body);
    res.status(200).json('Discount Code Set'); 
  }catch(error){
    console.log('error: ', error);
    res.status(500).json({message : error});
  }
});

/**
 * Sets nth transaction amount
 */
router.post('/set_transaction_number', async(req, res, next) => {
  try {
    const results = await Admin.setTransactionNumber(req.body);
    res.status(200).json('nth Transaction number was set'); 
  }catch(error){
    console.log('error: ', error);
    res.status(500).json({message : error});
  }
});
