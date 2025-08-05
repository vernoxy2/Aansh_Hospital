import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-16 relative">
      <div className="container flex flex-col xl:flex-row gap-12 lg:gap-20 ">
        {/* Contact Card */}
        <div
          className="w-full xl:w-5/12 bg-white p-6 md:p-10 space-y-4 md:space-y-6 shadow-2xl "
          data-aos="zoom-in"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-primary font-primary">
            Need Any Help?
          </h2>
          <p className="text-secondary md:text-2xl font-semibold">
            We're Just a Message Away – Let's Talk!
          </p>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="bg-primary text-white rounded-full p-4 flex items-center justify-center">
              <svg
                className="w-7 h-7 md:w-9 md:h-9"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.52l.3 1.2a2 2 0 01-.45 1.95l-1.1 1.1a16.06 16.06 0 006.36 6.36l1.1-1.1a2 2 0 011.95-.45l1.2.3A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 5V4a2 2 0 012-2z"
                />
              </svg>
            </div>
            <div className="text-base md:text-xl">
              <div className="font-bold text-primary">Call Us</div>
              <div className="text-secondary font-semibold">08735019584</div>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="bg-primary text-white rounded-full p-4 flex items-center justify-center">
              <svg
                className="w-7 h-7 md:w-9 md:h-9"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12l-4 4-4-4m8-4H8a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-8a2 2 0 00-2-2z"
                />
              </svg>
            </div>
            <div className="text-base md:text-xl">
              <div className="font-bold text-primary">Email</div>
              <a
                href="mailto:drashishgamit9@gmail.com"
                className="text-secondary font-semibold"
              >
                drashishgamit9@gmail.com
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="bg-primary text-white rounded-full p-4 flex items-center justify-center">
              <svg
                className="w-7 h-7 md:w-9 md:h-9"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 22s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z"
                />
              </svg>
            </div>
            <div className="text-base md:text-xl">
              <div className="font-bold text-primary">Address</div>
              <div className="text-secondary font-semibold">
                Aansh Children's Hospital,
                <br className="hidden md:block" />
                beside Yes Bank, Kapadia Chal,
                <br className="hidden md:block" />
                Valsad, Gujarat 396001
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full xl:w-7/12" data-aos="fade-up">
          <div className="w-full h-[400px] md:h-full shadow-lg overflow-hidden border border-gray-200">
            <iframe
              title="Aansh Children's Hospital Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.578720412138!2d72.92973169999999!3d20.6052549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0c30014421883%3A0xeddbb051a6a1fb30!2sAansh%20children's%20Hospital!5e0!3m2!1sen!2sin!4v1751946939555!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Decorative Gradient Bar */}
      <div className="bg-gradient-to-l from-primary to-white h-[90px] absolute bottom-10 w-4/12 left-0 -z-10"></div>
    </section>
  );
};

export default ContactUs;
