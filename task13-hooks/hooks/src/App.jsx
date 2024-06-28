import React from 'react'
import UseState from './components/UseStateHook'
import UseEffect from './components/UseEffect'
import UseRef from './components/UseRef'
import UseMemo from './components/UseMemo'
import UseCallback from './components/UseCallback'
import ThemeToggler from './components/ThemeToggler'

import { ThemeProvider } from './context/ThemeContext';
import Counter from './components/Counter'

const App = () => {
  return (
    <>
    <UseState/>
    <UseEffect/>
    <UseRef/>
    <UseMemo/>
    <UseCallback/>
    <ThemeProvider>
      <div className="min-h-screen flex items-center justify-center">
        <ThemeToggler />
      </div>
    </ThemeProvider>
    <div className="min-h-screen flex items-center justify-center">
      <Counter />
    </div>
    </>
  )
}

export default App
