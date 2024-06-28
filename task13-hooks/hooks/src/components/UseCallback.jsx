import React, { useState, useCallback } from 'react';

const UseCallback = () => {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = useCallback(() => {
    const newRandomNumber = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(newRandomNumber);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Random Number Generator</h1>
      <button
        onClick={generateRandomNumber}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 mb-4"
      >
        Generate Random Number
      </button>
      {randomNumber !== null && (
        <p className="text-xl">Generated Random Number: {randomNumber}</p>
      )}
    </div>
  );
};

export default UseCallback;
