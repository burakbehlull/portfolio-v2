import React, {createContext, useContext, useState, useEffect, ReactNode} from 'react'

interface IValueProps{
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const ThemeContext = createContext<IValueProps>({} as IValueProps);

export const ThemeProvider : React.FC<{ children: ReactNode }> = ({ children }) => {

    const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || 'light')
    const values : IValueProps= {
        theme, setTheme
    }

    useEffect(()=>{
        localStorage.setItem('theme', theme)
    }, [theme])

    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
}

export const useTheme = ()=> useContext<IValueProps>(ThemeContext)

