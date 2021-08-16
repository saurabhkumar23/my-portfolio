import React,{useEffect,useState} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './styles/style.css'
import Floats from './components/Floats'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {

    const [isAtTop,setIsAtTop] = useState(true)

    useEffect(() => {
        Aos.init({duration:2000})
    },[])

    window.addEventListener('scroll',() => {
        if(window.scrollY>=300){
            setIsAtTop(false)
        }
        else{
            setIsAtTop(true)
        }
    })

    return (
        <>
            {/* <Floats isAtTop={isAtTop}/> */}
            <Navbar isAtTop={isAtTop}/> 
            <Home isAtTop={isAtTop}/>
            <About/>
            <Project/>
            <Services/>
            <Contact/>
            <Footer/>
        </>
        
    )
}

export default App
