import React from 'react'
import header from "../../assets/about/hero.png"
import AboutDoctor from '../../components/About/AboutDoctor'
import OurStory from '../../components/About/OurStory'
import OurVision from '../../components/About/OurVision'
import ParentsTrust from '../../components/About/ParentsTrust'
import Caring from '../../components/About/Caring'
import Contact from '../../components/About/Contact'

const About = () => {
  return (
    <div>
      <div>
        <img src={header} alt="" />
      </div>
      <div>
        <AboutDoctor />
      </div>
      <div>
        <OurStory />
      </div>
      <div>
        <OurVision />
      </div>
      <div>
        <ParentsTrust />
      </div>
      <div>
        <Caring />
      </div>
      <div>
        <Contact/>
      </div>
    </div>
  )
}

export default About
