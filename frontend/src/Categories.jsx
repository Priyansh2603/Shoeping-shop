import React from 'react';

const categories = [
  { id: 1, name: 'Footwear', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3GYmlCFqLXVJwbXI3Xme2F1jJN-QC6I_sRzEEQzL-dmwVw_pycDFmAl4sFpe7duPGw4Y&usqp=CAU' },
  { id: 2, name: 'Clothing', image: 'https://assets-global.website-files.com/5d6fe845a10b7881ddcc9c9c/635639544d0d414c0bad916d_Picture15.png' },
  { id: 3, name: 'Grooming', image: 'https://www.bookeventz.com/blog-old/wp-content/uploads/2021/03/Grooming-Products.jpg' },
  { id: 4, name: 'Accessories', image: 'https://assets.architecturaldigest.in/photos/6045cf4607b8c2a9c90a31cc/16:9/w_2560%2Cc_limit/modular-kitchen-accessories-design-interiors.jpg' },
  { id: 5, name: 'Electronics', image: 'https://images.herzindagi.info/image/2020/Apr/Electronics.jpg' },
  { id: 6, name: 'Home & Kitchen', image: 'https://api.gharpedia.com/wp-content/uploads/2018/12/Modular-kitchen-Accessories-01-0504140002.jpg' },
  { id: 7, name: 'Sports', image: 'https://5.imimg.com/data5/SELLER/Default/2023/12/368539112/VE/XJ/GB/3333530/sports-kit.jpg' },
];

const Categories = () => {
  const containerStyle = {
    backgroundColor: '#f8f9fa',
    padding: '4rem 1rem',
  };

  const headerStyle = {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#333333',
    textAlign: 'center',
    marginBottom: '2rem',
  };

  const wrapperStyle = {
    display: 'flex',
    overflowX: 'auto',
    padding: '1rem',
    gap: '1rem',
    scrollbarWidth: 'none', // For Firefox
    msOverflowStyle: 'none', // For IE and Edge
  };

  const cardStyle = {
    position: 'relative',
    flexShrink: '0',
    width: '250px',
    height: '200px',
    backgroundColor: '#ffffff',
    borderRadius: '0.75rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  };

  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'opacity 0.3s ease',
  };

  const overlayStyle = {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))',
    color: '#ffffff',
    textAlign: 'center',
    padding: '0.75rem',
    fontSize: '1.25rem',
    fontWeight: '600',
    transition: 'background 0.3s ease',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Explore Our Categories</h2>
      <div style={wrapperStyle} className="scrollbar-hidden">
        {categories.map((category) => (
          <div
            key={category.id}
            style={cardStyle}
            onMouseEnter={(e) => e.currentTarget.querySelector('img').style.opacity = '0.8'}
            onMouseLeave={(e) => e.currentTarget.querySelector('img').style.opacity = '1'}
            onMouseOver={(e) => e.currentTarget.querySelector('div').style.background = 'linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))'}
            onMouseOut={(e) => e.currentTarget.querySelector('div').style.background = 'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))'}
          >
            <img
              src={category.image}
              alt={category.name}
              style={imgStyle}
            />
            <div style={overlayStyle}>
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
