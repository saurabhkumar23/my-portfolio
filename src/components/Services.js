import React from 'react'

const Services = () => {
    return (
        <section id='services' className='py-3 py-md-5 bg-light'>
            <div className='container py-3 py-md-5'>
                <h1 className='first-heading text-center pb-1 pb-md-3' data-aos='zoom-in'>SERVICES</h1>
                <h1 className='second-heading text-center pb-1 pb-md-5' data-aos='zoom-in'>What Can I Do For You?</h1>                
                <div className='row justify-content-evenly pb-3 services-container' data-aos='zoom-in'>
                    <div className='col-sm-12 col-md-4 my-3'>
                        <div className='card text-center py-3' data-aos='zoom-in'>
                            <div className='card-body py-2 py-md-4 px-3 px-md-5'>
                                <div className='circle'>
                                    <span><i className="fas fa-desktop"></i></span>
                                </div>
                                <h4 className='fw-bold my-3'>Web Development</h4>
                                <p>I'm very passionate about web development. I completed
                                my Summer training in Full Stack Web Development as a
                                result now i'm able to create beautiful websites using 
                                Bootstrap, MaterializeCss and handle Backend stuff's with
                                NodeJs, Php, MongoDb etc.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-4 my-3'>
                        <div className='card text-center py-3' data-aos='zoom-in'>
                            <div className='card-body py-2 py-md-4 px-3 px-md-5'>
                                <div className='circle'>
                                    <span><i className="fas fa-mobile-alt"></i></span>
                                </div>
                                <h4 className='fw-bold my-3'>App Development</h4>
                                <p>I love to develop mobile applications. as I'm a ReactJs lover,
                                I usually make these apps using React Native. I'm planning to get
                                my hands on Flutter soon. I have worked on many android
                                application projects in the past.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
