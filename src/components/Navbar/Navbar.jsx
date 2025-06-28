import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/facilities", label: "Facilities"},
    { to: "/achievement", label: "Achievement"},
    { to: "/career", label: "Career"},
    { to: "/contact", label: "Contact Us" },
    { to: "/faq", label: "FAQ" },
  ];

  return (
    <nav className="w-full bg-transparent py-4">
      <div className="max-w-7xl mx-auto flex items-center px-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="" />
        </div>

        {/* Nav + Search (Desktop) */}
        <div className="hidden xl:flex items-center justify-center ml-8 flex-grow">
          <div className="flex items-center bg-[#A82682] rounded-lg px-4 py-3 ">
            {/* Nav Links */}
            <div className="flex">
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
        </div>

        {/* Hamburger for mobile */}
        <div className="lg:hidden flex items-center ml-auto">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-gray-800 text-white flex flex-col gap-4 px-6 py-4 z-50">
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