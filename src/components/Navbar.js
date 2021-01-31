import React from 'react'

const Navbar = ({isAtTop}) => {
    return (
        <section id='nav-section'>
            <nav className="navbar fixed-top navbar-expand-lg mt-2">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
                    <ul className={isAtTop ? 'navbar-nav' : 'light-nav navbar-nav'}>
                        <li className="nav-item">
                            <a className="nav-link fw-bold fs-5 text-light px-3 my-3 ms-4 me-2" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-bold fs-5 text-light px-3 my-3 me-2" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-bold fs-5 text-light px-3 my-3 me-2" href="#project">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-bold fs-5 text-light px-3 my-3 me-2" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-bold fs-5 text-light px-3 my-3 me-4" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </section>
    )
}

export default Navbar
