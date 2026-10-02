import React from 'react'

import Hero from '../component/Hero'
import HomeAbout from '../component/HomeAbout'
import DigitalMarketingServices from '../component/DigitalMarketingServices'
import ReviewsPlatform from '../component/ReviewPlateform'
import TrustedCompanies from '../component/TrustedCompnies'
import Performance from '../component/Performance'
import Testimonials from '../component/Testimonial'
import BrandGrowth from '../component/BrandGrowth'

import FAQ from '../component/Faq'
import FloatingButtons from '../component/FloatingButtons'


const Home = () => {
  return (
   <>
    <Hero/>
    <HomeAbout/>
    <ReviewsPlatform/>
    <DigitalMarketingServices/>
    <TrustedCompanies/>
    <Performance/>
    <Testimonials/>
    <BrandGrowth/>
    <FAQ/>
    <FloatingButtons/>
   </>
  )
}

export default Home