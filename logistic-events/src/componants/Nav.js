import React from 'react'

const Nav = () => {
  return (
    <nav id="navigation" className="navbar navbar-expand-lg ">
    <a className="navbar-brand " href="index.html">Logistics</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
                      
    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
        <ul className="navbar-nav ">
            <li className="nav-item active">
                <a className="nav-link" href="#about">About
                    <span className="sr-only">(current)</span>
                </a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#stats">Stats</a>
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