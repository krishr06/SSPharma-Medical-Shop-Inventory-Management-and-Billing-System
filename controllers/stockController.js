const pool = require('../db');

// Function to get all stock data
const getAllStock = async () => {
    const [rows] = await pool.query('SELECT * FROM stock');
    //console.log(rows);
    return rows;
};

// Function to add new stock
const addStock = async (stock) => {
    const { pid, product, bno, exp, mrp, pkg, qty } = stock;
    await pool.execute(
        'INSERT INTO stock (pid, product, batch_no, expiry_date, mrp, pkg, qty) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [pid, product, bno, exp, mrp, pkg, qty]
    );
};

// Function to update existing stock
const updateStock = async (stock) => {
    const { pid, newpid, product, bno, exp, mrp, pkg, qty } = stock;
    await pool.execute('UPDATE stock SET pid=?, product=?, batch_no=?, expiry_date=?, mrp=?, pkg=?, qty=? WHERE pid=?',[newpid, product, bno, exp, mrp, pkg, qty, pid]);

};

// Function to delete stock
const deleteStock = async (stock) => {
    const { pid } = stock;
    await pool.execute('DELETE FROM stock WHERE pid=?', [pid]);
};

module.exports = {
    getAllStock,
    addStock,
    updateStock,
    deleteStock,
};
