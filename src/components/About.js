import React from 'react'

const About = () => {
    return (
        <section id='about' className='py-3 py-md-5 bg-light'>
            <div className='container py-3 py-md-5'>
                <div className='row'>
                    <div className='col-sm-12 col-md-5 pic-container'>
                        <img src='/images/table.jpg' data-aos='fade-right' className='img-fluid' alt='central'/>
                    </div>

                    <div className='col-sm-12 col-md-7 pt-md-3 about-me' data-aos='fade-up'>
                        <h1>About Me.</h1>
                        <div className='profession'>
                            <p><span>|</span> JAVASCRIPT DEVELOPER <span>|</span></p>
                            <p>C++ PROGRAMMER <span>|</span></p>
                        </div>
                        <p className='myself px-1 px-md-0 py-4 fs-5'>Hi, I'm <span className='fw-bold'>Saurabh Kumar </span> 
                        pursuing my engineering in the field of information 
                        technology from University school of information, communication, and technology, 
                        i have experiences in different programming languages like 
                        C, C++,Javascript, I am a full stack web developer. 
                        I create beautiful & functional web applications usually with nodejs.</p>
                        <h2 className='fs-5 mb-3 my-md-4'>SKILLS</h2>
                        <div className='progress-container'>
                            <div className='progress'>
                                <div className='pro-value pro-value1'>
                                    <p>C++ <span className='text-white float-end'>92%</span></p>
                                </div>
                            </div>
                            <div className='progress my-3'>
                                <div className='pro-value pro-value2'>
                                    <p>HTML / CSS <span className='text-white float-end'>95%</span></p>
                                </div>
                            </div>
                            <div className='progress'>
                                <div className='pro-value pro-value3'>
                                    <p>JAVASCRIPT <span className='text-white float-end'>74%</span></p>
                                </div>
                            </div>
                            <div className='progress my-3'>
                                <div className='pro-value pro-value4'>
                                    <p>REACTJS <span className='text-white float-end'>85%</span></p>
                                </div>
                            </div>
                            <div className='progress'>
                                <div className='pro-value pro-value5'>
                                    <p>NODEJS <span className='text-white float-end'>89%</span></p>
                                </div>
                            </div>
                        </div>
                        <div className='about-links mt-4 mt-md-5'>
                            <a class="btn btn-dark me-2 me-md-4 bt1" href="https://drive.google.com/file/d/1RdepDrFbMqY-SAF5l1nyyzGdMHgo2VYZ/view?usp=sharing" target='_blank' rel="noreferrer" role="button">DOWNLOAD CV</a>
                            <a class="btn btn-light border border-dark px-4 bt2" href="#contact" role="button">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
