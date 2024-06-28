import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Content = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`p-4 ${theme === 'light' ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'}`}>
      Content
    </div>
  );
};

export default Content;
