import React, { useState } from 'react';

const Counter = () => {
  
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [minLimit, setMinLimit] = useState(-34);
  const [maxLimit, setMaxLimit] = useState(34);

//   const [minLimit, setMinLimit] = useState(Number.MIN_SAFE_INTEGER);
//   const [maxLimit, setMaxLimit] = useState(Number.MAX_SAFE_INTEGER);

  
  const increment = () => {
    if (count + step <= maxLimit) {
      setCount(count + step);
    }
  };

  
  const decrement = () => {
    if (count - step >= minLimit) {
      setCount(count - step);
    }
  };


  const reset = () => {
    setCount(0);
  };


  const handleStepChange = (e) => {
    setStep(Number(e.target.value));
  };

  
  const handleMinLimitChange = (e) => {
    setMinLimit(Number(e.target.value));
  };

  
  const handleMaxLimitChange = (e) => {
    setMaxLimit(Number(e.target.value));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Enhanced Counter|Tailwind Css|Reset Button|Max Min value</h1>
      <div className="flex items-center mb-4">
        <button
          onClick={decrement}
          className="bg-red-500 text-white px-4 py-2 rounded mr-2"
        >
          -
        </button>
        <span className="text-2xl">{count}</span>
        <button
          onClick={increment}
          className="bg-green-500 text-white px-4 py-2 rounded ml-2"
        >
          +
        </button>
      </div>
      <div className="mb-4">
        <button
          onClick={reset}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>
      <div className="flex flex-col items-center">
        <label className="mb-2">
          Step Value:
          <input
            type="number"
            value={step}
            onChange={handleStepChange}
            className="border ml-2 px-2 py-1 rounded"
          />
        </label>
        <label className="mb-2">
          Min Limit:
          <input
            type="number"
            value={minLimit}
            onChange={handleMinLimitChange}
            className="border ml-2 px-2 py-1 rounded"
          />
        </label>
        <label className="mb-2">
          Max Limit:
          <input
            type="number"
            value={maxLimit}
            onChange={handleMaxLimitChange}
            className="border ml-2 px-2 py-1 rounded"
          />
        </label>
      </div>
    </div>
  );
};

export default Counter;