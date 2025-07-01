import React from "react";
import Questions from "../../components/FAQ/Questions";
import ContactHero from "../../components/FAQ/ContactHero";
import bg from "../../assets/FAQ/background.png"

const Faq = () => {
  return (
    <div>
      <div>
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
