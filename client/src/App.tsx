import React from 'react'

import {BrowserRouter } from 'react-router-dom'
import Routes from './router/routes'

import { ThemeProvider } from './context/ThemeContext'

const App : React.FC = () => {

    return(
        <BrowserRouter>
			<ThemeProvider>
				<Routes />
			</ThemeProvider>
        </BrowserRouter>
    )
}

export default App