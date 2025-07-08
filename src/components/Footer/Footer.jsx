import React, { useState } from "react";
import logo from "../../assets/logo.png";
import heart from "../../assets/footer_lower.webp";
import bg from "../../assets/footer_bg.webp";
import AppointmentForm from "../Navbar/AppointmentForm";

const footerLinks = [
  {
    heading: "About Us",
    links: [
      "Mission, Vision & Values",
      "Our Story",
      "Our Team",
      "Our Doctors",
      "Why choose us",
      "Celebrity Testimonials",
      "Contact Us",
    ],
  },
  {
    heading: "Our Services",
    links: [
      "Our Facilities",
      "Department of Paediatrics",
      "Department of Neonatology",
      "Department of Paediatric Intensive Care",
      "Paediatric Super Specialities",
      "Department of Obstetrics",
      "Department of Gynaecology",
      "Department of IVF",
    ],
  },
  {
    heading: "Resources",
    links: ["Testimonials", "FAQs", "Career"],
  },
];

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
      <div className="max-w-7xl mx-auto px-4 xl:pt-10 grid grid-cols-1 lg:grid-cols-5 gap-8 text-sm text-gray-600">
        {/* Logo + Info */}
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
            <span>📅</span> Book an Appointment <span className="ml-auto">➔</span>
          </button>
        </div>

        {/* Footer Links */}
        {footerLinks.map((section, index) => (
          <div key={index} className="w-full">
            {/* Mobile Dropdown */}
            <div className="lg:hidden flex items-center justify-between w-full">
              <button
                onClick={() => toggleDropdown(index)}
                className="w-full text-left font-bold text-2xl text-primary flex items-center justify-between border-b-2 border-primary pb-1"
              >
                {section.heading}
                <svg
                  className={`w-6 h-6 ml-2 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            {openIndex === index && (
              <ul className="pl-2 mt-2 space-y-1 lg:hidden">
                {section.links.map((link, i) => (
                  <li
                    key={i}
                    className="text-secondary font-semibold cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            )}

            {/* Desktop View */}
            <div className="hidden lg:block">
              <h3 className="font-bold text-2xl text-primary mb-2">
                {section.heading}
              </h3>
              <ul className="space-y-1">
                {section.links.map((link, i) => (
                  <li
                    key={i}
                    className="hover:text-primary text-secondary font-bold text-base cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {/* Location & Contact */}
        <div className="w-full">
          <div className="lg:hidden">
            <h3 className="font-bold text-xl text-primary mb-2">Location</h3>
            <p className="font-bold text-base text-secondary">
              JW4H+4V2, beside Yes Bank, Kapadia Chal, Valsad, Gujarat 396001
            </p>
            <h4 className="mt-4 text-primary font-bold text-xl">Call Us</h4>
            <p className="text-lg font-semibold text-secondary">08735019584</p>
          </div>

          <div className="hidden lg:block">
            <h3 className="font-bold text-2xl text-primary mb-2">Location</h3>
            <p className="font-bold text-base text-secondary">
              JW4H+4V2, beside Yes Bank, Kapadia Chal, Valsad, Gujarat 396001
            </p>
            <h4 className="mt-4 text-primary font-bold text-2xl">Call Us</h4>
            <p className="text-xl font-semibold text-secondary">08735019584</p>
          </div>
        </div>
      </div>

      {/* Heart Divider */}
      <div className="xl:-mt-24 -mt-8">
        <img src={heart} alt="Heart Line" className="ml-auto" />
      </div>

      {/* Appointment Modal */}
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
