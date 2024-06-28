import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

const ThemedApp = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <Content />
        <Footer />
        <div className="fixed bottom-4 right-4">
          <ThemeToggle />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ThemedApp;
