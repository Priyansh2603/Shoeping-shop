import { display } from '@mui/system';
import React from 'react';

const products = [
  {
    id: 1,
    name: 'Running Shoes',
    price: 'Rs. 79.99',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg',
    description: 'High-performance shoes designed for comfort and speed.'
  },
  {
    id: 2,
    name: 'Leather Jacket',
    price: 'Rs. 129.99',
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    description: 'A classic leather jacket that blends style with durability.'
  },
  {
    id: 3,
    name: 'Beard Grooming Kit',
    price: 'Rs. 39.99',
    image: 'https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:540/960885/n_4uDEVj1-960885_1.jpg',
    description: 'Complete kit for maintaining a well-groomed beard.'
  },{
    id: 7,
    name: 'Leather Wallet',
    price: 'Rs. 49.99',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQunsWd5kQktn7q9pQ9TJ775KKJFYEK7Qk7aA&s',
    description: 'A sophisticated leather wallet with multiple card slots.'
  },
  {
    id: 4,
    name: 'Designer Sunglasses',
    price: 'Rs. 99.99',
    image: 'https://www.chanel.com/images/t_one/t_fashion9/b_rgb:F7F7F7,e_brightness:-3/q_auto:good,f_autoplus,fl_lossy,dpr_1.1/w_840/square-sunglasses-black-acetate-acetate-packshot-default-a71224x02016s5018-8854308225054.jpg',
    description: 'Elegantly crafted sunglasses to complement any outfit.'
  },
  {
    id: 5,
    name: 'Smartwatch',
    price: 'Rs. 199.99',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHe1f1WbXmawpjkGdjtC9n6PLYJkFMG97wKVzEq30PMiWTtn_nqch5Ti1E-J7yFxrtw_4&usqp=CAU',
    description: 'A sleek smartwatch with fitness tracking and notifications.'
  },
  {
    id: 6,
    name: 'Wireless Earbuds',
    price: 'Rs. 59.99',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR32U3rDI_rTmTcGORe6i3dHyM6bsY-Dj-RUg&s',
    description: 'High-quality wireless earbuds with noise cancellation.'
  },
  
];


const Products = () => {
  const containerStyle = {
    backgroundColor: '#f8f9fa',
    padding: '2rem 1rem',
    paddingTop:'1rem',
    display: 'flex',
    justifyContent: 'center',
  };

  const wrapperStyle = {
    display: 'flex',
    overflowX: 'auto',
    gap: '1.5rem',
    padding: '1rem',
    minWidth: '90vw',
    scrollBehavior: 'smooth',
    scrollbarWidth: 'none',  // For Firefox
    msOverflowStyle: 'none', // For IE and Edge
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '0.75rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    minWidth: '15rem',
    cursor: 'pointer',
    zIndex: 50,
  };

  const imgStyle = {
    width: '100%',
    height: '10rem',
    objectFit: 'fill',
    transition: 'opacity 0.3s ease',
  };

  const contentStyle = {
    padding: '1.5rem',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#333333',
    marginBottom: '0.5rem',
  };

  const priceStyle = {
    fontSize: '1rem',
    color: '#555555',
    marginBottom: '1rem',
  };

  const descriptionStyle = {
    fontSize: '0.875rem',
    color: '#666666',
  };
  const titleStyle = {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#333333',
    marginBottom: '2rem',
    display:'flex',
    justifyContent:'center'
  };

  return (
    <div style={{
        backgroundColor: '#f8f9fa', paddingTop:'4rem'}}>
        <h2 style={titleStyle}>Featured Products</h2>
    <div style={containerStyle}>
      <div style={wrapperStyle} className="scrollbar-hidden">
        {products.map((product) => (
          <div
            key={product.id}
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={imgStyle}
            />
            <div style={contentStyle}>
              <h3 style={headingStyle}>{product.name}</h3>
              <p style={priceStyle}>{product.price}</p>
              <p style={descriptionStyle}>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Products;
