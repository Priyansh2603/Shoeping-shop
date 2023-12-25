// Wishlist.js

import React from 'react';

const Wishlist = ({ wishlistItems }) => {
  return (
    <div>
      <h3>Wishlist</h3>
      {wishlistItems && wishlistItems.map((item, index) => (
        <div key={index} className="wishlist-item">
          <p>{item.productName}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
