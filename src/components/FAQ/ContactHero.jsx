import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import bg from "../../assets/FAQ/Mask_group(1).png";
import bg from "../../assets/FAQ/Mask_group.png";
import { Link } from "react-router-dom";
import { IoMdCall } from "react-icons/io";

const ContactHero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  });
  return (
    <div
      className="container px-0 flex flex-col lg:flex-row items-center justify-between  py-10"
      //min-h-[320px]
      data-aos="fade-up"
    >
      {/* Left Content */}
      <div className="container flex-1 flex flex-col justify-center ">
        <div className="flex items-center mb-4">
          <span className="inline-block w-36 h-7 bg-primary  rounded-r-lg mr-[-5px]"></span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary ml-2">
            Contact us
          </h2>
        </div>
        <p className="text-secondary mb-8">
          At Aansh Children’s Hospital, we want to ensure it’s a path filled
          with personalized care and genuine support. Should you have questions
          or need assistance, know that we’re more than just a healthcare
          provider – we’re your dedicated companions.
        </p>
        <a
          href="tel:9737971953"
          className="flex items-center justify-center max-w-[200px] gap-3 bg-[#A82682] text-white text-lg md:text-xl font-bold rounded-xl px-10 py-3 shadow-md hover:bg-[#8d1e6d] transition"
        >
          <IoMdCall className="text-3xl" /> Call Us
        </a>
      </div>
      {/* Right Image */}
      <div className="flex-1 flex justify-right items-right mt-8 md:mt-0">
        <img
          src={bg}
          alt="Contact Phone"
          className=" h-full object-contain hidden lg:block"
          //   style={{ minWidth: 220 }}
        />
      </div>
    </div>
  );
};

export default ContactHero;
