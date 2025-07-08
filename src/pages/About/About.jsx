import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import header from "../../assets/about/hero.png";
import smallHeader from "../../assets/about/HeroSmall.png";
import AboutDoctor from "../../components/About/AboutDoctor";
import OurStory from "../../components/About/OurStory";
import OurVision from "../../components/About/OurVision";
import ParentsTrust from "../../components/About/ParentsTrust";
import Caring from "../../components/About/Caring";
import Contact from "../../components/About/Contact";
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  
  useEffect(() => { 
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location]);
  return (
    <div>
      <div data-aos="fade-down" className="mt-20 md:mt-24">
        <img
          src={smallHeader}
          alt=""
          className="block md:hidden w-full mx-auto"
        />
        <img src={header} alt="" className="hidden md:block w-full mx-auto" />
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
