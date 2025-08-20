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

  // Scroll to in-page anchor when hash is present
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace(/^#/, "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <div className="overflow-hidden">
      <section data-aos="fade-down" className="md:space-y-4 xl:space-y-12">
        <AboutHeader />
        <div data-aos="fade-up">
          <AboutDoctor />
        </div>

        <div data-aos="fade-up">
          <OurStory />
        </div>

        {/* Anchor targets for Mission/Vision with header offset */}
        <div id="mission" className="h-0 scroll-mt-24" />
        <div id="vision" className="h-0 scroll-mt-24" />
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
