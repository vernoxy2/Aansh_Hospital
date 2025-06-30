import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaPhoneAlt, FaSearch } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
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
            className="flex items-center justify-center border-2 border-primary text-primary bg-white rounded-md w-10 h-10 p-0 hover:bg-[#F50057]/10 transition"
            aria-label="Call"
          >
            <FaPhoneAlt className="text-xl" />
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
              className="ml-2 flex xl:hidden"
              aria-label="Menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
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
              onClick={() => setIsOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
