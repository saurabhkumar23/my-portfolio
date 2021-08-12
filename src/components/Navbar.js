import React from 'react'

const Navbar = ({isAtTop}) => {
    return (
        <>
        <section id='nav-section'>
                    <ul className={isAtTop ? 'nav justify-content-center fixed-top' : 'light-nav nav justify-content-center fixed-top'}>
                        <li className="nav-item">
                            <a className="nav-link fw-bold text-light my-md-3 ms-md-3 my-0 ms-0" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-bold text-light my-md-3 my-0" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-bold text-light my-md-3 my-0" href="#project">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-bold text-light my-md-3 my-0" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-bold text-light my-md-3 me-md-3 my-0 me-0" href="#contact">Contact</a>
                        </li>
                    </ul>
        </section>
        </>
    )
}

export default Navbar
