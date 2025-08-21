import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import logo from "../../assets/logo.png";
import heart from "../../assets/footer_lower.webp";
import bg from "../../assets/footer_bg.webp";
import AppointmentForm from "../Navbar/AppointmentForm";

const sections = [
  {
    title: "About Us",
    links: [
      { label: "Mission, Vision & Values", to: "/about#mission" },
      { label: "Our Story", to: "/about#our-story" },
      { label: "Our Team", to: "/about#team" },
      { label: "Our Doctors", to: "/about#doctors" },
    ],
  },
  {
    title: "Our Services",
    links: [
      { label: "Department of Paediatrics", to: "/services#paediatrics" },
      { label: "Department of Neonatology", to: "/services#neonatology" },
      { label: "Department of Paediatric Intensive Care", to: "/services#picu" },
      { label: "Paediatric Super Specialities", to: "/services#super-specialities" },
      { label: "Department of Obstetrics", to: "/services#obstetrics" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Career", to: "/career" },
      { label: "FAQs", to: "/faq" },
    ],
  },
];

const locationDetails = {
  address: "201, 2nd floor, shree sanidhya Building Valsad, Valsad 396001",
  phone: "08735019584",
};

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);

  return (
    <footer
      className="relative bg-no-repeat bg-top pt-20 bg-[length:170%_300px] xl:bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-7xl mx-auto px-4 xl:pt-10 grid grid-cols-1 lg:grid-cols-5 gap-8 text-sm text-gray-600">
        
        {/* Logo + Info */}
        <div className="space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start">
          <img src={logo} alt="Aansh Logo" />
          <p className="font-semibold text-base text-secondary">
            Aansh Children's Hospital offers trusted, compassionate care for
            women and children with expert doctors, innovation, and easy
            appointment booking.
          </p>
          <button
            onClick={() => setShowAppointmentModal(true)}
            className="bg-primary text-white px-4 py-2 rounded-md flex items-center gap-2 mt-4 hover:bg-white hover:text-primary border border-primary transition duration-300 ease-in-out"
          >
            <span>📅</span> Book an Appointment <span>➔</span>
          </button>
        </div>

        {/* Dynamic Sections */}
        {sections.map((section, i) => (
          <div key={i}>
            {/* Mobile Dropdown */}
            <div className="lg:hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center border-b-2 border-primary pb-3 text-2xl font-bold text-primary"
              >
                {section.title}
                <FaChevronDown
                  className={`transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === i && (
                <ul className="mt-2 space-y-1 pl-2">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        to={link.to}
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="block text-secondary font-bold text-base hover:text-primary"
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
              <h3 className="font-bold text-2xl text-primary mb-2">{section.title}</h3>
              <ul className="space-y-1">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.to}
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      className="block text-secondary font-bold text-base hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {/* Location */}
        <div>
          <h3 className="font-bold text-2xl text-primary mb-2">Location</h3>
          <p className="text-secondary font-bold">{locationDetails.address}</p>
          <h4 className="mt-4 text-primary font-bold text-xl lg:text-2xl">Call Us</h4>
          <p className="text-secondary font-semibold text-lg lg:text-xl">{locationDetails.phone}</p>
        </div>
      </div>

      {/* Heart Divider */}
      <div className="xl:-mt-24 -mt-8">
        <img src={heart} alt="Heart Divider" className="ml-auto" />
      </div>

      {/* Appointment Modal */}
      {showAppointmentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative">
            <button
              onClick={() => setShowAppointmentModal(false)}
              className="absolute top-2 right-2 text-2xl text-gray-400 hover:text-primary"
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
