import React, { useEffect, useRef } from 'react';

const UseRef = () => {
  const inputRef = useRef(null);

  
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  
  const handleButtonClick = () => {
    inputRef.current.focus();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Focus Input Example</h1>
      <form className="flex flex-col items-center">
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter something..."
          className="mb-4 p-2 border rounded"
        />
        <button
          type="button"
          onClick={handleButtonClick}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Focus Input
        </button>
      </form>
    </div>
  );
};

export default UseRef;
