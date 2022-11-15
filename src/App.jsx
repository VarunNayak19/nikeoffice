import { useState } from 'react'
import './App.css'
import { Hero, Sales } from './components'
import { heroapi, popularsales, topratedsales } from "./data/data"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <main className='flex flex-col gap-6'>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} />
        <Sales endpoint={topratedsales} />
      </main>
    </div>
  )
}

export default App
