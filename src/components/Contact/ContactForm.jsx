import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bg from "../../assets/contact/Mask_group.png";

const ContactForm = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  });
  return (
    <div data-aos="fade-down">
      <section
        className="bg-cover bg-no-repeat bg-center py-10 px-4"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="max-w-5xl mx-auto  rounded-xl p-6 space-y-4">
          <form className="space-y-4">
            {/* Row 1: Full Width */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name*"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Row 2: 2 Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Address*"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="tel"
                placeholder="Phone Number*"
                className="w-full px-4 py-3 rounded-lg border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Row 3: 2 Columns */}
            <div>
              <input
                type="text"
                placeholder="Subject*"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <textarea
                type="text"
                placeholder="Your Message Here*"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#A82682] hover:bg-[#891c6b] text-white py-3 rounded-lg font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
