import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaEnvelope,
  FaCalendarPlus,
} from "react-icons/fa";
import logo from "../../assets/logo.png";
import AppointmentForm from "./AppointmentForm";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const phoneNumber = "9737971953";

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/facilities", label: "Facilities" },
    { to: "/achievement", label: "Achievement" },
    // { to: "/career", label: "Career" },
    { to: "/contact", label: "Contact Us" },
    { to: "/faq", label: "FAQ" },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1280);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = showAppointmentModal ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showAppointmentModal]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
        <div className="container lg:px-10 2xl:px-6 flex justify-between items-center ">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-16 md:h-20 xl:h-20 w-auto"
            />
          </Link>

          {!isMobile && (
            <div className="hidden xl:flex flex-1 justify-center">
              <div className="flex items-center bg-[#A82682] rounded-lg px-3 py-2 gap-x-1 2xl:gap-x-2">
                {navLinks.map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                      `px-2 py-[6px] rounded-lg font-bold text-base transition-colors duration-200 ${
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
          )}

          <div className="flex items-center gap-2 ml-auto">
            <a
              href={`tel:${phoneNumber}`}
              className="border-2 border-primary text-primary bg-white rounded-md w-9 h-9 md:w-auto md:px-3 hover:bg-primary/10 transition flex items-center justify-center"
              aria-label="Call"
            >
              <FaPhoneAlt />
              <span className="hidden md:inline ml-2 font-bold">
                {phoneNumber}
              </span>
            </a>

            

            {isMobile && (
              <button
                ref={buttonRef}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Menu"
                className="ml-2 text-primary"
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            )}
          </div>
        </div>

        {isMobile && isOpen && (
          <div
            ref={menuRef}
            className="absolute top-full left-0 w-full bg-primary text-white flex flex-col px-4 py-4 z-50"
          >
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `py-2 text-base ${
                    isActive
                      ? "text-[#e2b598] font-medium"
                      : "hover:text-blue-300"
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

      <div className="fixed bottom-1 left-0 md:top-3/4 xl:top-1/2 md:-translate-y-1/2 md:left-auto z-40 flex flex-row md:flex-col gap-0.5 sm:gap-2">
        <a
          href={`tel:7573952355`}
          className="bg-[#CD895C] text-white rounded-t-xl sm:rounded-tl-none sm:rounded-r-xl  shadow-lg hover:bg-[#CD895C]/90 transition-all flex flex-row md:flex-col items-center justify-center w-36 h-14 md:w-14 md:h-40 px-1 py-2 gap-x-1 md:gap-y-2"
        >
          <span className="font-bold text-xs sm:text-sm md:rotate-180 md:writing-vertical mb-0">
            Emergency
          </span>
          <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center mt-1">
            <FaPhoneAlt className="text-[#CD895C]" />
          </div>
        </a>

        <a
          href="mailto:drgamit00ash@gmail.com"
          className="bg-[#CD895C] text-white rounded-t-xl sm:rounded-tl-none sm:rounded-r-xl shadow-lg hover:bg-[#CD895C]/90 transition-all flex flex-row md:flex-col items-center justify-center w-36 h-14 md:w-14 md:h-40 px-1 py-2 gap-x-1 md:gap-y-2"
        >
          <span className="font-bold text-xs sm:text-sm md:rotate-180 md:writing-vertical mb-0">
            Enquire Now
          </span>
          <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center mt-1">
            <FaEnvelope className="text-[#CD895C]" />
          </div>
        </a>
      </div>

      <button
        onClick={() => setShowAppointmentModal(true)}
        aria-label="Book an appointment"
        className="fixed bottom-3 sm:bottom-6 md:bottom-8 right-3 sm:right-6 md:right-8 z-50 bg-primary text-white rounded-full shadow-lg flex items-center gap-2 px-4 md:px-5 py-4 md:py-3 hover:bg-fuchsia-700 transition text-sm sm:text-base md:text-lg font-bold"
      >
        <FaCalendarPlus className="text-xl" />
        <span className="hidden sm:inline">Book an appointment</span>
      </button>

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
