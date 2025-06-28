import React from "react";
import doctor from "../../assets/about/ashish.png";

const AboutDoctor = () => {
  return (
    <div className="w-full py-8">
      <h1 className="text-center text-primary text-2xl lg:text-6xl font-bold mb-8">
        About Our Docotor
      </h1>
      <div className="">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-8 xl:gap-60 2xl:gap-80 px-4 xl:px-40">
          {/* Doctor Image */}
          <div className="flex-shrink-0 flex justify-center w-full lg:w-[644px] lg:h-[680.55px] max-w-full mb-8 lg:mb-0">
            <img
              src={doctor}
              alt="Dr. Ashish Gamit"
              className="w-full h-auto max-w-[644px] max-h-[680.55px] object-contain"
              style={{ aspectRatio: "644/680.55" }}
            />
          </div>
          {/* Text */}
          <div className="flex-1 flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
            <h1 className="text-primary text-2xl lg:text-5xl font-bold mb-4">
              Dr. Ashish Gamit
            </h1>
            <p className="text-secondary font-semibold text-lg lg:text-3xl">
              Description about Doctor
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDoctor;
