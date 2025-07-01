import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bg from "../../assets/contact/contactbg.png";
import ContactUs from "../../components/Contact/ContactUs";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div>
      <div data-aos="fade-down">
        <img src={bg} alt="" className="w-full" />
      </div>
      <div className="py-10">
        <ContactUs />
      </div>
    </div>
  );
};

export default Contact;
