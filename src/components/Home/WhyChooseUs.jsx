import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image from "../../assets/line.png";
import image1 from "../../assets/section1.png";
import image2 from "../../assets/section2.png";
import image3 from "../../assets/section3.png";
import image4 from "../../assets/section4.png";

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
  });
  return (
    <section>
      <div className="container flex flex-col xl:flex-row items-center justify-between py-8">
        {/* Heading Section */}
        <div data-aos="zoom-in" className="text-center xl:text-left">
          <h1 className="text-3xl sm:text-4xl xl:text-6xl font-bold text-primary">
            Why Choose Us
          </h1>
        </div>

        {/* Image Section (hidden on small screens) */}
        <div className="hidden xl:block" data-aos="flip-up">
          <img src={image} alt="Why Choose Us" className="w-full max-w-md" />
        </div>
      </div>
      <div className="container"> 

        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col  p-5"
                data-aos="flip-left"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-contain"
                  />
                </div>
                <div className=" text-left">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-base font-semibold text-secondary">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
