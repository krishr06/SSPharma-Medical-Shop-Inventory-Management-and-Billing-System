const express = require('express');
const router = express.Router();
const saleController = require('../controllers/saleController');

router.get('/', async (req, res) => {
    try {
        const products = await saleController.getSuggestions();
        const bno = await saleController.billNo();
        res.render('sale', { products: products , bno:bno});
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('An error occurred while fetching suggestions.');
    }
});

router.post('/saveBill', async (req, res) => {
  const bill = req.body;
  await saleController.saveBill(bill);
  res.redirect('/sale');
});
module.exports = router;
