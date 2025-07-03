import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image1 from "../../assets/facilitiesSectionImg1.png";
import image2 from "../../assets/facilitiesSectionImg2.jpg";
import image3 from "../../assets/facilitiesSectionImg3.png";

const programs = [
  {
    title: "Pediatric OPD",
    desc: "Compassionate care for children with expert pediatricians in a bright, cheerful, child-friendly environment.",
    image: image1,
  },
  {
    title: "Neonatal ICU (NICU)",
    desc: "Compassionate care for children with expert pediatricians in a bright, cheerful, child-friendly environment.",
    image: image2,
  },
  {
    title: "Vaccination Programs",
    desc: "Compassionate care for children with expert pediatricians in a bright, cheerful, child-friendly environment.",
    image: image3,
  },
];

const OurFacilities = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  });
  return (
    <div>
      <div data-aos="zoom-in">
        <h1 className="text-center text-2xl xl:text-6xl font-bold text-primary">
          Our Facilities
        </h1>
      </div>

      <section className="py-10  max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {programs.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-md group "
              data-aos="flip-right"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[450px] object-cover rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-primary via-primary/90 to-transparent p-4 text-white">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-base mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10" data-aos="fade-down-right">
          <button className="bg-primary text-white xl:px-4 px-2 py-1 xl:py-2 xl:text-2xl font-bold rounded-xl">
            View More
          </button>
        </div>
      </section>
    </div>
  );
};

export default OurFacilities;
