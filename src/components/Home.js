import React from 'react'

const Home = ({isAtTop}) => {
    return (
        <section id='home' className='py-3 py-md-5'>
            <div className='container py-3 py-md-5'>
                <div className='row py-3 py-md-5'>
                    <div className='col-sm-12 col-md-8 py-2 py-md-5 me-md-auto'>
                        <h3>
                            <small>Hello, I'm</small>
                            <br/>
                            Saurabh Kumar.
                        </h3>
                        <div>
                            <h6 className='pt-1 pt-md-3 mb-0'><span>|</span> FULL STACK WEB DEVELOPER <span>|</span></h6>
                            <h6>COMPETITIVE PROGRAMMER <span>|</span></h6>
                        </div>
                        <a href='#about' type="button" className="btn btn-lg btn-dark mt-5 me-md-3 px-4 px-md-4 py-3 py-md-3 fw-bold">KNOW MORE <i className="fas fa-caret-down"></i></a>
                    </div>
                </div>
            </div> 
        </section>
    )
}

export default Home
