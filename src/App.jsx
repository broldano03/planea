import React from 'react'
import './App.css'
import NavBar from './components/navbar/Navbar'
import IntroSection from './components/sliders/IntroSection'
import Services from './components/Services'
import GridCards from './components/GridCards'
import Pricing from './components/Pricing'
import Cta1 from './components/Cta1'
import Footer from './components/Footer'
import Faqs2 from './components/Faqs'
import Testimonial from './components/Testimonial'
import Special from './components/Special'


function App() {

  return (
    <>
      <NavBar/>
      <IntroSection />
      <GridCards />
      <Cta1/>
      <Services />
      <Pricing />
      <Special />
      <Faqs2/>
      <Testimonial/>
      <Footer />
    </>
  )
}

export default App
