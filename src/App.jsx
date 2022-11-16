import { useState } from 'react'
import './App.css'
import { FlexContent, Hero, Sales, Stories, Footer, NavBar } from './components'
import { heroapi, popularsales, topratedsales, highlight, sneaker, story, footerAPI } from "./data/data"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <main className='flex flex-col gap-6 relative'>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={topratedsales} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </div>
  )
}

export default App
