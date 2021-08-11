import React,{useEffect} from 'react'
import Typewriter from 'typewriter-effect/dist/core';

const Home = ({isAtTop}) => {

    useEffect(() => {
        new Typewriter('#typewriter', {
            strings: ['Javascript Developer.', 'C++ Programmer.'],
            autoStart: true,
            loop: true
        })          
    },[])

    return (
        <section id='home' className='py-3 py-md-5'>
            <div className='container py-3 py-md-5'>
                <div className='row py-3 py-md-5'>
                    <div className='col-sm-12 col-md-8 py-2 py-md-5 me-md-auto'>
                        <h3>
                            <small>Hello, I'm</small>
                            <br/>
                            Saurabh Kumar.
                            <br/>
                            <small className="profession">And I'm a <span id="typewriter"></span></small>
                        </h3>
                        <a href='#about' type="button" className="btn btn-lg mt-5 me-md-3 px-4 px-md-4 py-3 py-md-3 fw-bold">KNOW MORE <i className="fas fa-caret-down"></i></a>
                    </div>
                </div>
            </div> 
        </section>
    )
}

export default Home
