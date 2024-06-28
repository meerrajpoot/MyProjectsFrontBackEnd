import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`min-h-screen w-full flex flex-col items-center justify-center ${
        theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'
      }`}
    >
      <h1 className="text-3xl font-bold mb-4">Theme Toggler</h1>
      <button
        onClick={toggleTheme}
        className={`px-4 py-2 rounded ${
          theme === 'light' ? 'bg-gray-800 text-white' : 'bg-white text-black'
        }`}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeToggler;
