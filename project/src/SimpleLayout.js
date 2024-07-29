// SimpleLayout.js
import React from 'react';
import "../src/index.css"

const SimpleLayout = ({ children }) => {
  return (
    <div className="simple-layout">
      {children}
    </div>
  );
};

export default SimpleLayout;
