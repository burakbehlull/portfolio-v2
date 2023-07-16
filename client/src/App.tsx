import { useState } from 'react'
import './main.scss'
import Navbar from './components/Navbar'
import Header from './components/Header'
import {Helmet} from 'react-helmet'
import Projects from './components/Projects'

import {ThemeProvider} from './context/ThemeContext'

function App() {

  return (
    <>
      <Helmet>
        <title>I'm Buvak Portfolio</title>
      </Helmet>

      <ThemeProvider>
        <div className="App">
          <header>
            <Navbar />
          </header>

          <main>
            <Header />
            <Projects />
          </main>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
