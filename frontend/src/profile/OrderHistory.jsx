// OrderHistory.js

import React from 'react';

const OrderHistory = ({ orders }) => {
  return (
    <div>
      <h3>Order History</h3>
      <ul>
        {orders && orders.map((order, index) => (
          <li key={index}>
            Order #{order.orderNumber} - Date: {order.date} - Status: {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;
