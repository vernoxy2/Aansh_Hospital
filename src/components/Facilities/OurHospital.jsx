import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import img1 from "../../assets/facilities/Mask_group.png";
import img2 from "../../assets/facilities/Mask_group_(1).png";
import img3 from "../../assets/facilities/Mask_group_(2).png";
import img4 from "../../assets/facilities/Mask_group_(3).png";
import img5 from "../../assets/facilities/Mask_group_(4).png";
import img6 from "../../assets/facilities/Mask_group_(5).png";

import parkingImg from "../../assets/facilities/parking.png";
import pharmaImg from "../../assets/facilities/pharma.png";
import ambulanceImg from "../../assets/facilities/ambulance_(2).png";

const facilities = [
  {
    title: "Spacious 15 bedded NICU For Sick Newborns",
    desc: "Spacious 15-bedded NICU equipped with modern technology to care for critically ill newborns safely.",
    image: img1,
  },
  {
    title: "ROP Screening - for Premature Babies",
    desc: "ROP screening for premature babies ensures early detection and protection against vision-threatening retinal conditions.",
    image: img2,
  },
  {
    title: "Spacious Rooms for Indoor Patients",
    desc: "Bright, spacious patient room with modern bed, soft lighting, calming colors, and discreet medical equipment.",
    image: img3,
  },
  {
    title: "Latest Conventional & High Frequency Ventilators",
    desc: "High-tech NICU corner with ventilators, incubators, sterile setup, soft lighting, and organized medical supplies.",
    image: img4,
  },
  {
    title: "Biosafety Cabinet For Fluid and Antibiotic Preparation",
    desc: "Modern hospital utility room with color-coded pipelines, gauges, regulators, and clean, organized medical gas supply system.",
    image: img5,
  },
  {
    title: "Central Air/Oxygen Supply System",
    desc: "High-tech hospital gas system with color-coded outlets, digital gauges, secure valves, and sterile surroundings.",
    image: img6,
  },
];

const basicFacilities = [
  {
    title: "Parking Facility",
    desc: "Hospital offers a large, safe, and convenient parking facility for patients, visitors, and staff members.",
    icon: parkingImg,
    iconAlt: "Parking Icon",
    color: "text-fuchsia-700",
  },
  {
    title: "Pharmacy Facility",
    desc: "Reliable pharmacy offering quality medicines, expert advice, and prompt service.",
    icon: pharmaImg,
    iconAlt: "Pharmacy Icon",
    color: "text-fuchsia-700",
  },
  {
    title: "Ambulance Facility",
    desc: "24/7 ambulance facility for emergency care and patient transport with trained staff and advanced equipment.",
    icon: ambulanceImg,
    iconAlt: "Ambulance Icon",
    color: "text-fuchsia-700",
  },
];

const OurHospitalFacilities = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  });

  return (
    <div className="overflow-x-hidden">
      {/* Advanced Facilities */}
      <div className="py-10 max-w-7xl mx-auto">
        <h2
          className="text-center text-3xl md:text-5xl font-bold text-primary mb-10"
          data-aos="zoom-in"
        >
          Explore Our Hospital Facilities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-5 flex flex-col transition duration-300 hover:bg-primary group cursor-pointer space-y-8"
              data-aos="flip-up"
            >
              <div>
                <h3 className="font-bold text-lg md:text-xl mb-2 text-primary group-hover:text-white transition duration-300">
                  {facility.title}
                </h3>
                <p className="text-sm mb-4 text-secondary group-hover:text-white transition duration-300">
                  {facility.desc}
                </p>
              </div>
              <img
                src={facility.image}
                alt={facility.title}
                className="rounded-lg w-full h-48 object-cover mt-auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Basic Facilities */}
      <div className="py-10 max-w-7xl mx-auto">
        <h2
          className="text-center text-3xl md:text-5xl font-bold text-fuchsia-700 mb-10"
          data-aos="zoom-in"
        >
          Our Facilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {basicFacilities.map((facility, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg flex flex-col items-center transition duration-300 group cursor-pointer"
              data-aos="flip-down"
            >
              <img
                src={facility.icon}
                alt={facility.iconAlt}
                className="w-72 h-72 object-contain"
              />
              <div className="p-5">
                <h3
                  className={`font-bold text-lg md:text-xl mb-2 text-center ${facility.color}`}
                >
                  {facility.title}
                </h3>
                <p className="text-sm mb-4 text-center">
                  {facility.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Highlight Banner */}
      <div
        className="w-full bg-gradient-to-r from-white via-[#cc8ba8] to-[#A82682] py-4 px-4"
        data-aos="fade-up"
      >
        <p className="text-center text-white text-sm sm:text-base md:text-lg font-semibold max-w-4xl mx-auto">
          Our hospital ensures convenience and safety with well-organized parking,
          a fully-stocked in-house pharmacy, and 24/7 ambulance service — all
          designed to support patients, visitors, and staff efficiently.
        </p>
      </div>
    </div>
  );
};

export default OurHospitalFacilities;
