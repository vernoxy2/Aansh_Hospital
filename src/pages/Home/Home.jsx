import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import headerHomeImg from "../../assets/headerHomeImg.png";
import smallHomeImg from "../../assets/HeaderSmall.png"
import OurService from "../../components/Home/OurService";
import OurFacilities from "../../components/Home/OurFacilities";
import WhyChooseUs from "../../components/Home/WhyChooseUs";
import CuttingEdge from "../../components/Home/CuttingEdge";
import { useLocation } from "react-router-dom";
import WeAre from "../../components/Home/WeAre";

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
      <div data-aos="fade-down" className="mt-20 md:mt-28 ">
        <img src={smallHomeImg} alt="" className="block md:hidden" />
        <img src={headerHomeImg} alt="" className="hidden md:block" />
      </div>
      <div className="py-5 ">      
        <div data-aos="fade-up">
          <WeAre />
        </div>
        <div data-aos="fade-up">
          <OurService />
        </div>
        <div className="mt-5 xl:mt-20" data-aos="zoom-in-up">
          <OurFacilities />
        </div>
        <div className="mt-5 xl:mt-20" data-aos="fade-up">
          <WhyChooseUs />
        </div>
        <div className="mt-5 xl:mt-20" data-aos="fade-up">
          <CuttingEdge/>
        </div>
      </div>
    </div>
  );
};

export default Home;
