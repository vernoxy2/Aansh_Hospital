import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import nurse from "../../assets/about/nurse.png";

const OurStory = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  });
  return (
    <section id="our-story" className="py-8 md:py-16 space-y-4 md:space-y-10 scroll-mt-24">
      <div className="container space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-y-14">
          <div className="space-y-10">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-primary">
              Compassionate Beginnings, Lifelong Care.
            </h1>
            <p className="text-secondary  md:text-xl lg:text-2xl leading-snug">
              From a child’s first check-up to every milestone ahead, we provide
              gentle, expert care that grows with your family. Our clinic is
              built on trust, compassion, and a lifelong commitment to your
              child’s health and well-being.
            </p>
          </div>
          <div className="relative w-full h-auto">
            {/* Background Image */}
            <img
              src={nurse}
              alt="Nurse"
              className="w-full h-full object-cover"
            />

            {/* Overlay with Gradient and Text */}
            <div className="absolute h-9 md:h-16 xl:h-20 inset-0 bg-gradient-to-r from-[#A82682] via-[#A82682]/70 to-transparent flex items-center ">
              <h1 className="text-white  md:text-4xl xl:text-5xl font-semibold ps-5">
                Our Story / History
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
