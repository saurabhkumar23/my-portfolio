import React from 'react'

const Navbar = ({isAtTop}) => {
    return (
        <>
        <section id='nav-section'>
        <ul className="navbar-ul">
            <li>
                <a href="#home">Home</a>
            </li>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#project">Projects</a>
            </li>
            <li>
                <a href="#services">Services</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </section>
        </>
    )
}

export default Navbar
