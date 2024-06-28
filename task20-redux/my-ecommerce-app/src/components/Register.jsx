import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../redux/authSlice'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { error, isAuthenticated } = useSelector(state => state.auth)

  const handleRegister = (e) => {
    e.preventDefault()
    dispatch(register({ email, password }))
    if (isAuthenticated) {
      navigate('/')
    }
  }

  return (
    <div className="max-w-sm mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">Register</h2>
      <form onSubmit={handleRegister}>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            className="w-full border px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            className="w-full border px-3 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="w-full bg-blue-500 text-white py-2">Register</button>
      </form>
    </div>
  )
}

export default Register
