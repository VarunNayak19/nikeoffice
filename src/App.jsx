import { useState } from 'react'
import './App.css'
import { FlexContent, Hero, Sales } from './components'
import { heroapi, popularsales, topratedsales, highlight, sneaker } from "./data/data"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <main className='flex flex-col gap-6 relative'>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={topratedsales} />
        <FlexContent endpoint={sneaker} />
      </main>
    </div>
  )
}

export default App
