const pool = require('../db');

const getAllRemaining = async () => {
    const [rows] = await pool.query('SELECT * FROM remaining');
    return rows;
};

const addRemaining = async (remaining) => {
    const { remainingId, customerName, contactNo, date, amount } = remaining;
    await pool.execute('INSERT INTO remaining (RmId, CustomerName, ContactNo, Date, Amount) VALUES (?, ?, ?, ?, ?)', [remainingId, customerName, contactNo, date, amount]);
};

const deleteRemaining = async (remainingId) => {
    await pool.execute('DELETE FROM remaining WHERE RmId = ?', [remainingId]);
};

module.exports = {
    getAllRemaining,
    addRemaining,
    deleteRemaining,
};
