import React from 'react'

const Project = () => {
    return (
        <>
        <section id='project' className='py-3 py-md-5'>
            <div className='container py-3 py-md-5'>
                <h1 className='text-center mt-2 mb-2 mb-md-5' data-aos='fade-up'>PROJECTS</h1>
                {/* carausal items */}
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            {/* first 3 projects */}
                            <div className='row py-3 py-md-5 justify-content-evenly project-container'>
                                <div className='card-container my-3 col-sm-12 col-md-3'>
                                    <div data-aos='fade-up'>
                                        <a href="https://umix.herokuapp.com/" target='_blank' rel="noreferrer"> 
                                            <div className='card'>
                                                <img src='/images/umix.png' className='img-fluid' alt='umix-project'/>
                                                <div className='px-3 pt-3 pb-2'>
                                                    <h4 className='fw-bold mt-1 mt-md-2'>UMIX</h4>
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
                                                <div className='read-more mt-3 mt-md-4'>
                                                    <a href="https://github.com/saurabhkumar23/umix" target='_blank' rel="noreferrer" type="button" className="btn btn-secondary fw-bold">Read More</a>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className='card-container col-sm-12 col-md-3 my-3'>
                                    <div data-aos='fade-up'>
                                        <a href="https://laughing-borg-d700ef.netlify.app/" target='_blank' rel="noreferrer"> 
                                            <div className='card'>
                                                <img src='/images/chitchat.jpg' className='img-fluid' alt='chit-chat-project'/>
                                                <div className='px-3 pt-3 pb-2'>
                                                    <h4 className='fw-bold mt-2'>CHIT - CHAT</h4>
                                                    <h5 className='text-muted'>August 2020</h5>
                                                </div>
                                                <p className='px-3'>A small scale chatting web project where more than one users chat at a time.</p>
                                                <div className='project-stack px-3'>
                                                    <button type="button">ReactJs</button>
                                                    <button type="button">SocketIO</button>
                                                    <button type="button">Express</button>
                                                    <button type="button">NodeJs</button>
                                                    <button type="button">Css</button>
                                                </div>
                                                <div className='read-more mt-4'>
                                                    <a href="https://github.com/saurabhkumar23/Chit-Chat" target='_blank' rel="noreferrer" type="button" className="btn btn-secondary fw-bold">Read More</a>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className='card-container col-sm-12 col-md-3 my-3'>
                                    <div data-aos='fade-up'>
                                        <a href="https://saurabhkumar23.github.io/Awesome-Bots/" target='_blank' rel="noreferrer"> 
                                            <div className='card'>
                                                <img src='/images/automation.png' className='img-fluid' alt='awesome-bots'/>
                                                <div className='px-3 pt-3 pb-2'>
                                                    <h4 className='fw-bold mt-2'>AWESOME BOTS</h4>
                                                    <h5 className='text-muted'>March 2021</h5>
                                                </div>
                                                <p className='px-3'>Automation scripts which helps to speed up common tasks to lift productivity. visit github to read
                                                more about those tools.</p>
                                                <div className='project-stack px-3'>
                                                    <button type="button">NodeJs</button>
                                                    <button type="button">html</button>
                                                    <button type="button">Css</button>
                                                    <button type="button">Puppeteer</button>
                                                    <button type="button">Automation</button>
                                                </div>
                                                <div className='read-more mt-4'>
                                                    <a href="https://github.com/saurabhkumar23/Awesome-Bots" target='_blank' rel="noreferrer" type="button" className="btn btn-secondary fw-bold">Read More</a>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            {/* second 3 projects */}
                            <div className='row py-3 py-md-5 justify-content-evenly project-container'>
                                <div className='card-container col-sm-12 col-md-3 my-3'>
                                    <div data-aos='fade-up'>
                                        <a href="https://github.com/saurabhkumar23/winux" target='_blank' rel="noreferrer"> 
                                            <div className='card'>
                                                <img src='/images/winux.png' className='img-fluid' alt='winux-project'/>
                                                <div className='px-3 pt-3 pb-2'>
                                                    <h4 className='fw-bold mt-2'>WINUX</h4>
                                                    <h5 className='text-muted'>January 2021</h5>
                                                </div>
                                                <p className='px-3'>A NodeJs script which allows us to run bash like commands on windows operating system.</p>
                                                <div className='project-stack px-3'>
                                                    <button type="button">NodeJs</button>
                                                    <button type="button">Bash</button>
                                                    <button type="button">JavaScript</button>
                                                </div>
                                                <div className='read-more mt-4'>
                                                    <a href="https://github.com/saurabhkumar23/winux" target='_blank' rel="noreferrer" type="button" className="btn btn-secondary fw-bold">Read More</a>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <div class="carousel-icon-container">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </div>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <div class="carousel-icon-container">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </div>
                    </button>
                </div>
            </div>
        </section>

        {/* projects on mobile */}
        <section id='project-mobile' className='py-3 py-md-5'>
            <div className='container py-3 py-md-5'>
                <h1 className='text-center mt-2 mb-2 mb-md-5' data-aos='fade-up'>PROJECTS</h1>
                <div className='row py-3 py-md-5 justify-content-evenly project-container'>
                    <div className='card-container my-3 col-sm-12 col-md-3'>
                        <div data-aos='fade-up'>
                            <a href="https://umix.herokuapp.com/" target='_blank' rel="noreferrer"> 
                                <div className='card'>
                                    <img src='/images/umix.png' className='img-fluid' alt='umix-project'/>
                                    <div className='px-3 pt-3 pb-2'>
                                        <h4 className='fw-bold mt-1 mt-md-2'>UMIX</h4>
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
                                    <div className='read-more mt-3 mt-md-4'>
                                        <a href="https://github.com/saurabhkumar23/umix" target='_blank' rel="noreferrer" type="button" className="btn btn-secondary fw-bold">Read More</a>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='card-container col-sm-12 col-md-3 my-3'>
                        <div data-aos='fade-up'>
                            <a href="https://laughing-borg-d700ef.netlify.app/" target='_blank' rel="noreferrer"> 
                                <div className='card'>
                                    <img src='/images/chitchat.jpg' className='img-fluid' alt='chit-chat-project'/>
                                    <div className='px-3 pt-3 pb-2'>
                                        <h4 className='fw-bold mt-2'>CHIT - CHAT</h4>
                                        <h5 className='text-muted'>August 2020</h5>
                                    </div>
                                    <p className='px-3'>A small scale chatting web project where more than one users chat at a time.</p>
                                    <div className='project-stack px-3'>
                                        <button type="button">ReactJs</button>
                                        <button type="button">SocketIO</button>
                                        <button type="button">Express</button>
                                        <button type="button">NodeJs</button>
                                        <button type="button">Css</button>
                                    </div>
                                    <div className='read-more mt-4'>
                                        <a href="https://github.com/saurabhkumar23/Chit-Chat" target='_blank' rel="noreferrer" type="button" className="btn btn-secondary fw-bold">Read More</a>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='card-container col-sm-12 col-md-3 my-3'>
                        <div data-aos='fade-up'>
                            <a href="https://saurabhkumar23.github.io/Awesome-Bots/" target='_blank' rel="noreferrer"> 
                                <div className='card'>
                                    <img src='/images/automation.png' className='img-fluid' alt='awesome-bots'/>
                                    <div className='px-3 pt-3 pb-2'>
                                        <h4 className='fw-bold mt-2'>AWESOME BOTS</h4>
                                        <h5 className='text-muted'>March 2021</h5>
                                    </div>
                                    <p className='px-3'>Automation scripts which helps to speed up common tasks to lift productivity. visit github to read
                                                more about those tools.</p>
                                    <div className='project-stack px-3'>
                                        <button type="button">NodeJs</button>
                                        <button type="button">html</button>
                                        <button type="button">Css</button>
                                        <button type="button">Puppeteer</button>
                                        <button type="button">Automation</button>
                                    </div>
                                    <div className='read-more mt-4'>
                                        <a href="https://github.com/saurabhkumar23/Awesome-Bots" target='_blank' rel="noreferrer" type="button" className="btn btn-secondary fw-bold">Read More</a>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='card-container col-sm-12 col-md-3 my-3'>
                        <div data-aos='fade-up'>
                            <a href="https://github.com/saurabhkumar23/winux" target='_blank' rel="noreferrer"> 
                                <div className='card'>
                                    <img src='/images/winux.png' className='img-fluid' alt='winux-project'/>
                                    <div className='px-3 pt-3 pb-2'>
                                        <h4 className='fw-bold mt-2'>WINUX</h4>
                                        <h5 className='text-muted'>January 2021</h5>
                                    </div>
                                    <p className='px-3'>A NodeJs script which allows us to run bash like commands on windows operating system.</p>
                                    <div className='project-stack px-3'>
                                        <button type="button">NodeJs</button>
                                        <button type="button">Bash</button>
                                        <button type="button">JavaScript</button>
                                    </div>
                                    <div className='read-more mt-4'>
                                        <a href="https://github.com/saurabhkumar23/winux" target='_blank' rel="noreferrer" type="button" className="btn btn-secondary fw-bold">Read More</a>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        </>
    )
}

export default Project
