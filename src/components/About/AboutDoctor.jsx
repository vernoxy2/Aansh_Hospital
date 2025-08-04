import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import doctor from "../../assets/about/ashish.png";

const AboutDoctor = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  });
  return (
    <section className="py-8 md:py-16 space-y-4 md:space-y-10">
      <div className="container space-y-10">
        <h1 className="text-center text-4xl md:text-5xl xl:text-6xl font-bold text-primary">
          About Our Doctor
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
          <div className="" data-aos="fade-left">
            <img
              src={doctor}
              alt="About Doctor"
              className="sm:w-full w-[80%] mx-auto"
            />
          </div>
          <div className="space-y-3 lg:space-y-6 text-right" data-aos="fade-right">
            <h1 className="text-4xl md:text-4xl xl:text-6xl font-bold text-primary mb-4">
              Dr. Ashish Sharma
            </h1>
            <p className="text-2xl md:text-2xl xl:text-5xl font-bold text-secondary mb-4">
              Description about Doctor
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;
