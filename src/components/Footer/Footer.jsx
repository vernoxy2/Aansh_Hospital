import React from "react";
import logo from "../../assets/logo.png";
import heart from "../../assets/footer_lower.webp";
import bg from "../../assets/footer_bg.webp";

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
  return (
    <footer
  className="relative bg-no-repeat bg-top pt-20 bg-[length:170%_300px] xl:bg-cover"
  style={{ backgroundImage: `url(${bg})` }}
>

      {/* <div className="max-w-7xl mx-auto px-4 pt-10 grid grid-cols-1 md:grid-cols-5 gap-8 text-sm text-gray-600">
        Logo + Info
        <div className="md:col-span-1 space-y-4">
          <img src={logo} alt="Aansh Logo" className="" />
          <p className="font-semibold text-base text-secondary">
            Aansh Children's Hospital offers trusted, compassionate care for
            women and children with expert doctors, innovation, and easy
            appointment booking.
          </p>
          <button className="bg-primary text-white px-4 py-2 rounded-md flex items-center gap-2 mt-4 hover:bg-white hover:text-primary ">
            <span>📅</span> Book an Appointment
            <span className="ml-auto">➔</span>
          </button>
        </div>

        Link Columns
        {footerLinks.map((section, index) => (
          <div key={index}>
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
        ))}

        Location & Contact
        <div>
          <h3 className="font-bold text-2xl text-primary mb-2">Locations</h3>
          <p className="font-bold text-base text-secondary">
            JW4H+4V2, beside Yes Bank, Kapadia Chal, Valsad, Gujarat 396001
          </p>
          <h4 className="mt-4 text-primary font-bold text-2xl">Call Us</h4>
          <p className="text-xl font-semibold text-secondary">08735019584</p>
        </div>
      </div> */}

      {/* <div className="max-w-7xl mx-auto px-4 pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-sm text-gray-600 text-center lg:text-left">
        Logo + Info
        <div className="md:col-span-1 space-y-4 flex flex-col items-center lg:items-start">
          <img src={logo} alt="Aansh Logo" className="mx-auto lg:mx-0" />
          <p className="font-semibold text-base text-secondary">
            Aansh Children's Hospital offers trusted, compassionate care for
            women and children with expert doctors, innovation, and easy
            appointment booking.
          </p>
          <button className="bg-primary text-white px-4 py-2 rounded-md flex items-center gap-2 mt-4 hover:bg-white hover:text-primary">
            <span>📅</span> Book an Appointment
            <span className="ml-auto">➔</span>
          </button>
        </div>

        Link Columns
        {footerLinks.map((section, index) => (
          <div
            key={index}
            className="flex flex-col items-center lg:items-start"
          >
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
        ))}

        Location & Contact
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="font-bold text-2xl text-primary mb-2">Locations</h3>
          <p className="font-bold text-base text-secondary">
            JW4H+4V2, beside Yes Bank, Kapadia Chal, Valsad, Gujarat 396001
          </p>
          <h4 className="mt-4 text-primary font-bold text-2xl">Call Us</h4>
          <p className="text-xl font-semibold text-secondary">08735019584</p>
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 xl:pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-sm text-gray-600">
        {/* ✅ Only this block is centered on small screens */}
        <div className="md:col-span-1 space-y-4 flex flex-col items-center lg:items-start text-center lg:text-left">
          <img src={logo} alt="Aansh Logo" className="mx-auto lg:mx-0" />
          <p className="font-semibold text-base text-secondary">
            Aansh Children's Hospital offers trusted, compassionate care for
            women and children with expert doctors, innovation, and easy
            appointment booking.
          </p>
          <button className="bg-primary text-white px-4 py-2 rounded-md flex items-center gap-2 mt-4 hover:bg-white hover:text-primary">
            <span>📅</span> Book an Appointment
            <span className="ml-auto">➔</span>
          </button>
        </div>

        {/* 🔽 All other blocks are always left-aligned */}
        {footerLinks.map((section, index) => (
          <div key={index} className="text-left">
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
        ))}

        {/* 📍 Contact info - also always left-aligned */}
        <div className="text-left">
          <h3 className="font-bold text-2xl text-primary mb-2">Locations</h3>
          <p className="font-bold text-base text-secondary">
            JW4H+4V2, beside Yes Bank, Kapadia Chal, Valsad, Gujarat 396001
          </p>
          <h4 className="mt-4 text-primary font-bold text-2xl">Call Us</h4>
          <p className="text-xl font-semibold text-secondary">08735019584</p>
        </div>
      </div>

      {/* Bottom Heart Line */}
      <div className="xl:-mt-24 -mt-8">
        <img src={heart} alt="Heart Line" className="ml-auto" />
      </div>
    </footer>
  );
};

export default Footer;
