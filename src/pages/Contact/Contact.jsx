import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";

// Components
import ContactHeader from "../../components/Contact/ContactHeader";
import ContactUs from "../../components/Contact/ContactUs";
import ContactForm from "../../components/Contact/ContactForm";

const Contact = () => {
  const location = useLocation();

  // Initialize AOS on first render
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Refresh AOS on route change
  useEffect(() => {
    AOS.refresh();
  }, [location]);

  return (
    <div className="overflow-hidden">
      {/* Header */}
      <div data-aos="fade-down" className="mt-20 md:mt-24">
        <ContactHeader />
      </div>

      {/* Contact Section */}
      <section className="w-full py-10 space-y-12">
        <div data-aos="fade-up">
          <ContactUs />
        </div>
        <div data-aos="fade-up">
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Contact;
