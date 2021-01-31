import React from 'react'

const Floats = ({isAtTop}) => {
    return (
        <>
            <div className='float-links'>
                <a className={isAtTop ? null : 'colored-link'} href="https://www.facebook.com/profile.php?id=100043503769012" target='_blank'><i className="fab fa-facebook"></i></a>
                <a className={isAtTop ? null : 'colored-link'} href="https://www.linkedin.com/in/saurabh2773" target='_blank'><i className="fab fa-linkedin"></i></a>
                <a className={isAtTop ? null : 'colored-link'} href="https://twitter.com/Saurabh2773" target='_blank'><i className="fab fa-twitter"></i></a>
                <a className={isAtTop ? null : 'colored-link'} href="https://github.com/saurabhkumar23" target='_blank'><i className="fab fa-github"></i></a>
                <a className={isAtTop ? null : 'colored-link'} href="https://www.instagram.com/saurabh.2773" target='_blank'><i className="fab fa-instagram"></i></a>
            </div>
            <a className={isAtTop ? null : 'active'} id='go-top' href='#'><i className='fas fa-chevron-up'></i></a>
        </>
    )
}

export default Floats
