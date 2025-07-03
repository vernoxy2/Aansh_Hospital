import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import hero from "../../assets/facilities/background.png";
import smallHero from "../../assets/facilities/background_small.png";
import OurHospital from "../../components/Facilities/OurHospital";
import { useLocation } from "react-router-dom";

const Facilities = () => {
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
        <img
          src={smallHero}
          alt=""
          className="block md:hidden w-full mx-auto"
        />
        <img src={hero} alt="" className="hidden md:block w-full mx-auto" />
      </div>
      <div className="w-full py-10">
        <OurHospital />
      </div>
    </div>
  );
};

export default Facilities;
