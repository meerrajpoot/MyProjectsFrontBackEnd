import React, { useContext, useState } from 'react';
import { FinanceContext } from '../context/FinanceContext';

const Savings = () => {
  const { addSaving } = useContext(FinanceContext);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addSaving({ amount: parseFloat(amount), description });
    setAmount('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto mt-10">
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required className="p-2 border border-gray-300 rounded"/>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required className="p-2 border border-gray-300 rounded"/>
      <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add Saving</button>
    </form>
  );
};

export default Savings;
