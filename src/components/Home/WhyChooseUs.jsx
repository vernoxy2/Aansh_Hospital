import React from "react";
import image from "../../assets/line.png"
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
  return (
    <section>
      <div className="flex flex-col xl:flex-row items-center justify-center xl:gap-24 xl:pl-48 xl:py-8">
        <div className="">
          <h1 className="text-2xl xl:text-6xl font-bold text-primary text-center xl:text-left xl:-mt-6">
            Why Choose Us
          </h1>
        </div>
        <div className="hidden xl:block">
          <img src={image} alt="Why Choose Us" className="w-full" />
        </div>
      </div>

      <div>
        <div className="px-4 py-10 md:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-contain"
                  />
                </div>
                <div className="pt-10 px-4 pb-4 text-left">
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
