import React, { createContext, useState, useEffect } from 'react';

export const FinanceContext = createContext();

const FinanceProvider = ({ children }) => {
  const [income, setIncome] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [savings, setSavings] = useState([]);

  useEffect(() => {
    const storedIncome = JSON.parse(localStorage.getItem('income')) || [];
    const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    const storedSavings = JSON.parse(localStorage.getItem('savings')) || [];
    setIncome(storedIncome);
    setExpenses(storedExpenses);
    setSavings(storedSavings);
  }, []);

  useEffect(() => {
    localStorage.setItem('income', JSON.stringify(income));
  }, [income]);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem('savings', JSON.stringify(savings));
  }, [savings]);

  const addIncome = (entry) => setIncome([...income, entry]);
  const addExpense = (entry) => setExpenses([...expenses, entry]);
  const addSaving = (entry) => setSavings([...savings, entry]);

  return (
    <FinanceContext.Provider value={{ income, expenses, savings, addIncome, addExpense, addSaving }}>
      {children}
    </FinanceContext.Provider>
  );
};

export default FinanceProvider;
// import React, { createContext, useState, useEffect } from 'react';

// export const FinanceContext = createContext();

// const FinanceProvider = ({ children }) => {
//   const [income, setIncome] = useState(JSON.parse(localStorage.getItem('income')) || [
//     { description: 'Salary', amount: 3000 },
//     { description: 'Freelance', amount: 1500 },
//   ]);
//   const [expenses, setExpenses] = useState(JSON.parse(localStorage.getItem('expenses')) || [
//     { description: 'Rent', amount: 1000 },
//     { description: 'Groceries', amount: 300 },
//   ]);
//   const [savings, setSavings] = useState(JSON.parse(localStorage.getItem('savings')) || [
//     { description: 'Emergency Fund', amount: 1000 },
//     { description: 'Vacation', amount: 500 },
//   ]);

//   useEffect(() => {
//     localStorage.setItem('income', JSON.stringify(income));
//   }, [income]);

//   useEffect(() => {
//     localStorage.setItem('expenses', JSON.stringify(expenses));
//   }, [expenses]);

//   useEffect(() => {
//     localStorage.setItem('savings', JSON.stringify(savings));
//   }, [savings]);

//   const addIncome = (newIncome) => {
//     setIncome([...income, newIncome]);
//   };

//   const addExpense = (newExpense) => {
//     setExpenses([...expenses, newExpense]);
//   };

//   const addSaving = (newSaving) => {
//     setSavings([...savings, newSaving]);
//   };

//   return (
//     <FinanceContext.Provider value={{ income, expenses, savings, addIncome, addExpense, addSaving }}>
//       {children}
//     </FinanceContext.Provider>
//   );
// };

// export default FinanceProvider;
