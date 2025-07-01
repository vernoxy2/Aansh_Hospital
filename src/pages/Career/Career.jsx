import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import career from "../../assets/career/careerbg.png";
import WhyWork from "../../components/Career/WhyWork";

const Career = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div>
      <div data-aos="fade-down">
        <img src={career} alt="" className="w-full" />
      </div>
      <div className="py-10">
        <WhyWork />
      </div>
    </div>
  );
};

export default Career;
