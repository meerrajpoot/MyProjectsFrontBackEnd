import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthProvider from './context/AuthContext';
import FinanceProvider from './context/FinanceContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <FinanceProvider>
        <App />
      </FinanceProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
