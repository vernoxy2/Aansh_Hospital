import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import icon1 from "../../assets/servicesSectionImg1.png";
import icon2 from "../../assets/servicesSectionImg2.png";
import icon3 from "../../assets/servicesSectionImg3.png";
import icon4 from "../../assets/servicesSectionImg4.png";
import icon5 from "../../assets/servicesSectionImg5.png";
import icon6 from "../../assets/servicesSectionImg6.png";
import { p } from "motion/react-client";

const services = [
  {
    title: (
  <>
    NICU Level 3A New <br />
    (Neonatal Intensive Care Unit)
  </>
),

    desc: "Providing advanced neonatal care for fragile newborns with compassion",
    icon: icon3,
  },
  {
    title: "Isolation NICU for septic infants",
    desc: "Dedicated NICU for septic newborns ensures safe, isolated care for infectious and vulnerable babies.",
    icon: icon1,
  },
  {
    title: "Mother-Baby Kangaroo Care Space",
    desc: "Safe, nurturing space for mother-baby bonding through Kangaroo Care and breastfeeding support.",
    icon: icon2,
  },
  {
    title: "Well equipped 2 Bedded PICU (Paediatric Intensive Care)",
    desc: "Advanced 2-bedded PICU with modern equipment for critical pediatric care and monitoring.",
    icon: icon4,
  },
  {
    title: "ARTEMES – Revolutionary Disinfection System",
    desc: "ARTEMES provides advanced, effective disinfection for a safer hospital environment.",
    icon: icon5,
  },
  {
    title: "Large Parking Facility For Hospital",
    desc: "Hospital offers a large, safe, and convenient parking facility for patients, visitors, and staff members.",
    icon: icon6,
  },
];

const OurService = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const visibleServices = isHomePage ? services.slice(0, 3) : services;

  return (
    <div className="py-8 md:py-16 space-y-4 md:space-y-10">
      <h2
        className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-10"
        data-aos="fade-up"
      >
        Our Services
      </h2>

      <section className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {visibleServices.map((item, index) => (
            <div
              key={index}
              className="bg-[#F6F4F4]/90 hover:bg-[#F6F1F9] rounded-xl shadow-sm hover:shadow-lg transition duration-300 flex flex-col justify-between p-6 sm:p-8 text-center"
              data-aos="fade-up"
            >
              <div className="flex flex-col gap-3 mb-4 lg:p-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-secondary font-medium 2xl:max-w-[260px] mx-auto">
                  {item.desc}
                </p>
              </div>
              <div className="flex justify-center mt-auto pt-4">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-36 h-36 sm:w-44 sm:h-44 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Show "View More" only on home page */}
      {isHomePage && (
        <div className="flex justify-center mt-10" data-aos="fade-up">
          <button className="bg-primary text-white px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-semibold rounded-lg shadow hover:shadow-md transition">
            <Link to="/services">View More</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default OurService;
