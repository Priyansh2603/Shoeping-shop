import React from 'react';

const categories = [
  { id: 1, name: 'Footwear', image: 'https://example.com/footwear.jpg' },
  { id: 2, name: 'Clothing', image: 'https://example.com/clothing.jpg' },
  { id: 3, name: 'Grooming', image: 'https://example.com/grooming.jpg' },
  { id: 4, name: 'Accessories', image: 'https://example.com/accessories.jpg' },
  { id: 5, name: 'Electronics', image: 'https://example.com/electronics.jpg' },
  { id: 6, name: 'Home & Kitchen', image: 'https://example.com/home-kitchen.jpg' },
  { id: 7, name: 'Sports', image: 'https://example.com/sports.jpg' },
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
