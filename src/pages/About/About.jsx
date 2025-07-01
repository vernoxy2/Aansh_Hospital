import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import header from "../../assets/about/hero.png";
import AboutDoctor from "../../components/About/AboutDoctor";
import OurStory from "../../components/About/OurStory";
import OurVision from "../../components/About/OurVision";
import ParentsTrust from "../../components/About/ParentsTrust";
import Caring from "../../components/About/Caring";
import Contact from "../../components/About/Contact";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div>
      <div data-aos="fade-down">
        <img src={header} alt="" />
      </div>
      <div className="py-5">
        <AboutDoctor />

        <OurStory />

        <OurVision />

        <ParentsTrust />

        <Caring />

        <Contact />
      </div>
    </div>
  );
};

export default About;
