import { useState } from 'react'
import './main.scss'
import Navbar from './components/Navbar'
import Header from './components/Header'
import WaveBar from './layout/WaveBar'


function App() {

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <main>
        <Header />
        <WaveBar />
      </main>
    </div>
  )
}

export default App
