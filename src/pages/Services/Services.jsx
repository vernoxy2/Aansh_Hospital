import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import hero from "../../assets/services/hero.png";
import smallHero from "../../assets/services/background_small.png";
import Child from "../../components/Services/Child";
import OurService from "../../components/Home/OurService";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="">
      <div data-aos="fade-down" className="mt-20">
        <img
          src={smallHero}
          alt=""
          className="block md:hidden w-full mx-auto"
        />
        <img src={hero} alt="" className="hidden md:block w-full mx-auto" />
      </div>
      <div className="py-5">
        <Child />

        <OurService />
      </div>
    </div>
  );
};

export default Services;
