const express = require('express');
const router = express.Router();
const remainingController = require('../controllers/remainingController');
var success = '';
router.get('/', async (req, res) => {
    const remaining = await remainingController.getAllRemaining();
    res.render('remaining', { remaining ,success});
});
router.post('/addRemaining', async (req, res) => {
    const remaining = req.body;
    try {
        await remainingController.addRemaining(remaining);
        success = 'addTrue';
        // Redirect to /remaining with query parameter indicating success
        res.redirect('/remaining?success=addTrue');
    } catch (error) {
        console.error(error);
        success = 'addFalse';
        // Redirect to /remaining with query parameter indicating failure
        res.redirect('/remaining?success=addFalse');
    }
});

router.post('/deleteRemaining', async (req, res) => {
    const { remainingId } = req.body;
    await remainingController.deleteRemaining(remainingId);
    success = 'deleteTrue';
    // Redirect to /remaining with query parameter indicating success
    res.redirect('/remaining?success=deleteTrue');
});

module.exports = router;
