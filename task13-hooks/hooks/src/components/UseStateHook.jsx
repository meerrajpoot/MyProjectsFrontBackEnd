import React, { useState } from 'react';

const UseState = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount > 0 ? prevCount - 1 : 0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Counter: {count}</h1>
      <div className="flex space-x-4">
        <button 
          onClick={increment} 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Increment
        </button>
        <button 
          onClick={decrement} 
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default UseState;
