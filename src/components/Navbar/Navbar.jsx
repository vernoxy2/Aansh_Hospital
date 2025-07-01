import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaSearch,
  FaEnvelope,
  FaCalendarPlus
} from "react-icons/fa";
import logo from "../../assets/logo.png";
import AppointmentForm from "./AppointmentForm";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const searchRef = useRef(null);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/facilities", label: "Facilities" },
    { to: "/achievement", label: "Achievement" },
    { to: "/career", label: "Career" },
    { to: "/contact", label: "Contact Us" },
    { to: "/faq", label: "FAQ" },
  ];

  const phoneNumber = "08735019584";

  useEffect(() => {
    if (!isOpen) return;
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close search bar on outside click
  useEffect(() => {
    if (!showSearch) return;
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSearch]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg py-4">
        <div className="w-full mx-auto flex items-center justify-between lg:px-20 relative">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src={logo} alt="Logo" className="h-24 w-auto" />
          </div>

          {/* NavLinks (centered on xl+) */}
          <div className="hidden xl:flex flex-1 justify-center">
            <div className="flex items-center bg-[#A82682] rounded-lg px-2 py-2">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `px-5 py-2 rounded-lg font-bold transition-colors duration-200 text-xl ${
                      isActive
                        ? "bg-white text-[#A82682]"
                        : "text-white hover:bg-white/20"
                    }`
                  }
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Right Section: Search, Call, Get Started, Hamburger */}
          <div className="flex items-center gap-2 ml-auto">
            {/* Search Icon/Button or Search Bar */}
            {!showSearch ? (
              <button
                className="flex items-center justify-center border-2 border-primary text-primary bg-white rounded-md w-10 h-10 p-0 hover:bg-primary/20 transition"
                aria-label="Search"
                onClick={() => setShowSearch(true)}
              >
                <FaSearch className="text-xl" />
              </button>
            ) : (
              <div
                ref={searchRef}
                className="flex items-center border-2 border-primary rounded-md bg-white px-2 h-10 w-40 xs:w-48 md:w-64 transition"
              >
                <input
                  type="text"
                  className="flex-1 outline-none bg-transparent text-primary px-2 text-base"
                  placeholder="Search..."
                  autoFocus
                />
                <button
                  className="ml-2 text-primary hover:text-[#c51162] flex items-center justify-center"
                  aria-label="Close Search"
                  onClick={() => setShowSearch(false)}
                  type="button"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>
            )}
            {/* Call Icon Button */}
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center justify-center border-2 border-primary text-primary bg-white rounded-md w-10 h-10 md:w-auto md:px-3 p-0 hover:bg-[#F50057]/10 transition"
              aria-label="Call"
            >
              <FaPhoneAlt className="text-xl" />
              <span className="hidden md:inline ml-2 font-bold text-base">
                {phoneNumber}
              </span>
            </a>
            {/* Get Started Button (hidden on small screens) */}
            <button className="hidden md:inline-flex items-center bg-primary text-white font-bold rounded-md px-5 h-10 ml-1 hover:bg-[#c51162] transition text-base shadow">
              Get Started
            </button>
            {/* Hamburger for mobile */}
            {!showSearch && (
              <button
                ref={buttonRef}
                onClick={() => setIsOpen(!isOpen)}
                className="ml-2 flex xl:hidden text-primary"
                aria-label="Menu"
              >
                {isOpen ? (
                  <FaTimes size={24} className="-mt-5" />
                ) : (
                  <FaBars size={24} />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            key={isOpen ? "open" : "closed"}
            ref={menuRef}
            className="lg:hidden absolute top-16 left-0 w-full bg-gray-800 text-white flex flex-col gap-4 px-6 py-4 z-50"
          >
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `py-1 text-sm ${
                    isActive ? "text-blue-400" : "hover:text-blue-300"
                  }`
                }
                onClick={() => {
                  setIsOpen(false);
                  window.scrollTo(0, 0);
                }}
              >
                {label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>

      {/* Sticky Right Side Panel */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-6 p-2">
        {/* Emergency Button */}
        <a
          href={`tel:${phoneNumber}`}
          className="bg-primary text-white rounded-l-xl shadow-lg hover:bg-[#c51162] transition-all duration-300 flex flex-col items-center justify-between w-14 h-36 py-4"
        >
          <span className="font-bold text-base tracking-wide" style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>
            Emergency
          </span>
          <span className="flex flex-col items-center mt-2">
            <span className="bg-white rounded-full flex items-center justify-center w-8 h-8">
              <FaPhoneAlt className="text-primary text-lg" />
            </span>
          </span>
        </a>
        {/* Enquire Now Button */}
        <a
          href="mailto:drashishgamit9@gmail.com"
          className="bg-primary text-white rounded-l-xl shadow-lg hover:bg-[#c51162] transition-all duration-300 flex flex-col items-center justify-between w-14 h-36 py-4"
        >
          <span className="font-bold text-base tracking-wide" style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>
            Enquire Now
          </span>
          <span className="flex flex-col items-center mt-2">
            <span className="bg-white rounded-full flex items-center justify-center w-8 h-8">
              <FaEnvelope className="text-primary text-lg" />
            </span>
          </span>
        </a>
      </div>

      {/* Sticky Book an Appointment Button (Bottom Right) */}
      <button
        className="fixed bottom-6 right-6 z-50 bg-primary text-white rounded-full shadow-lg flex items-center gap-2 px-5 py-3 hover:bg-fuchsia-700 transition text-lg font-bold"
        onClick={() => setShowAppointmentModal(true)}
        aria-label="Book an appointment"
      >
        <FaCalendarPlus className="text-2xl" />
        <span className="hidden sm:inline">Book an appointment</span>
      </button>

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
    </>
  );
};

export default Navbar;
