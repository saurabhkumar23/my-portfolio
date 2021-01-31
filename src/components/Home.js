import React from 'react'

const Home = ({isAtTop}) => {
    return (
        <section id='home' className='py-5'>
            <div className='container py-5'>
                <div className='row py-5'>
                    <div className='col-lg-8 py-5 me-auto'>
                        <h3>
                            <small>Hello, I'm</small>
                            <br/>
                            Saurabh Kumar.
                        </h3>
                        <h6 className='pt-3'><span>|</span> FULL STACK WEB DEVELOPER <span>|</span> COMPETITIVE PROGRAMMER <span>|</span></h6>
                        <a href='#about' type="button" className="btn btn-lg btn-dark mt-5 me-3 px-4 py-3 fw-bold">Know more <i className="fas fa-caret-down"></i></a>
                    </div>
                </div>
            </div> 
        </section>
    )
}

export default Home
