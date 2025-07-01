import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Position from "./Position";
// import img1 from "../../assets/career/Group1.png";
// import img2 from "../../assets/career/Group2.png";
// import img3 from "../../assets/career/Group3.png";
// import img4 from "../../assets/career/Group4.png";
// import img5 from "../../assets/career/Group5.png"

const features = [
  {
    title: "State-of-the-Art Facilities",
    desc: "Our modern, well-equipped facilities provide a safe and inspiring environment designed to support learning, growth, and development for everyone.",
    icon: (
      <svg
        className="w-10 h-10 text-white"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <circle cx="10" cy="10" r="10" />
        <path d="M6 14V8h8v6" stroke="#fff" strokeWidth="1.5" fill="none" />
        <rect x="8" y="10" width="4" height="4" fill="#fff" />
      </svg>
    ),
  },
  {
    title: "Child-Centered Approach",
    desc: "Every decision we make puts children first. Our programs and practices are designed around their unique needs, interests, and developmental stages.",
    icon: (
      <svg
        className="w-10 h-10 text-white"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <circle cx="10" cy="7" r="4" />
        <rect x="4" y="13" width="12" height="5" rx="2.5" fill="#fff" />
      </svg>
    ),
  },
  {
    title: "Supportive Work Culture",
    desc: "Join a collaborative team that values your contributions, supports your well-being, and fosters an inclusive environment where everyone can succeed.",
    icon: (
      <svg
        className="w-10 h-10 text-white"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <circle cx="6" cy="8" r="2.5" />
        <circle cx="14" cy="8" r="2.5" />
        <rect x="3" y="13" width="14" height="5" rx="2.5" fill="#fff" />
      </svg>
    ),
  },
  {
    title: "Training & Development",
    desc: "Continuous learning opportunities, professional development programs, and skill-building workshops to help you grow in your career and expertise.",
    icon: (
      <svg
        className="w-10 h-10 text-white"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M2 10l8-4 8 4-8 4-8-4z" />
        <rect x="6" y="14" width="8" height="2" fill="#fff" />
      </svg>
    ),
  },
  {
    title: "Meaningful Impact",
    desc: "Make a real difference in children's lives while building a fulfilling career. See the direct impact of your work in the growth and happiness of those we serve.",
    icon: (
      <svg
        className="w-10 h-10 text-white"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <polygon points="10,2 12,8 18,8 13,12 15,18 10,14 5,18 7,12 2,8 8,8" />
      </svg>
    ),
  },
];

const WhyWork = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div>
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
                <div className="bg-primary rounded-full flex items-center justify-center w-14 h-14 shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 font-primary text-primary  transition duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-secondary text-sm font-secondary  transition duration-300">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
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
