import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";

// Components
import CareerHeader from "../../components/Career/CareerHeader";
import WhyWork from "../../components/Career/WhyWork";

const Career = () => {
  const location = useLocation();

  // Initialize AOS once
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Refresh AOS on route change
  useEffect(() => {
    AOS.refresh();
  }, [location]);

  return (
    <div className="overflow-hidden">
      {/* Career Header Section */}
      <div data-aos="fade-down" className="">
        <CareerHeader />
      </div>

      {/* Why Work With Us Section */}
      <section className="w-full py-10 lg:py-16" data-aos="fade-up">
        <WhyWork />
      </section>
    </div>
  );
};

export default Career;
