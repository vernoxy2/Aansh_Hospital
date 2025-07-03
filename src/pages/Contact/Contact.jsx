import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bg from "../../assets/contact/contactbg.png";
import smallBg from "../../assets/contact/contactbg_small.png"
import ContactUs from "../../components/Contact/ContactUs";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location]);
  return (
    <div>
      <div data-aos="fade-down" className="mt-20">
        <img src={smallBg} alt="" className="block md:hidden w-full mx-auto"/>
        <img src={bg} alt="" className="hidden md:block w-full mx-auto" />
      </div>
      <div className="w-full py-10">
        <ContactUs />
      </div>
    </div>
  );
};

export default Contact;
