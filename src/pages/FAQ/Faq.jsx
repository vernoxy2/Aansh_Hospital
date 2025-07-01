import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Questions from "../../components/FAQ/Questions";
import ContactHero from "../../components/FAQ/ContactHero";
import bg from "../../assets/FAQ/background.png";
import smallBg from "../../assets/FAQ/background_small.png"

const Faq = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div>
      <div data-aos="fade-down" className="mt-20">
        <img src={smallBg} alt="" className="block md:hidden w-full mx-auto"/>
        <img src={bg} alt="" className="hidden md:block w-full mx-auto"/>
      </div>
      <div className="w-full py-10">
        <Questions />
        <ContactHero />
      </div>
    </div>
  );
};

export default Faq;
