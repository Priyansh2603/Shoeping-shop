// ContactInformation.js

import React from 'react';

const ContactInformation = ({ shippingAddress, billingAddress, phoneNumber }) => {
  return (
    <div>
      <label>Shipping Address:</label>
      <p>{shippingAddress}</p>

      <label>Billing Address:</label>
      <p>{billingAddress}</p>

      <label>Phone Number:</label>
      <p>{phoneNumber}</p>
    </div>
  );
};

export default ContactInformation;
