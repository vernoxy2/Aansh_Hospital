import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import doctor from "../../assets/services/doctor.png"; // Use your actual image path

const Child = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  });
  return (
    <div className="relative w-full bg-white overflow-hidden py-12 px-2 flex flex-col items-center min-h-[400px]">
      {/* Top Heading */}
      <h1
        className="w-full text-center text-[#A82682] text-4xl md:text-5xl xl:text-6xl font-bold mb-12"
        data-aos="zoom-in"
      >
        Every Service, Centered
        <br className="hidden md:block" /> Around Your Child.
      </h1>
      {/* Main Content */}
      <div className="relative flex flex-col lg:flex-row items-center justify-between w-full container mx-auto ">
        {/* Left: Text content */}
        <div
          className="flex-1 z-10 flex flex-col items-start justify-center max-w-xl"
          data-aos="fade-right"
        >
          {/* Magenta gradient bar */}
          <div className="w-full h-8  bg-gradient-to-r from-[#e2d3e0] via-[#B05BA6] to-[#A82682] mb-8" />
          <h2 className="text-[#A82682] text-4xl md:text-5xl xl:text-6xl font-bold mb-4">
            Tender Hands, Expert Care for Newborns.
          </h2>
          <p className="text-secondary text-lg md:text-xl lg:text-2xl">
            Indian pediatric doctor gently cradling a newborn in a modern
            neonatal unit, symbolizing expert, compassionate, and hygienic
            infant care.
          </p>
        </div>
        {/* Right: Doctor image */}
        <div
          className="flex-1 flex justify-end items-center w-full mt-12 lg:mt-0"
          data-aos="fade-left"
        >
          <img
            src={doctor}
            alt="Child Specialist"
            className=" w-full lg:w-[520px] xl:w-[660px] max-w-full"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Child;
