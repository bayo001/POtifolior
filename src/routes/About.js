import React from 'react'

import Navbar from '../component/Navbar'
import Folter from '../component/Folter'
import Heroimage2 from '../component/Heroimage2'
import AboutContent from '../component/AboutContent'


const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimage2 heading="ABOUT." text="I am a friendly frontend developer"/>
      <AboutContent />
      <Folter />
    </div>
  )
}

export default About