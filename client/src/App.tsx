import React from 'react'
import { Helmet } from 'react-helmet'

import Navbar from './components/Navbar'
import Header from './components/Header'
import Projects from './components/Projects'

import { ThemeProvider } from './context/ThemeContext'
import './main.scss'

const App : React.FC = () => {
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
