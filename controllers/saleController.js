// saleController.js
const pool = require('../db');

const billNo = async () => {
  const [result] = await pool.query('SELECT MAX(BillNo) AS maxBillNo FROM billdetails');
  const lastBillNo = result[0].maxBillNo || 0; // If there are no rows, consider the lastBillNo as 0
  return lastBillNo + 1;
};

const getSuggestions = async () => {
    const [products] = await pool.query('SELECT * FROM stock');
    return products;
};

const saveBill = async (bill) => {
  const {pname, dname, product, mrp, pkg, exp, sale, cost, discount } = bill;
    let total = 0;
    try{
      for(let i=0;i<cost.length;i++){
        total += parseFloat(cost[i]);
      }
    }
    catch(e){
      total = 0;
    }
    const billNumber = await billNo(); 
    console.log(billNumber);
    let billDate = new Date();
    let discountValue = parseFloat(discount);
    total = total - (total/100)*discountValue;
    for(let i=0;i<product.length;i++){
      await pool.execute('INSERT INTO BillDetails (BillNo, Date, PatientName, DoctorName, Product, MRP, Package, Qty, Cost, Discount, Total) VALUES (?,?,?,?,?,?,?,?,?,?,?)',[billNumber,billDate,pname, dname, product[i], mrp[i], pkg[i], sale[i], cost[i], discountValue,total]);
    }
};
  
  module.exports = {
    getSuggestions,
    saveBill,
    billNo,
  };