import Carousel from './components/Carousel'
import { Hero } from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Founders from './components/Founders'
import Weeks from './components/Weeks'
import './index.css'

function App() {
  

  return (
    <>
         <Navbar/>
        <Hero/>
        <Carousel/>
        <About/>
        <Founders/>
        <Weeks/>
    </>
  )
}

export default App
