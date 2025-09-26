import Achievements from '@/Components/AboutUs/Achievements/Achievements';
import BannerSection from '@/Components/AboutUs/BannerSection/BannerSection';
import BottomBanner from '@/Components/AboutUs/BottomBanner/BottomBanner';
import ClientStories from '@/Components/AboutUs/ClientStories/ClientStories';
import IntroSection from '@/Components/AboutUs/IntroSection/IntroSection';
import ProcessSection from '@/Components/AboutUs/ProcessSection/ProcessSection';
import React from 'react'

const AboutUs = () => {
  return (
    <>
    <BannerSection />
    <IntroSection />
    <Achievements />
    <ClientStories />
    <ProcessSection />
    <BottomBanner />
    </>
  )
}

export default AboutUs;