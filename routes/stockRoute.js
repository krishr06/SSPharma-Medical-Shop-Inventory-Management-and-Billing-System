const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stockController');

// Display stock data
router.get('/', async (req, res) => {
    const stockData = await stockController.getAllStock();
    res.render('stock', { stockData });
});

// Add new stock
router.post('/addStock', async (req, res) => {
    const stock = req.body;
    await stockController.addStock(stock);
    res.redirect('/stock');
});

// Update existing stock
router.post('/updateStock', async (req, res) => {
    const stock = req.body;
    await stockController.updateStock(stock);
    res.redirect('/stock');
});

// Delete stock
router.post('/deleteStock', async (req, res) => {
    const stock = req.body;
    await stockController.deleteStock(stock);
    res.redirect('/stock');
});

module.exports = router;
