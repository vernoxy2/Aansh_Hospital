import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import visionImg from "../../assets/about/ourVision.png";
import missionImg from "../../assets/about/ourMission.png";

const visionData = [
  {
    id: 1,
    title: "Our Vision",
    description: (
      <>
        Our Vision is to provide compassionate, expert pediatric care from
        infancy through adolescence. Our goal is to support every child’s health
        and happiness at every stage. With trust and warmth, we build lifelong
        relationships with families.
      </>
    ),
    image: visionImg,
  },
  {
    id: 2,
    title: "Our Mission",
    description: (
      <>
        “Deliver compassionate pediatric care, nurturing children’s growth,
        health, and family trust.” This preserves the essence—compassion,
        quality, growth, trust—while trimming the length. Modeled after strong,
        family‑focused pediatric missions
      </>
    ),
    image: missionImg,
  },
];

const OurVision = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  });
  return (
    <div className="relative py-8 md:py-16 space-y-4 md:space-y-10 overflow-x-hidden">
      {/* Purple horizontal band */}
      <div className="absolute top-1/2 left-0 w-full h-72 bg-gradient-to-l from-[#A82682] to-transparent -translate-y-1/2 z-0"></div>
      <div className="relative z-10 container mx-auto ">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-5">
          {visionData.map((item) => (
            <div
              key={item.id}
              className="flex-1 bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center max-w-xl mx-auto"
              data-aos="fade-right"
            >
              <h2 className="text-[#A82682] text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
                {item.title}
              </h2>
              <div className="w-full flex justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-xl w-full p-4 object-contain"
                />
              </div>
              <div className="pt-8 pb-4 px-2">
                <p className="text-[#A3A3A3] text-base md:text-lg lg:text-2xl text-center font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurVision;
