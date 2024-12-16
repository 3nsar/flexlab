import Carousel from './components/Carousel'
import { Hero } from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Founders from './components/Founders'
import Weeks from './components/Weeks'
import Timeline from './components/Timeline'
import './index.css'
import Techstack from './components/Techstack'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'

function App() {
  

  return (
    <>
        <Navbar/>
        <Hero/>
        <Carousel/>
        <About/>
        <Founders/>
        <Weeks/>
        <Timeline/>
        <Techstack/>
        <Services />
        <Testimonials/>
        <Faq/>
    </>
  )
}

export default App
