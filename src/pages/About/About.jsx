import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import AboutHeader from "../../components/About/AboutHeader";
import AboutDoctor from "../../components/About/AboutDoctor";
import OurStory from "../../components/About/OurStory";
import OurVision from "../../components/About/OurVision";
import ParentsTrust from "../../components/About/ParentsTrust";
import Caring from "../../components/About/Caring";
import Contact from "../../components/About/Contact";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location]);

  return (
    <div className="overflow-hidden">
      <section className="sm:py-5 space-y-12 xl:space-y-20">
        <AboutHeader />
        <div data-aos="fade-up">
          <AboutDoctor />
        </div>

        <div data-aos="fade-up">
          <OurStory />
        </div>

        <div data-aos="fade-up">
          <OurVision />
        </div>

        <div data-aos="fade-up">
          <ParentsTrust />
        </div>

        <div data-aos="fade-up">
          <Caring />
        </div>

        <div data-aos="fade-up">
          <Contact />
        </div>
      </section>
    </div>
  );
};

export default About;
