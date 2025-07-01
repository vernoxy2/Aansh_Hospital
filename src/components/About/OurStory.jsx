import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import nurse from "../../assets/about/nurse.png";

const OurStory = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="w-full py-8">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-8 xl:gap-40 2xl:gap-80 px-4 xl:px-40">
          {/* Text first for left side on large screens */}
          <div className="flex-1 flex flex-col items-center lg:items-start justify-center text-center lg:text-left" data-aos="fade-down">
            <h1 className="text-primary text-2xl lg:text-4xl font-bold" >
              Compassionate Beginnings, Lifelong Care.
            </h1>
            <p className="text-secondary font-semibold text-lg lg:text-xl">
              From a child’s first check-up to every milestone ahead, we provide
              gentle, expert care that grows with your family. Our clinic is
              built on trust, compassion, and a lifelong commitment to your
              child’s health and well-being.
            </p>
          </div>
          {/* Image second for right side on large screens */}
          <div className="flex-shrink-0 flex justify-center w-full lg:w-[824px] lg:h-[524px] max-w-full mb-8 lg:mb-0" data-aos="fade-left">
            <img
              src={nurse}
              alt="nurse"
              className="w-full h-auto max-w-[824px] max-h-[524px] object-contain"
              style={{ aspectRatio: "824/524" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
