import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import icon1 from "../../assets/servicesSectionImg1.png";
import icon2 from "../../assets/servicesSectionImg2.png";
import icon3 from "../../assets/servicesSectionImg3.png";
import icon4 from "../../assets/servicesSectionImg4.png";
import icon5 from "../../assets/servicesSectionImg5.png";
import icon6 from "../../assets/servicesSectionImg6.png";
import ContactHero from "../FAQ/ContactHero";

const services = [
  {
    // title: "Separate NICU For Septic Newborn (Isolation for Infectious Babies)",
    title: "Isolation NICU for septic infants",
    desc: "Dedicated NICU for septic newborns ensures safe, isolated care for infectious and vulnerable babies.",
    icon: icon1,
  },
  {
    // title: "Kangaroo Mother Care & Feeding Room For Mothers & Babies",
    title: "Mother-Baby Kangaroo Care Space",
    desc: "Safe, nurturing space for mother-baby bonding through Kangaroo Care and breastfeeding support.",
    icon: icon2,
  },
  {
    title: "Latest & Well Equipped Ambulance",
    desc: "Latest and fully equipped ambulance services for emergency medical support.",
    icon: icon3,
  },
  {
    title: "Well equipped 2 Bedded PICU (Paediatric Intensive Care)",
    desc: "Advanced 2-bedded PICU with modern equipment for critical pediatric care and monitoring.",
    icon: icon4,
  },
  {
    title: "ARTEMES – Revolutionar Disinfection System",
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
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  });
  return (
    <div className="container py-10 space-y-8">
      <div data-aos="fade-up">
        <h1 className="text-center text-4xl md:text-5xl xl:text-6xl font-bold text-primary">
          Our Services
        </h1>
      </div>
      <section className="py-8 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-[#F6F4F4]/90 hover:bg-[#F6F1F9] rounded-xl text-center p-8 shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out flex flex-col justify-between h-full"
              data-aos="fade-down"
            >
              {/* Fixed height text section */}
              <div className="h-[180px] flex flex-col justify-start space-y-3 px-10">
                <h3 className="text-lg md:text-2xl font-bold leading-snug text-primary">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-secondary font-semibold">
                  {item.desc}
                </p>
              </div>

              {/* Image section always positioned at bottom */}
              <div
                className="mt-6 flex items-end justify-center"
                data-aos="fade-right"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-[201px] h-[205px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="flex justify-center items-center" data-aos="fade-up">
        <button className="bg-primary text-white xl:px-4 px-2 py-1 xl:py-2 xl:text-2xl font-bold rounded-xl">
          View More
        </button>
      </div>
    </div>
  );
};

export default OurService;
