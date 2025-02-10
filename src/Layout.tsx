
import About from './components/About'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Projects from './components/Projects'

function Layout() {
    return (
        <>
            <Hero/>
            <About/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </>
    )
}

export default Layout