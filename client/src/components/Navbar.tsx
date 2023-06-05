import React from "react";

const Navbar : React.FC = ()=>{
    return(
        <nav>
            <ul>
                <li className='tag'>I'm Buvak</li>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar

