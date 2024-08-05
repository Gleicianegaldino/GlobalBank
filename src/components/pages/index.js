import React, {useState} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import HeroSection from '../HeroSection'
import InfoSection from '../InfoSection'
import { HomeObjOne, HomeObjThree, HomeObjTwo } from '../InfoSection/Data'
import Services from '../Service'
import Footer from '../Footer'
const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  };
  
  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} />
        <HeroSection />
        <InfoSection {...HomeObjOne} />
        <InfoSection {...HomeObjTwo} />
        <InfoSection {...HomeObjThree} />
        <Services />
        <Footer />
    </>
  )
}

export default Home;