
import React from 'react';
import './Orders.css';

const Orders = ({ orderId, onBackClick, onApproveClick }) => {
  return (
    
    
    <div className="orders">
        
      <h1> <b> Order {orderId}</b></h1>
      <button ClassName= "BackButton" onClick={onBackClick}>Back</button>
      <button ClassName="ApproveButton" onClick={onApproveClick}>Approve Order</button>
    </div>
    
  );
};

export default Orders;
