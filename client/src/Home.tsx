import React from 'react'
import { Helmet } from 'react-helmet'

import Navbar from './components/Navbar'
import Header from './components/Header'
import './main.scss'

import {useTheme} from './context/ThemeContext'



const Home : React.FC = () => {
  const {theme} = useTheme()
  return (
    <>
      <Helmet>
        <title>I'm Buvak Portfolio</title>
      </Helmet>


        <div className={`App ${theme}`}>
          <header>
            <Navbar />
          </header>

          <main>
            <Header />
          </main>
		</div>
    </>
  )
}

export default Home
