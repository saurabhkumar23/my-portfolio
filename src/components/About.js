import React from 'react'

const About = () => {
    return (
        <section id='about'>
        <div className="flex-container">
            <div className="image" data-aos='fade-right'></div>
            <div className="right-info"  data-aos='fade-up'>
                <div className="heading">About Me.</div>
                <div className="cap"><span>|</span> JAVA PROGRAMMER  <span>|</span> JAVASCRIPT DEVELOPER </div>
                <div className="text">
                    Hi, I'm <span className='fw-bold'>Saurabh Kumar </span> 
                    pursuing my engineering in the field of information 
                    technology from University school of information, communication, and technology, 
                    i have experiences in different programming languages like 
                    Java,Javascript, ReacJS. I am a frontend web developer. 
                    I create beautiful & functional web applications usually with ReactJS.
                </div>
                <div className="skill-heading">SKILLS</div>
                <div className="skill-container">
                    <div className="skill">
                        <div className="text-flex">
                            <div>Java</div>
                            <div style={{'fontWeight':'bold'}}>90%</div>
                        </div>
                        <div className="scale">
                            <div className="bg"></div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="text-flex">
                            <div>Data Structures</div>
                            <div style={{'fontWeight':'bold'}}>85%</div>
                        </div>
                        <div className="scale">
                            <div className="bg"></div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="text-flex">
                            <div>JavaScript</div>
                            <div style={{'fontWeight':'bold'}}>90%</div>
                        </div>
                        <div className="scale">
                            <div className="bg"></div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="text-flex">
                            <div>ReactJS</div>
                            <div style={{'fontWeight':'bold'}}>80%</div>
                        </div>
                        <div className="scale">
                            <div className="bg"></div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="text-flex">
                            <div>DBMS</div>
                            <div style={{'fontWeight':'bold'}} >87%</div>
                        </div>
                        <div className="scale">
                            <div className="bg"></div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="text-flex">
                            <div>OOPS</div>
                            <div style={{'fontWeight':'bold'}}>85%</div>
                        </div>
                        <div className="scale">
                            <div className="bg"></div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="text-flex">
                            <div>NODEJS</div>
                            <div style={{'fontWeight':'bold'}}>75%</div>
                        </div>
                        <div className="scale">
                            <div className="bg"></div>
                        </div>
                    </div>
                </div>
                <div className="btns">
                    <a className="cv" href="https://drive.google.com/file/d/1wrcOKfaYrqCJnyV2XqCRvnB3JIhr3seq/view?usp=sharing" target='_blank'>
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
