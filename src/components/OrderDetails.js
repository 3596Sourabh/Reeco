// src/components/OrderDetails.js
import React from 'react';
import './OrderDetails.css';

const OrderDetails = ({ order }) => {
  const {
    supplier,
    shippingDate,
    totalAmount,
    category,
    department,
    status,
  } = order;

  return (
    <div >

      <table className="order-details-table">
      <thead>
        <tr>
          <th>Supplier</th>
          <th>Shipping Date</th>
          <th>Total Amount</th>
          <th>Category</th>
          <th>Department</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{order.supplier}</td>
          <td>{order.shippingDate}</td>
          <td>${order.totalAmount.toFixed(2)}</td>
          <td>{order.category}</td>
          <td>{order.department}</td>
          <td>{order.status}</td>
        </tr>
      </tbody>
    </table>
           
        
    </div>    
  );
};

export default OrderDetails;
