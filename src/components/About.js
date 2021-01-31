import React from 'react'

const About = () => {
    return (
        <section id='about' className='py-5 bg-light'>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-lg-5'>
                        <img src='/images/table.jpg' data-aos='fade-right' className='img-fluid' alt='central'/>
                    </div>
                    <div className='col-lg-7 pt-3' data-aos='fade-up'>
                        <h1>About Me.</h1>
                        <p className='skills'><span>|</span> FULL STACK WEB DEVELOPER <span>|</span> COMPETITIVE PROGRAMMER <span>|</span></p>
                        <p className='py-3 fs-5'>Hi, I'm <span className='fw-bold'>Saurabh Kumar </span> 
                        pursuing my engineering in the field of information 
                        technology from University school of information, communication, and technology, 
                        i have experiences in different programming languages like 
                        C, C++,Javascript, I am a full stack web developer. 
                        I create beautiful & functional web applications usually with nodejs.</p>
                        <h2 className='fs-5 my-4'>SKILLS</h2>
                        <div>
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
                        <div className='about-links mt-5'>
                            <a class="btn btn-dark me-4 bt1" href="https://drive.google.com/file/d/1lEeGztDVqD3-Al9aP050OBzTkq9zkrCB/view?usp=sharing" target='_blank' role="button">DOWNLOAD CV</a>
                            <a class="btn btn-light border border-dark px-4 bt2" href="#contact" role="button">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
