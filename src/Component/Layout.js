import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav'; // Your navigation component

const Layout = ({ children }) => {
  return (
    <div>
      <Nav /> {/* The header menu that is always visible */}
      <Outlet/>
    </div>
  );
};

export default Layout;
