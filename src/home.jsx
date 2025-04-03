
import HeroSection from './pages/LandingPage-components/hero-section'
import Cards from './pages/LandingPage-components/cards'
import Card2 from './pages/LandingPage-components/twocards'
import Services from './pages/LandingPage-components/services'
import Welcome from './components/welcom'
import { useState } from 'react'

const Home = () => {
  return (
    <>
    <div className=''>
      <HeroSection />
      <Cards />
      <Card2 />
      <Services />
    </div>
    </>
  )
} 
export default Home