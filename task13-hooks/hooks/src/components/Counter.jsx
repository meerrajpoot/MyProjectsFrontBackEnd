import React, { useReducer } from 'react';

// Define the initial state for the counter
const initialState = { count: 0 };

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  // Use useReducer to manage the counter state
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Counter: {state.count}</h1>
      <div className="space-x-4">
        <button
          onClick={() => dispatch({ type: 'increment' })}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: 'decrement' })}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
