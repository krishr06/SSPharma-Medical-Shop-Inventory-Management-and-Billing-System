// paymentsController.js
const pool = require('../db');

const getAllPayments = async () => {
    const [rows] = await pool.query('SELECT * FROM payments');
    return rows;
};

const addPayment = async (payment) => {
    const { paymentId, supplier, date, amount } = payment;
    await pool.execute('INSERT INTO payments (PmId, Supplier, Date, Amount) VALUES (?, ?, ?, ?)', [paymentId, supplier, date, amount]);
};

const updatePayment = async (payment) => {
    const { paymentId, newPaymentId, supplier, date, amount } = payment;
    await pool.execute('UPDATE payments SET PmId = ?, Supplier = ?, Date = ?, Amount = ? WHERE PmId = ?', [newPaymentId,supplier, date, amount, paymentId]);
};
const deletePayment = async (paymentId) => {
    await pool.execute('DELETE FROM payments WHERE PmId = ?', [paymentId]);
};
module.exports = {
    getAllPayments,
    addPayment,
    updatePayment,
    deletePayment,
};
