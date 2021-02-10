import React from 'react'

const Contact = () => {
    return (
        <section id='contact' className='py-3 py-md-5'>
            <div className='container py-3 py-md-5'>
                <h1 className='text-center main-heading py-2 py-md-4'  data-aos='fade-up'>Contact Us.</h1>
                <div className='row py-3 py-md-5'>
                    <div className='col-lg-10 mx-auto'>
                        <div className='row text-center contact-container'>
                            <div className='col-sm-12 col-md-4 box my-3 my-md-0' data-aos='fade-up'>
                                <div className='circle'>
                                    <span><i className="fas fa-map-marker-alt"></i></span>
                                </div>
                                <h5 className='mt-4 mb-2 my-md-3'>LOCATION</h5>
                                <p>Guru Gobind Singh Indraprastha University <br/>Sector 16 C, Dwarka <br/>110066 India</p>
                            </div>
                            <div className='col-sm-12 col-md-4 box my-3 my-md-0' data-aos='fade-up'>
                                <div className='circle'>
                                    <span><i className="far fa-envelope"></i></span>
                                </div>
                                <h5 className='mt-4 mb-2 my-md-3'>EMAIL</h5>
                                <p>sauravgautam884@gmail.com</p>
                            </div>
                            <div className='col-sm-12 col-md-4 box my-3 my-md-0' data-aos='fade-up'>
                                <div className='circle'>
                                    <span><i className="fas fa-phone"></i></span>
                                </div>
                                <h5 className='mt-4 mb-2 my-md-3'>Phone</h5>
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
