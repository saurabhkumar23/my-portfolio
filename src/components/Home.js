import React,{useEffect} from 'react'
import Typewriter from 'typewriter-effect/dist/core';
import Particles from 'react-particles-js';

const Home = ({isAtTop}) => {

    useEffect(() => {
        new Typewriter('#typewriter', {
            strings: ['JavaScript Developer.', 'C++ Programmer.'],
            autoStart: true,
            loop: true
        })          
    },[])

    return (
        <>
        <Particles
        params={{
            particles: {
                number: {
                    value: 40,
                    density: {
                        enable: true,
                        value_area: 900
                    }
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 6,
                        color: '#eae2e2'
                    }
                }
            }
        }}
        />
            <section id='home'>
                <div className="texts">
                    <div className="heading-1">Hello, I'm</div>
                    <div className="heading-2">Saurabh Kumar.</div>
                    <div className="heading-3"><span id="typewriter"></span></div>
                </div>
                <div className="links">
                    <ul>
                        <li><a href="https://www.facebook.com/profile.php?id=100043503769012" target='_blank' rel="noreferrer"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/saurabh2773" target='_blank' rel="noreferrer"><i className="fab fa-linkedin"></i></a></li>
                        <li><a href="https://twitter.com/Saurabh2773" target='_blank' rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="https://github.com/saurabhkumar23" target='_blank' rel="noreferrer"><i className="fab fa-github"></i></a></li>
                        <li><a href="https://www.instagram.com/saurabh.2773" target='_blank' rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </section>
        </>
        
        
    )
}

export default Home
