import React from 'react'

const Contact = () => {
    return (
        
    <section id='contact'>
        <div className="heading" data-aos='fade-up'>Contact Me.</div>
        <div className="card-container">
            <div className="card card-1" data-aos='fade-up'>
                <div className="icon">
                    <div className="icon-container">
                        <i className="fas fa-map-marker-alt"></i>
                    </div>
                </div>
                <div className="text">LOCATION</div>
                <div className="sub-text">
                    Guru Gobind Singh Indraprastha University <br/>Sector 16 C, Dwarka <br/>110066 India
                </div>
            </div>
            <div className="card card-2" data-aos='fade-up'>
                <div className="icon">
                    <div className="icon-container">
                        <i className="far fa-envelope"></i>
                    </div>
                </div>
                <div className="text">EMAIL</div>
                <div className="sub-text">
                    sauravgautam884@gmail.com
                </div>
            </div>
            <div className="card card-3" data-aos='fade-up'>
                <div className="icon">
                    <div className="icon-container">
                        <i className="fas fa-phone"></i>
                    </div>
                </div>
                <div className="text">PHONE</div>
                <div className="sub-text">
                    (+91) 8851664564
                </div>
            </div>
        </div>
    </section>
    )
}

export default Contact
