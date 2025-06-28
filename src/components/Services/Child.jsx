import React from "react";
import doctor from "../../assets/services/doctor.png"; // Use your actual image path

const Child = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden py-12 px-4 flex flex-col items-center min-h-[400px]">
      {/* Top Heading */}
      <h1 className="w-full text-center text-[#A82682] text-2xl md:text-3xl lg:text-4xl font-bold mb-12">
        Every Service, Centered<br className="hidden md:block" /> Around Your Child.
      </h1>
      {/* Main Content */}
      <div className="relative flex flex-col lg:flex-row items-center justify-between w-full container xl:gap-44 mx-auto ">
        {/* Left: Text content */}
        <div className="flex-1 z-10 flex flex-col items-start justify-center max-w-xl">
          {/* Magenta gradient bar */}
          <div className="w-4/5 h-8  bg-gradient-to-r from-[#e2d3e0] via-[#B05BA6] to-[#A82682] mb-8" />
          <h2 className="text-[#A82682] text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Tender Hands, Expert Care<br />for Newborns.
          </h2>
          <p className="text-[#A3A3A3] text-base md:text-lg font-medium mb-8">
            Indian pediatric doctor gently cradling a newborn in a modern neonatal unit, symbolizing expert, compassionate, and hygienic infant care.
          </p>
        </div>
        {/* Right: Doctor image */}
        <div className="flex-1 flex justify-center items-center w-full mt-12 lg:mt-0">
          <img
            src={doctor}
            alt="Child Specialist"
            className=" w-[320px] md:w-[400px] lg:w-[480px] xl:w-[540px] max-w-full"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Child;