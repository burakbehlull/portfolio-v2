import { useState } from 'react'
import './main.scss'
import Navbar from './components/Navbar'
import Header from './components/Header'
import {Helmet} from 'react-helmet'
import Projects from './components/Projects'


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
        <Projects />
      </main>
    </div>
  )
}

export default App
