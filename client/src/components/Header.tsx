import React from "react";
import { TypeAnimation } from 'react-type-animation'

import HumanVector from '../assets/human-vector.svg'
import {Button} from '../styled/index'

import {useTheme} from '../context/ThemeContext'

const Header : React.FC = () =>{

	const {theme} = useTheme()
	const darkControl = theme==='dark' ? '' : 'no-invert'
    return(
        <section id="header">
            <div className="header-space">
                <div className="header-text-box">
                    <h1>Hi, I am Burak</h1>
                    <h2 className={theme==='dark' ? 'no-invert' : ''}>
                        <span>I'm </span>
                        <TypeAnimation sequence={[
                        'Web Developer',
                        2000,
                        'Designer',
                        2000,
                        'Blogger',
                        2000 ]}
                        speed={50}
                        wrapper='span'
                        repeat={Infinity}
						/>
                    </h2>
                    <h3>I am a modern website and Javascript developer. At the same time; Blogger and Designer.</h3>
                    <Button lg="true">Hire Now</Button>
                </div>
                <div className={`header-image-box ${darkControl}`}>
                    <img src={HumanVector} alt="Developer Man" />
                </div>
            </div>
        </section>
    )
}

export default React.memo(Header)