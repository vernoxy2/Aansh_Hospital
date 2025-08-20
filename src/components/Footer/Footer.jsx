import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import heart from "../../assets/footer_lower.webp";
import bg from "../../assets/footer_bg.webp";
import AppointmentForm from "../Navbar/AppointmentForm";
import { FaChevronDown } from "react-icons/fa";

// ✅ Footer Data - separated arrays
const aboutLinks = [
  { label: "Mission, Vision & Values", to: "/mission" },
  { label: "Our Story", to: "/our-story" },
  { label: "Our Team", to: "/team" },
  { label: "Our Doctors", to: "/doctors" },
  { label: "Why choose us", to: "/why-choose-us" },
  { label: "Contact Us", to: "/contact" },
];

const serviceLinks = [
  { label: "Department of Paediatrics", to: "/services#paediatrics" },
  { label: "Department of Neonatology", to: "/services#neonatology" },
  { label: "Department of Paediatric Intensive Care", to: "/services#picu" },
  { label: "Paediatric Super Specialities", to: "/services#super-specialities" },
  { label: "Department of Obstetrics", to: "/services#obstetrics" },
];

const resourceLinks = [
  { label: "Career", to: "/career" },
  { label: "FAQs", to: "/faq" },
];

const locationDetails = {
  address: "JW4H+4V2, beside Yes Bank, Kapadia Chal, Valsad, Gujarat 396001",
  phone: "08735019584",
};

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <footer
      className="relative bg-no-repeat bg-top pt-20 bg-[length:170%_300px] xl:bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-7xl mx-auto px-4 xl:pt-10 grid grid-cols-1 lg:grid-cols-5 gap- md:gap-8 text-sm text-gray-600">
        {/* 1️⃣ Logo + Info */}
        <div className="space-y-4 flex flex-col items-center lg:items-start text-center lg:text-left">
          <img src={logo} alt="Aansh Logo" className="mx-auto lg:mx-0" />
          <p className="font-semibold text-base text-secondary">
            Aansh Children's Hospital offers trusted, compassionate care for
            women and children with expert doctors, innovation, and easy
            appointment booking.
          </p>
          <button
            className="bg-primary text-white px-4 py-2 rounded-md flex items-center gap-2 mt-4 hover:bg-white hover:text-primary"
            onClick={() => setShowAppointmentModal(true)}
          >
            <span>📅</span> Book an Appointment{" "}
            <span className="ml-auto">➔</span>
          </button>
        </div>
        {/* 2️⃣ Footer Links (Mobile + Desktop) */}
        <div className="w-full">
          {/* Mobile */}
          <div className="lg:hidden">
            <button
              onClick={() => toggleDropdown(0)}
              className="w-full text-left font-bold text-2xl text-primary flex items-center justify-between border-b-2 border-primary pb-4"
            >
              About Us
              <FaChevronDown
                className={`w-5 h-5 ml-2 transition-transform duration-200 ${
                  openIndex === 0 ? "rotate-180" : ""
                }`}
              />
            </button>

            {openIndex === 0 && (
              <ul className="pl-2 mt-2 space-y-1">
                {aboutLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.to}
                      className="hover:text-primary text-secondary font-bold text-base cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Desktop */}
          <div className="hidden lg:block">
            <h3 className="font-bold text-2xl text-primary mb-2">About Us</h3>
            <ul className="space-y-1">
              {aboutLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.to}
                    className="hover:text-primary text-secondary font-bold text-base cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* --- Our Services --- */}
        <div className="w-full">
          {/* Mobile */}
          <div className="lg:hidden">
            <button
              onClick={() => toggleDropdown(1)}
              className="w-full text-left font-bold text-2xl text-primary flex items-center justify-between border-b-2 border-primary pb-4"
            >
              Our Services
              <FaChevronDown
                className={`w-5 h-5 ml-2 transition-transform duration-200 ${
                  openIndex === 1 ? "rotate-180" : ""
                }`}
              />
            </button>

            {openIndex === 1 && (
              <ul className="pl-2 mt-2 space-y-1">
                {serviceLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.to}
                      className="hover:text-primary text-secondary font-bold text-base cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Desktop */}
          <div className="hidden lg:block">
            <h3 className="font-bold text-2xl text-primary mb-2">
              Our Services
            </h3>
            <ul className="space-y-1">
              {serviceLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.to}
                    className="hover:text-primary text-secondary font-bold text-base cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* --- Resources --- */}
        <div className="w-full">
          {/* Mobile */}
          <div className="lg:hidden">
            <button
              onClick={() => toggleDropdown(2)}
              className="w-full text-left font-bold text-2xl text-primary flex items-center justify-between border-b-2 border-primary pb-4"
            >
              Resources
              <FaChevronDown
                className={`w-5 h-5 ml-2 transition-transform duration-200 ${
                  openIndex === 2 ? "rotate-180" : ""
                }`}
              />
            </button>

            {openIndex === 2 && (
              <ul className="pl-2 mt-2 space-y-1">
                {resourceLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.to}
                      className="hover:text-primary text-secondary font-bold text-base cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Desktop */}
          <div className="hidden lg:block">
            <h3 className="font-bold text-2xl text-primary mb-2">Resources</h3>
            <ul className="space-y-1">
              {resourceLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.to}
                    className="hover:text-primary text-secondary font-bold text-base cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* 3️⃣ Location & Contact */}
        <div className="w-full">
          {/* Mobile */}
          <div className="lg:hidden">
            <h3 className="font-bold text-xl text-primary mb-2">Location</h3>
            <p className="font-bold text-base text-secondary">
              {locationDetails.address}
            </p>
            <h4 className="mt-4 text-primary font-bold text-xl">Call Us</h4>
            <p className="text-lg font-semibold text-secondary">
              {locationDetails.phone}
            </p>
          </div>

          {/* Desktop */}
          <div className="hidden lg:block">
            <h3 className="font-bold text-2xl text-primary mb-2">Location</h3>
            <p className="font-bold text-base text-secondary">
              {locationDetails.address}
            </p>
            <h4 className="mt-4 text-primary font-bold text-2xl">Call Us</h4>
            <p className="text-xl font-semibold text-secondary">
              {locationDetails.phone}
            </p>
          </div>
        </div>
      </div>

      {/* 4️⃣ Heart Divider */}
      <div className="xl:-mt-24 -mt-8">
        <img src={heart} alt="Heart Line" className="ml-auto" />
      </div>

      {/* 5️⃣ Appointment Modal */}
      {showAppointmentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-2xl text-gray-400 hover:text-primary"
              onClick={() => setShowAppointmentModal(false)}
            >
              &times;
            </button>
            <AppointmentForm onClose={() => setShowAppointmentModal(false)} />
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
