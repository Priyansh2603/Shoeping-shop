// ErrorPage.jsx
import React from 'react';

const Error = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minWidth:"100vw",minHeight:"80vh"}}>
      <h1 style={{display:"block"}}>Error: Page Not Found</h1>
      <p>Sorry, the requested page does not exist.</p>
    </div>
  );
};

export default Error;
