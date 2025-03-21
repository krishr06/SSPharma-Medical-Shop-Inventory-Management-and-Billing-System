const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const indexRoute = require('./routes/indexRoute');
const saleRoute = require('./routes/saleRoute');
const stockRoute = require('./routes/stockRoute');
// const orderRoute = require('./routes/orderRoute');
const paymentsRoute = require('./routes/paymentsRoute');
const remainingRoute = require('./routes/remainingRoute');

const pool = require('./db');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//home
app.use('/', indexRoute);

//sale
app.use('/sale', saleRoute);
app.use('/sale/saveBill', saleRoute);

//stock
app.use('/stock', stockRoute);
app.use('/stock/addStock', stockRoute);
app.use('/stock/updateStock', stockRoute);
app.use('/stock/deleteStock', stockRoute);

//order
// app.use('/order', orderRoute);
// app.use('/order/addOrder', orderRoute);
// app.use('/order/updateOrder', orderRoute);
// app.use('/order/deleteOrder', orderRoute);

//payments
app.use('/payments', paymentsRoute);
app.use('/payments/addPayment', paymentsRoute);
app.use('/payments/updatePayment', paymentsRoute);
app.use('/payments/deletePayment', paymentsRoute);
//remaining
app.use('/remaining', remainingRoute);
app.use('/remaining/addRemaining', remainingRoute);
app.use('/remaining/updateRemaining', remainingRoute);
app.use('/remaining/deleteRemaining', remainingRoute);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
