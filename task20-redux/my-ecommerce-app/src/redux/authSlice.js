import { createSlice } from '@reduxjs/toolkit'
import users from '../data/users'

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload
      const user = users.find(u => u.email === email && u.password === password)
      if (user) {
        state.isAuthenticated = true
        state.user = { id: user.id, email: user.email }
        state.error = null
      } else {
        state.error = 'Invalid email or password'
      }
    },
    logout: (state) => {
      state.isAuthenticated = false
      state.user = null
      state.error = null
    },
    register: (state, action) => {
      const { email, password } = action.payload
      const userExists = users.some(u => u.email === email)
      if (userExists) {
        state.error = 'User already exists'
      } else {
        const newUser = {
          id: users.length + 1,
          email,
          password
        }
        users.push(newUser)
        state.isAuthenticated = true
        state.user = { id: newUser.id, email: newUser.email }
        state.error = null
      }
    }
  }
})

export const { login, logout, register } = authSlice.actions
export default authSlice.reducer
