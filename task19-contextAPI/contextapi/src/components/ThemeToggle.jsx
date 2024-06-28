import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      className={`p-2 rounded ${theme === 'light' ? 'bg-gray-300 text-black font-bold' : 'bg-gray-700 font-bold text-white'} `}
      onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;