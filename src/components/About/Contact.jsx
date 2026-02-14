import React from "react";
import telephone from "../../assets/about/telephone.png";
import { IoMdCall } from "react-icons/io";
import LazyImage from "../LazyImage";

const Contact = () => {
  return (
    <div
      id="contact"
      className="relative w-full bg-white overflow-hidden py-8 md:py-16 px-4 flex items-center justify-center min-h-[400px] scroll-mt-24"
    >
      {/* Main content and image */}
      <div className="relative flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl mx-auto">
        {/* Left: Text content */}
        <div
          className="flex-1 z-10 flex flex-col items-start justify-center max-w-xl"
          data-aos="fade-right"
        >
          {/* Magenta bar and heading */}
          <div className="flex items-center mb-4">
            {/* <span className="inline-block h-8 w-20 bg-[#A82682] rounded-l-xl mr-3"></span> */}
            <h2 className="text-primary text-3xl md:text-5xl font-bold">
              Contact us
            </h2>
          </div>
          {/* Description */}
          <p className="text-secondary text-base md:text-lg font-medium mb-8">
            At Aansh Children’s Hospital, we want to ensure it's a path filled
            with personalized care and genuine support. Should you have
            questions or need assistance, know that we're more than just a
            healthcare provider – we're your dedicated companions.
          </p>
          {/* Button */}
          <a
            href="tel:9737971953"
            className="flex items-center justify-center gap-3 bg-[#A82682] text-white text-lg md:text-xl font-bold rounded-xl px-10 py-3 shadow-md hover:bg-[#8d1e6d] transition"
          >
            <IoMdCall className="text-3xl" /> Call Us
          </a>
        </div>
        {/* Right: Telephone image */}
        <div
          className="flex-1 flex justify-end items-center w-full mt-12 lg:mt-0"
          data-aos="fade-left"
        >
          <LazyImage
            src={telephone}
            alt="Telephone"
            className="w-[350px] md:w-[420px] lg:w-[520px] xl:w-[600px] max-w-full opacity-70"
            style={{
              filter: "drop-shadow(0 8px 32px rgba(168,38,130,0.10)) blur(1px)",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
      {/* Optional: fade effect on the right for the image */}
      <div className="hidden lg:block absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-white to-transparent pointer-events-none z-20"></div>
    </div>
  );
};

export default Contact;
