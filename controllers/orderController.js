const pool = require('../db');

const getAllOrders = async () => {
    const [orders] = await pool.execute('SELECT * FROM orders');
    return orders;
};

const addOrder = async (order) => {
    const { oid, customerName, contactNo, address, product, quantity, date } = order;
    await pool.execute(
        'INSERT INTO orders (order_id, customer_name, contact_no, address, product, quantity, order_date) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [oid, customerName, contactNo, address, product, quantity, date]
    );
};

const updateOrder = async (order) => {
    const { oid, newoid, customerName, contactNo, address, product, quantity, date } = order;
    await pool.execute(
        'UPDATE orders SET order_id=?, customer_name=?, contact_no=?, address=?, product=?, quantity=?, order_date=? WHERE order_id=?',
        [newoid, customerName, contactNo, address, product, quantity, date, oid]
    );
};

const deleteOrder = async (oid) => {
    await pool.execute('DELETE FROM orders WHERE order_id=?', [oid]);
};


module.exports = { addOrder, updateOrder, deleteOrder, getAllOrders };
