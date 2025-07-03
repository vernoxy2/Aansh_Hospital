import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import career from "../../assets/career/careerbg.png";
import smallCareer from "../../assets/career/careerbg_small.png"
import WhyWork from "../../components/Career/WhyWork";
import { useLocation } from "react-router-dom";

const Career = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location]);
  return (
    <div>
      <div data-aos="fade-down" className="mt-20">
        <img src={smallCareer} alt="" className="block md:hidden w-full mx-auto"/>
        <img src={career} alt="" className="hidden md:block w-full mx-auto" />
      </div>
      <div className="w-full py-10">
        <WhyWork />
      </div>
    </div>
  );
};

export default Career;
