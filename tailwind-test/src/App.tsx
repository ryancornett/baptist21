import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-3xl font-bold text-blue-600 underline p-4">
      Tailwind is working!
    </div>
  )
}

export default App
