import React from 'react'
import { SiGithub, SiLinkedin } from "react-icons/si";

const Footer=()=>{



    return (
        <footer>
            <p>Website by Cesar De Casas</p>
            <p>More info on Poke API <a href='https://pokeapi.co/docs/v2#info'>here</a></p>
            <div>
                <a href='https://github.com/cesardecasas'><SiGithub className='icon' color='black' height={'20%'}/> </a>
                <a href='https://www.linkedin.com/in/cesardecasas/'><SiLinkedin className='icon' color='black'/></a> 
            </div>
            <br/>
        </footer>
    )
}

export default Footer