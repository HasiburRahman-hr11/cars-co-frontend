import BannerSection from '@/Components/Homepage/BannerSection/BannerSection'
import LatestAdditions from '@/Components/Homepage/LatestAdditions/LatestAdditions'
import OurShowrooms from '@/Components/Homepage/OurShowrooms/OurShowrooms'
import ProcessSection from '@/Components/Homepage/ProcessSection/ProcessSection'
import SellYourCar from '@/Components/Homepage/SellYourCar/SellYourCar'
import VideoTestimonials from '@/Components/Homepage/VideoTestimonials/VideoTestimonials'
import WhyUs from '@/Components/Homepage/WhyUs/WhyUs'
import React from 'react'

const page = () => {
  return (
    <>
      <BannerSection />
      {/* <WhyUs /> */}
      <LatestAdditions />
      <VideoTestimonials />
      <ProcessSection />
      <SellYourCar />
      <OurShowrooms />
    </>
  )
}

export default page