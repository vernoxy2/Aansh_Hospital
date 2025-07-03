import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import familyHeart from "../../assets/about/family.png";
import staff from "../../assets/about/staff.png";

const ParentsTrust = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  });
  return (
    <div  className="overflow-x-hidden">
      <div className="w-full flex flex-col lg:flex-row items-center justify-center py-12 px-4 lg:px-20">
        {/* Heart-shaped image */}
        <div
          className="flex-shrink-0 flex justify-center w-full lg:w-1/2 mb-8 lg:mb-0"
          data-aos="fade-right"
        >
          <img
            src={familyHeart}
            alt="Why parents trust us"
            className="w-full max-w-lg h-auto"
          />
        </div>
        {/* Text content */}
        <div
          className="flex-1 flex flex-col items-center lg:items-start justify-center text-center lg:text-left px-2"
          data-aos="fade-left"
        >
          <h2 className="text-[#A82682] text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why parents trust us
          </h2>
          <p className="text-[#A3A3A3] text-base md:text-lg font-medium max-w-xl">
            Parents trust us because we combine medical expertise with heartfelt
            compassion. Our child-friendly environment, experienced pediatric
            team, and commitment to safety ensure every child feels cared for
            and every parent feels confident. We prioritize open communication,
            personalized care, and long-term relationships built on trust and
            respect.
          </p>
        </div>
      </div>

      <div>
        <img src={staff} alt="" data-aos="zoom-in" />
        <div
          className="w-full bg-gradient-to-r from-white via-[#cc8ba8] to-[#A82682] py-4 px-4"
          data-aos="zoom-in-up"
        >
          <p className="text-center text-white text-sm sm:text-base md:text-lg font-semibold max-w-4xl mx-auto">
            Our diverse, skilled medical team delivers compassionate,
            patient-centered care with professionalism, integrity, and a
            commitment to health and wellness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParentsTrust;
