import { useState } from 'react'
import './main.scss'
import Navbar from './components/Navbar'
import Header from './components/Header'

function App() {

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <main>
        <Header />
      </main>
    </div>
  )
}

export default App
