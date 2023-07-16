import React, { useEffect, useState } from "react";

import Dark from '../assets/dark.svg'
import Light from '../assets/light.svg'



const Navbar : React.FC = ()=>{

    const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || 'light')

    useEffect(()=>{
        localStorage.setItem('theme', theme)
    }, [theme])

    return(
        <nav>
            <ul>
                <li className='tag'>I'm Buvak</li>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>

                <li onClick={()=> setTheme(theme==='light'?'dark' : 'light')} className="themeMode">
                    {theme==='light' ? <img src={Light} /> : <img src={Dark} />}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

