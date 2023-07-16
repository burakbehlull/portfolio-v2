import { useState } from 'react'
import './main.scss'
import Navbar from './components/Navbar'
import Header from './components/Header'
import WaveBar from './layout/WaveBar'
import {Helmet} from 'react-helmet'


function App() {

  return (
    <div className="App">
      <Helmet>
        <title>I'm Buvak Portfolio</title>
      </Helmet>

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
