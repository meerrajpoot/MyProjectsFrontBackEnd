import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import './index.css'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <Content />
        <Footer />
        <div className="flex justify-center mt-72">
          <ThemeToggle />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
