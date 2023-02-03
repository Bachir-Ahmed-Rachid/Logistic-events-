import React from 'react'
import logo from '../img/Noir Blanc Simple Animaux et Animaux de Compagnie Logo.png'
const Nav = () => {
  return (
    <nav id="navigation" className="navbar navbar-expand-lg ">
    
    <a className="navbar-brand className 'm-3'" href="index.html"><img  style={{height:90,width:100}} src={logo}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
                      
    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
        <ul className="navbar-nav ">
            <li className="nav-item active">
                <a className="nav-link" href="#about">A propos
                    <span className="sr-only">(current)</span>
                </a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#service">Service</a>
            </li>
            
            <li className="nav-item">
                <a className="nav-link" href="#skills">Atout</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#stats">Experience</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#portfolio">Portfolio</a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
            </li>
        </ul>
    </div>

</nav>
  )
}

export default Nav