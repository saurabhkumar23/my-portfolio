import React from 'react'

const About = () => {
    return (
        <section id='about'>
        <div className="flex-container">
            <div className="image" data-aos='fade-right'></div>
            <div className="right-info"  data-aos='fade-up'>
                <div className="heading">About Me.</div>
                <div className="cap"><span>|</span> JAVASCRIPT DEVELOPER <span>|</span> C++ PROGRAMMER</div>
                <div className="text">
                    Hi, I'm <span className='fw-bold'>Saurabh Kumar </span> 
                    pursuing my engineering in the field of information 
                    technology from University school of information, communication, and technology, 
                    i have experiences in different programming languages like 
                    C, C++,Javascript, I am a full stack web developer. 
                    I create beautiful & functional web applications usually with nodejs.
                </div>
                <div className="skill-heading">SKILLS</div>
                <div className="skill-container">
                    <div className="skill">
                        <div className="text-flex">
                            <div>JavaScript</div>
                            <div>90%</div>
                        </div>
                        <div className="scale">
                            <div className="bg"></div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="text-flex">
                            <div>ReactJs</div>
                            <div>85%</div>
                        </div>
                        <div className="scale">
                            <div className="bg"></div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="text-flex">
                            <div>Css</div>
                            <div>90%</div>
                        </div>
                        <div className="scale">
                            <div className="bg"></div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="text-flex">
                            <div>NodeJs</div>
                            <div>80%</div>
                        </div>
                        <div className="scale">
                            <div className="bg"></div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="text-flex">
                            <div>C++</div>
                            <div>87%</div>
                        </div>
                        <div className="scale">
                            <div className="bg"></div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="text-flex">
                            <div>Html</div>
                            <div>85%</div>
                        </div>
                        <div className="scale">
                            <div className="bg"></div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="text-flex">
                            <div>MongoDb</div>
                            <div>75%</div>
                        </div>
                        <div className="scale">
                            <div className="bg"></div>
                        </div>
                    </div>
                </div>
                <div className="btns">
                    <a className="cv" href="https://drive.google.com/file/d/1ou0RppL1YmgEEi8DDTiP27hBQpsfrwPW/view?usp=sharing">
                        Download C.V.
                    </a>
                    <a className="contact" href="#contact">Contact Me.</a>
                </div>
            </div>
        </div>
    </section>
    )
}

export default About
