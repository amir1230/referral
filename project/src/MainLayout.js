// MainLayout.js
import React from 'react';
import Sidebar from './components/Sidebar';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
