import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Position from "./Position";

import img1 from "../../assets/career/Group1.png";
import img2 from "../../assets/career/Group2.png";
import img3 from "../../assets/career/Group3.png";
import img4 from "../../assets/career/Group4.png";
import img5 from "../../assets/career/Group5.png";

const features = [
  {
    title: "State-of-the-Art Facilities",
    desc: "Our modern, well-equipped facilities provide a safe and inspiring environment designed to support learning, growth, and development for everyone.",
    icon: img1,
  },
  {
    title: "Child-Centered Approach",
    desc: "Every decision we make puts children first. Our programs and practices are designed around their unique needs, interests, and developmental stages.",
    icon: img2,
  },
  {
    title: "Supportive Work Culture",
    desc: "Join a collaborative team that values your contributions, supports your well-being, and fosters an inclusive environment where everyone can succeed.",
    icon: img3,
  },
  {
    title: "Training & Development",
    desc: "Continuous learning opportunities, professional development programs, and skill-building workshops to help you grow in your career and expertise.",
    icon: img4,
  },
  {
    title: "Meaningful Impact",
    desc: "Make a real difference in children's lives while building a fulfilling career. See the direct impact of your work in the growth and happiness of those we serve.",
    icon: img5,
  },
];

const WhyWork = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  });

  return (
    <div className="overflow-x-hidden">
      <div className="py-10 mx-auto">
        <h2
          className="text-center text-3xl md:text-5xl font-bold text-primary mb-4 font-primary"
          data-aos="fade-up"
        >
          Why Work With Us
        </h2>

        <div
          className="w-full bg-gradient-to-r from-white via-[#cc8ba8] to-[#A82682] py-4 px-4"
          data-aos="fade-left"
        >
          <p className="text-center text-white text-sm sm:text-base md:text-lg font-semibold max-w-4xl mx-auto">
            We're committed to creating an environment where both our team and
            the children we serve can thrive and reach their full potential.
          </p>
        </div>

        <div className="max-w-7xl mx-auto py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4 transition duration-300 group cursor-pointer"
                data-aos="fade-down-right"
              >
                <div className="bg-primary rounded-full flex items-center justify-center w-14 h-14 shrink-0 overflow-hidden">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-14 h-14 object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 font-primary text-primary transition duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-secondary text-sm font-secondary transition duration-300">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div>
        <h2
          className="text-center text-3xl md:text-5xl font-bold text-primary mb-4 font-primary"
          data-aos="fade-up"
        >
          Open Positions
        </h2>

        <div
          className="w-full bg-gradient-to-r from-white via-[#cc8ba8] to-[#A82682] py-4 px-4"
          data-aos="fade-left"
        >
          <p className="text-center text-white text-sm sm:text-base md:text-lg font-semibold max-w-4xl mx-auto">
            We're committed to creating an environment where both our team and
            the children we serve can thrive and reach their full potential.
          </p>
        </div>
      </div>

      <Position />
    </div>
  );
};

export default WhyWork;
