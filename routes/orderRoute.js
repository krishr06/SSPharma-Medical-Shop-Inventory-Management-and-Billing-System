const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.get('/', async (req, res) => {
    const orderData = await orderController.getAllOrders();
    res.render('order', { orderData });
});

router.post('/addOrder', async (req, res) => {
    const order = req.body;
    await orderController.addOrder(order);
    res.redirect('/order');
});

router.post('/updateOrder', async (req, res) => {
    const order = req.body;
    await orderController.updateOrder(order);
    res.redirect('/order');
});

router.post('/deleteOrder', async (req, res) => {
    const { oid } = req.body;
    await orderController.deleteOrder(oid);
    res.redirect('/order');
});

module.exports = router;
