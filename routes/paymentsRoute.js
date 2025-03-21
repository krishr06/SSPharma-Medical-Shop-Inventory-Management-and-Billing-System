// paymentsRoute.js
const express = require('express');
const router = express.Router();
const paymentsController = require('../controllers/paymentsController');

router.get('/', async (req, res) => {
    const payments = await paymentsController.getAllPayments();
    res.render('payments', { payments });
});

router.post('/addPayment', async (req, res) => {
    const payment = req.body;
    try {
        await paymentsController.addPayment(payment);
        res.redirect('/payments?success=true');
    } catch (error) {
        console.error(error);
        res.redirect('/payments?success=false');
    }
});

router.post('/updatePayment', async (req, res) => {
    const payment = req.body;
    await paymentsController.updatePayment(payment);
    res.redirect('/payments');
});

router.post('/deletePayment', async (req, res) => {
    const { paymentId } = req.body;
    await paymentsController.deletePayment(paymentId);
    res.redirect('/payments');
});

module.exports = router;
