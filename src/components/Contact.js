import React from 'react'

const Contact = () => {
    return (
        <section id='contact' className='py-5'>
            <div className='container py-5'>
                <h1 className='text-center main-heading py-4'  data-aos='flip-right'>Contact Us.</h1>
                <div className='row py-5'>
                    <div className='col-lg-10 mx-auto'>
                        <div className='row text-center'>
                            <div className='col-lg-4 box' data-aos='fade-right'>
                                <div className='circle'>
                                    <span><i className="fas fa-map-marker-alt"></i></span>
                                </div>
                                <h5 className='my-3'>LOCATION</h5>
                                <p>Guru Gobind Singh Indraprastha University <br/>Sector 16 C, Dwarka <br/>110066 India</p>
                            </div>
                            <div className='col-lg-4 box' data-aos='fade-up'>
                                <div className='circle'>
                                    <span><i className="far fa-envelope"></i></span>
                                </div>
                                <h5 className='my-3'>EMAIL</h5>
                                <p>sauravgautam884@gmail.com</p>
                            </div>
                            <div className='col-lg-4 box' data-aos='fade-left'>
                                <div className='circle'>
                                    <span><i className="fas fa-phone"></i></span>
                                </div>
                                <h5 className='my-3'>Phone</h5>
                                <p>Phone: (+91) 8851664564</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
