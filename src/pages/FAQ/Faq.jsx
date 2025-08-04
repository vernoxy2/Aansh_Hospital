import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";

// Components
import FaqHeader from "../../components/FAQ/FaqHeader";
import Questions from "../../components/FAQ/Questions";
import ContactHero from "../../components/FAQ/ContactHero";

const Faq = () => {
  const location = useLocation();

  // Initialize AOS on first mount
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Refresh animations on route change
  useEffect(() => {
    AOS.refresh();
  }, [location]);

  return (
    <div className="overflow-hidden">
      {/* Header Section */}
      <div data-aos="fade-down" className="">
        <FaqHeader />
      </div>

      {/* Content Section */}
      <section className="w-full py-10 space-y-12">
        <div data-aos="fade-up">
          <Questions />
        </div>
        <div data-aos="fade-up">
          <ContactHero />
        </div>
      </section>
    </div>
  );
};

export default Faq;
