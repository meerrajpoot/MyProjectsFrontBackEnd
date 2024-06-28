import React, { useContext } from 'react';
import { FinanceContext } from '../context/FinanceContext';

const Dashboard = () => {
  const { income, expenses, savings } = useContext(FinanceContext);

  const totalIncome = income.reduce((acc, item) => acc + item.amount, 0);
  const totalExpenses = expenses.reduce((acc, item) => acc + item.amount, 0);
  const totalSavings = savings.reduce((acc, item) => acc + item.amount, 0);

  return (
    <div className="dashboard max-w-2xl mx-auto mt-10 p-4 bg-gray-100 rounded shadow">
      <h2 className="text-center text-2xl mb-4">Dashboard</h2>
      <div className="mb-2 text-lg">Total Income: ${totalIncome}</div>
      <div className="mb-2 text-lg">Total Expenses: ${totalExpenses}</div>
      <div className="mb-2 text-lg">Total Savings: ${totalSavings}</div>
    </div>
  );
};

export default Dashboard;
