import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useLocation } from "react-router-dom";

// Components
import WeAre from "../../components/Home/WeAre";
import OurService from "../../components/Home/OurService";
import OurFacilities from "../../components/Home/OurFacilities";
import WhyChooseUs from "../../components/Home/WhyChooseUs";
import CuttingEdge from "../../components/Home/CuttingEdge";
import HomeHeader from "../../components/Home/HomeHeader";
import MeetDoct from "../../components/Home/MeetDoct";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location]);

  return (
    <div className="overflow-hidden">
      <section data-aos="fade-down" className="md:space-y-4 xl:space-y-12">
        {/* Hero Banner */}
        <HomeHeader />

        {/* Sections with AOS animations */}
        <div data-aos="fade-up">
          <WeAre />
        </div>

        <div data-aos="fade-up">
          <MeetDoct />
        </div>

        <div data-aos="fade-up">
          <OurService />
        </div>

        <div data-aos="zoom-in-up">
          <OurFacilities />
        </div>

        <div data-aos="fade-up">
          <WhyChooseUs />
        </div>

        <div data-aos="fade-up">
          {/* <CuttingEdge /> */}
        </div>
      </section>
    </div>
  );
};

export default Home;
