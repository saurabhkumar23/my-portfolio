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
                                </div>
                                <div className='card-container col-sm-12 col-md-3 my-3'>
                                    <div data-aos='fade-up'>
                                        <a href="https://github.com/saurabhkumar23/winux" target='_blank' rel="noreferrer"> 
                                            <div className='card'>
                                                <img src='/images/winux.png' className='img-fluid' alt='umix-project'/>
                                                <div className='px-3 pt-3 pb-2'>
                                                    <h4 className='fw-bold mt-2'>WINUX</h4>
                                                    <h5 className='text-muted'>January 2021</h5>
                                                </div>
                                                <p className='px-3'>A NodeJs script which allows us to run bash like commands on windows operating system.</p>
                                                <div className='project-stack px-3'>
                                                    <button type="button">NodeJs</button>
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
                        <div class="carousel-item">
                            {/* second 3 projects */}
                            <div className='row py-3 py-md-5 justify-content-evenly project-container'>
                                <div className='card-container col-sm-12 col-md-3 my-3'>
                                    <div data-aos='fade-up'>
                                        <a href="https://github.com/saurabhkumar23/cleanup" target='_blank' rel="noreferrer"> 
                                            <div className='card'>
                                                <img src='/images/cleanup.jpg' className='img-fluid' alt='cleanup-project'/>
                                                <div className='px-3 pt-3 pb-2'>
                                                    <h4 className='fw-bold mt-2'>CLEANUP</h4>
                                                    <h5 className='text-muted'>January 2021</h5>
                                                </div>
                                                <p className='px-3'>A simple command line utility that organises files in a directory into subdirectories based on the file extensions.</p>
                                                <div className='project-stack px-3'>
                                                    <button type="button">NodeJs</button>
                                                    <button type="button">JavaScript</button>
                                                </div>
                                                <div className='read-more mt-4'>
                                                    <a href="https://github.com/saurabhkumar23/cleanup" target='_blank' rel="noreferrer" type="button" className="btn btn-secondary fw-bold">Read More</a>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className='card-container col-sm-12 col-md-3 my-3'>
                                    <div data-aos='fade-up'>
                                        <a href="https://github.com/saurabhkumar23/coding-companion" target='_blank' rel="noreferrer"> 
                                            <div className='card'>
                                                <img src='/images/code-companion.jpg' className='img-fluid' alt='code-companion-project'/>
                                                <div className='px-3 pt-3 pb-2'>
                                                    <h4 className='fw-bold mt-2'>CODE COMPANION</h4>
                                                    <h5 className='text-muted'>March 2021</h5>
                                                </div>
                                                <p className='px-3'>It download test cases of coding problems from the platform and adds template according to your coding language.</p>
                                                <div className='project-stack px-3'>
                                                    <button type="button">NodeJs</button>
                                                    <button type="button">JavaScript</button>
                                                    <button type="button">Puppeteer</button>
                                                    <button type="button">Automation</button>
                                                </div>
                                                <div className='read-more mt-4'>
                                                    <a href="https://github.com/saurabhkumar23/coding-companion" target='_blank' rel="noreferrer" type="button" className="btn btn-secondary fw-bold">Read More</a>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className='card-container col-sm-12 col-md-3 my-3'>
                                    <div data-aos='fade-up'>
                                        <a href="https://github.com/saurabhkumar23/spotify-playlist-manager" target='_blank' rel="noreferrer"> 
                                            <div className='card'>
                                                <img src='/images/spotify.png' className='img-fluid' alt='spotify-project'/>
                                                <div className='px-3 pt-3 pb-2'>
                                                    <h4 className='fw-bold mt-2'>SPOTIFY PLAYLIST MANAGER</h4>
                                                    <h5 className='text-muted'>April 2021</h5>
                                                </div>
                                                <p className='px-3'>Automation script in nodejs which can manage your spotify playlist data.</p>
                                                <div className='project-stack px-3'>
                                                    <button type="button">JavaScript</button>
                                                    <button type="button">Puppeteer</button>
                                                    <button type="button">NodeJs</button>
                                                    <button type="button">Automation</button>
                                                </div>
                                                <div className='read-more mt-4'>
                                                    <a href="https://github.com/saurabhkumar23/spotify-playlist-manager" target='_blank' rel="noreferrer" type="button" className="btn btn-secondary fw-bold">Read More</a>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            {/* third 3 projects */}
                            <div className='row py-3 py-md-5 justify-content-evenly project-container'>
                                <div className='card-container col-sm-12 col-md-3 my-3'>
                                    <div data-aos='fade-up'>
                                        <a href="https://github.com/saurabhkumar23/youtube-playlist-duration" target='_blank' rel="noreferrer"> 
                                            <div className='card'>
                                                <img src='/images/yt-playlist.png' className='img-fluid' alt='yt-playlist-project'/>
                                                <div className='px-3 pt-3 pb-2'>
                                                    <h4 className='fw-bold mt-2'>YOUTUBE PLAYLIST DURATION</h4>
                                                    <h5 className='text-muted'>May 2021</h5>
                                                </div>
                                                <p className='px-3'>Automation script which give details about the content of a youtube playlist.</p>
                                                <div className='project-stack px-3'>
                                                    <button type="button">NodeJs</button>
                                                    <button type="button">JavaScript</button>
                                                    <button type="button">Puppeteer</button>
                                                    <button type="button">Automation</button>
                                                </div>
                                                <div className='read-more mt-4'>
                                                    <a href="https://github.com/saurabhkumar23/youtube-playlist-duration" target='_blank' rel="noreferrer" type="button" className="btn btn-secondary fw-bold">Read More</a>
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
                    </div>
                    <div className='card-container col-sm-12 col-md-3 my-3'>
                        <div data-aos='fade-up'>
                            <a href="https://github.com/saurabhkumar23/winux" target='_blank' rel="noreferrer"> 
                                <div className='card'>
                                    <img src='/images/winux.png' className='img-fluid' alt='umix-project'/>
                                    <div className='px-3 pt-3 pb-2'>
                                        <h4 className='fw-bold mt-2'>WINUX</h4>
                                        <h5 className='text-muted'>January 2021</h5>
                                    </div>
                                    <p className='px-3'>A NodeJs script which allows us to run bash like commands on windows operating system.</p>
                                    <div className='project-stack px-3'>
                                        <button type="button">NodeJs</button>
                                        <button type="button">JavaScript</button>
                                    </div>
                                    <div className='read-more mt-4'>
                                        <a href="https://github.com/saurabhkumar23/winux" target='_blank' rel="noreferrer" type="button" className="btn btn-secondary fw-bold">Read More</a>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='card-container col-sm-12 col-md-3 my-3'>
                        <div data-aos='fade-up'>
                            <a href="https://github.com/saurabhkumar23/cleanup" target='_blank' rel="noreferrer"> 
                                <div className='card'>
                                    <img src='/images/cleanup.jpg' className='img-fluid' alt='cleanup-project'/>
                                    <div className='px-3 pt-3 pb-2'>
                                        <h4 className='fw-bold mt-2'>CLEANUP</h4>
                                        <h5 className='text-muted'>January 2021</h5>
                                    </div>
                                    <p className='px-3'>A simple command line utility that organises files in a directory into subdirectories based on the file extensions.</p>
                                    <div className='project-stack px-3'>
                                        <button type="button">NodeJs</button>
                                        <button type="button">JavaScript</button>
                                    </div>
                                    <div className='read-more mt-4'>
                                        <a href="https://github.com/saurabhkumar23/cleanup" target='_blank' rel="noreferrer" type="button" className="btn btn-secondary fw-bold">Read More</a>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='card-container col-sm-12 col-md-3 my-3'>
                        <div data-aos='fade-up'>
                            <a href="https://github.com/saurabhkumar23/coding-companion" target='_blank' rel="noreferrer"> 
                                <div className='card'>
                                    <img src='/images/code-companion.jpg' className='img-fluid' alt='code-companion-project'/>
                                    <div className='px-3 pt-3 pb-2'>
                                        <h4 className='fw-bold mt-2'>CODE COMPANION</h4>
                                        <h5 className='text-muted'>March 2021</h5>
                                    </div>
                                    <p className='px-3'>It download test cases of coding problems from the platform and adds template according to your coding language.</p>
                                    <div className='project-stack px-3'>
                                        <button type="button">NodeJs</button>
                                        <button type="button">JavaScript</button>
                                        <button type="button">Puppeteer</button>
                                        <button type="button">Automation</button>
                                    </div>
                                    <div className='read-more mt-4'>
                                        <a href="https://github.com/saurabhkumar23/coding-companion" target='_blank' rel="noreferrer" type="button" className="btn btn-secondary fw-bold">Read More</a>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='card-container col-sm-12 col-md-3 my-3'>
                        <div data-aos='fade-up'>
                            <a href="https://github.com/saurabhkumar23/spotify-playlist-manager" target='_blank' rel="noreferrer"> 
                                <div className='card'>
                                    <img src='/images/spotify.png' className='img-fluid' alt='spotify-project'/>
                                    <div className='px-3 pt-3 pb-2'>
                                        <h4 className='fw-bold mt-2'>SPOTIFY PLAYLIST MANAGER</h4>
                                        <h5 className='text-muted'>April 2021</h5>
                                    </div>
                                    <p className='px-3'>Automation script in nodejs which can manage your spotify playlist data.</p>
                                    <div className='project-stack px-3'>
                                        <button type="button">JavaScript</button>
                                        <button type="button">Puppeteer</button>
                                        <button type="button">NodeJs</button>
                                        <button type="button">Automation</button>
                                    </div>
                                    <div className='read-more mt-4'>
                                        <a href="https://github.com/saurabhkumar23/spotify-playlist-manager" target='_blank' rel="noreferrer" type="button" className="btn btn-secondary fw-bold">Read More</a>
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
