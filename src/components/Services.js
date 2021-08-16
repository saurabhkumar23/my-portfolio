import React from 'react'

const Services = () => {
    return (
        
    <section id='services' data-aos='zoom-in'>
    <div className="heading">SERVICES</div>
    <div className="sub-heading">What Can I Do For You?</div>
    <div className="card-container">
        <div className="card card-1" data-aos='zoom-in'>
            <div className="icon">
                <div className="icon-container">
                    <i className="fas fa-desktop"></i>
                </div>
            </div>
            <div className="text">Web Development</div>
            <div className="sub-text">
                        I'm very passionate about web development. I completed
                        my Summer training in Full Stack Web Development as a
                        result now i'm able to create beautiful websites using 
                        Bootstrap, MaterializeCss and handle Backend stuff's with
                        NodeJs, Php, MongoDb etc.
            </div>
        </div>
        <div className="card card-2" data-aos='zoom-in'>
            <div className="icon">
                <div className="icon-container">
                    <i className="fas fa-mobile-alt"></i>
                </div>
            </div>
            <div className="text">App Development</div>
            <div className="sub-text">
                I love to develop mobile applications. as I'm a ReactJs lover,
                I usually make these apps using React Native. I'm planning to get
                my hands on Flutter soon. I have worked on many android
                application projects in the past.
            </div>
        </div>
    </div>
</section>
    )
}

export default Services
