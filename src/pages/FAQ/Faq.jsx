import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Questions from "../../components/FAQ/Questions";
import ContactHero from "../../components/FAQ/ContactHero";
import bg from "../../assets/FAQ/background.png";

const Faq = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div>
      <div data-aos="fade-down">
        <img src={bg} alt="" />
      </div>
      <div className="w-full py-10">
        <Questions />
        <ContactHero />
      </div>
    </div>
  );
};

export default Faq;
