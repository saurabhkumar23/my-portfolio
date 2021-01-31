import React from 'react'

const Project = () => {
    return (
        <section id='project' className='py-5'>
            <div className='container py-5'>
                <h1 className='text-center mt-2 mb-5' data-aos='flip-down'>PROJECTS</h1>
                <div className='row py-5 justify-content-evenly'>
                    <div className='col-lg-3 mb-3' data-aos='fade-right'>
                        <a href="https://github.com/saurabhkumar23" target='_blank' rel="noreferrer"> 
                            <div className='card'>
                                <img src='/images/umix.png' className='img-fluid' alt='umix-project'/>
                                <div className='px-3 pt-3 pb-2'>
                                    <h4 className='fw-bold mt-2'>UMIX</h4>
                                    <h5 className='text-muted'>November 2020</h5>
                                </div>
                                <p className='px-3'>A social networking application providing features similar to instagram.</p>
                                <div className='project-stack px-3'>
                                    <button type="button">ReactJs</button>
                                    <button type="button">Mongoose</button>
                                    <button type="button">Express</button>
                                    <button type="button">NodeJs</button>
                                    <button type="button">MaterializeCss</button>
                                </div>
                                <div className='read-more mt-4'>
                                    <a href="https://github.com/saurabhkumar23" target='_blank' rel="noreferrer" type="button" className="btn btn-secondary fw-bold">Read More</a>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='col-lg-3 mb-3' data-aos='fade-up'>
                        <a href="https://github.com/saurabhkumar23" target='_blank' rel="noreferrer"> 
                            <div className='card'>
                                <img src='/images/chitchat.jpg' className='img-fluid' alt='umix-project'/>
                                <div className='px-3 pt-3 pb-2'>
                                    <h4 className='fw-bold mt-2'>CHIT - CHAT</h4>
                                    <h5 className='text-muted'>August 2020</h5>
                                </div>
                                <p className='px-3'>A small scale chatting web project where more than one users chat at a time.</p>
                                <div className='project-stack px-3'>
                                    <button type="button">ReactJs</button>
                                    <button type="button">Mongoose</button>
                                    <button type="button">Express</button>
                                    <button type="button">NodeJs</button>
                                    <button type="button">MaterializeCss</button>
                                </div>
                                <div className='read-more mt-4'>
                                    <a href="https://github.com/saurabhkumar23" target='_blank' rel="noreferrer" type="button" className="btn btn-secondary fw-bold">Read More</a>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='col-lg-3 mb-3' data-aos='fade-left'>
                        <a href="https://github.com/saurabhkumar23" target='_blank' rel="noreferrer"> 
                            <div className='card'>
                                <img src='/images/thehub.jpg' className='img-fluid' alt='umix-project'/>
                                <div className='px-3 pt-3 pb-2'>
                                    <h4 className='fw-bold mt-2'>THE HUB</h4>
                                    <h5 className='text-muted'>January 2021</h5>
                                </div>
                                <p className='px-3'>A full stack web project for college students where they can access their study notes.</p>
                                <div className='project-stack px-3'>
                                    <button type="button">ReactJs</button>
                                    <button type="button">Mongoose</button>
                                    <button type="button">Express</button>
                                    <button type="button">NodeJs</button>
                                    <button type="button">MaterializeCss</button>
                                </div>
                                <div className='read-more mt-4'>
                                    <a href="https://github.com/saurabhkumar23" target='_blank' rel="noreferrer" type="button" className="btn btn-secondary fw-bold">Read More</a>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project
