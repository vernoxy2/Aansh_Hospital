import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image from "../../assets/line.png";
import image1 from "../../assets/section1.png";
import image2 from "../../assets/section2.png";
import image3 from "../../assets/section3.png";
import image4 from "../../assets/section4.png";
import LazyImage from "../LazyImage";

const features = [
  {
    title: "Child-friendly staff and ambiance",
    description:
      "Warm, welcoming environment with caring and child-friendly hospital staff.",
    image: image1,
    icon: "/icons/family-icon.svg",
  },
  {
    title: "24x7 emergency support",
    description:
      "Dedicated neonatal care with 24x7 emergency support for newborns.",
    image: image2,
    icon: "/icons/emergency-icon.svg",
  },
  {
    title: "Trusted by thousands of families",
    description:
      "Trusted pediatric care center serving countless happy families with compassion.",
    image: image3,
    icon: "/icons/trusted-icon.svg",
  },
  {
    title: "Cutting-edge pediatric care",
    description:
      "Advanced pediatric care ensuring your child's health and comfort always.",
    image: image4,
    icon: "/icons/pediatric-icon.svg",
  },
];

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []); // ✅ run only once on mount

  return (
    <section
      id="why-choose-us"
      className="py-10 md:py-16 space-y-10 mb-10 bg-white"
    >
      <div className="container pr-0 flex flex-col xl:flex-row items-center justify-between">
        {/* Heading */}
        <div data-aos="zoom-in" className="text-center xl:text-left">
          <h1 className="text-3xl sm:text-4xl xl:text-6xl font-bold text-primary">
            Why Choose Us?
          </h1>
        </div>

        {/* Decorative Line Image */}
        <div className="hidden xl:block " data-aos="flip-up">
          <LazyImage
            src={image}
            alt="Why Choose Us"
            className="w-full max-w-2xl 2xl:max-w-3xl"
          />
        </div>
      </div>

      {/* Features Grid */}
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md flex flex-col p-5 transform transition-transform duration-100  hover:shadow-2xl hover:-translate-y-4 hover:scale-105 cursor-pointer"
              data-aos="fade"
            >
              <div className="relative">
                <LazyImage
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-contain"
                />
              </div>
              <div className="text-left mt-4">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-secondary font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
