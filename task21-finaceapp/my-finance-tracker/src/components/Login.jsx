import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto mt-10">
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required className="p-2 border border-gray-300 rounded"/>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required className="p-2 border border-gray-300 rounded"/>
      <button type="submit" className="p-2 bg-green-500 text-white rounded hover:bg-green-600">Login</button>
    </form>
  );
};

export default Login;
