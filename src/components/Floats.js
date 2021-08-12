import React from 'react'

const Floats = ({isAtTop}) => {
    return (
        <>
            <div className="floats-container">
                <div className={isAtTop ? 'dontShow float-links' : 'float-links'}>
                    <a className={isAtTop ? null : 'makeColorDark'} href="https://www.facebook.com/profile.php?id=100043503769012" target='_blank' rel="noreferrer"><i className="fab fa-facebook"></i></a>
                    <a className={isAtTop ? null : 'makeColorDark'} href="https://www.linkedin.com/in/saurabh2773" target='_blank' rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a className={isAtTop ? null : 'makeColorDark'} href="https://twitter.com/Saurabh2773" target='_blank' rel="noreferrer"><i className="fab fa-twitter"></i></a>
                    <a className={isAtTop ? null : 'makeColorDark'} href="https://github.com/saurabhkumar23" target='_blank' rel="noreferrer"><i className="fab fa-github"></i></a>
                    <a className={isAtTop ? null : 'makeColorDark'} href="https://www.instagram.com/saurabh.2773" target='_blank' rel="noreferrer"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            <a className={isAtTop ? null : 'active'} id='go-top' href='#home'><i className='fas fa-chevron-up'></i></a>
        </>
    )
}

export default Floats
