import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <nav className={`p-4 ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}>
      Navbar
    </nav>
  );
};

export default Navbar;
