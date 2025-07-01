import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import hero from "../../assets/facilities/background.png";
import OurHospital from "../../components/Facilities/OurHospital";

const Facilities = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div>
      <div data-aos="fade-down">
        <img src={hero} alt="" className="w-full" />
      </div>
      <div className="py-10">
        <OurHospital />
      </div>
    </div>
  );
};

export default Facilities;
