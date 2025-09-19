import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image1 from "../../assets/facilitiesSectionImg1.png";
import image2 from "../../assets/facilitiesSectionImg2.jpg";
import image3 from "../../assets/facilitiesSectionImg3.png";
import { Link } from "react-router-dom";

const facilities = [
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
  }, []); // ✅ only run once on mount

  return (
    <section className=" bg-white">
      <div className="container space-y-12">
        {/* Title */}
        <div data-aos="zoom-in">
          <h2 className="text-center text-4xl md:text-5xl xl:text-6xl font-bold text-primary">
            Our Facilities
          </h2>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {facilities.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg group"
              data-aos="flip-right"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-cover rounded-2xl transform group-hover:scale-105 transition duration-500 ease-in-out"
              />
              <div className="absolute mr-20 inset-x-0 bottom-0 transition-opacity duration-500">
                <div className="backdrop-blur-sm rounded-tr-xl bg-primary/60 p-4 text-white">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-6" data-aos="fade-up">
          <Link
            to="/facilities"
            onClick={() => window.scrollTo(0, 0)}
            className="bg-primary text-white text-base xl:text-xl font-semibold px-6 py-3 rounded-lg hover:bg-fuchsia-700 transition-all"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurFacilities;
