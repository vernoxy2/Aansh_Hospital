import React from "react";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center xl:gap-40 py-10 px-2 md:px-8">
        {/* Contact Card */}
        <div className="bg-white shadow-lg border-2  p-8 max-w-md w-full mb-6 md:mb-0">
          <h2 className="text-3xl font-bold text-primary mb-2 font-primary">
            Need Any Help?
          </h2>
          <p className="text-gray-500 mb-6 font-secondary">
            We're Just a Message Away – Let's Talk!
          </p>
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-primary text-white rounded-full p-3 flex items-center justify-center">
              {/* Phone Icon */}
              <svg
                className="w-6 h-6"
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
            <div>
              <div className="font-bold text-primary">Call Us</div>
              <div className="text-secondary text-sm sm:text-base">
                08735019584
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-primary text-white rounded-full p-3 flex items-center justify-center">
              {/* Email Icon */}
              <svg
                className="w-6 h-6"
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
            <div>
              <div className="font-bold text-primary">Email</div>
              <a
                href="mailto:drashishgamit9@gmail.com"
                className=" underline text-secondary break-all text-sm sm:text-base"
              >
                drashishgamit9@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-primary text-white rounded-full p-3 flex items-center justify-center">
              {/* Location Icon */}
              <svg
                className="w-6 h-6"
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
            <div>
              <div className="font-bold text-primary">Address</div>
              <div className="text-secondary text-sm sm:text-base">
                Aansh Children's Hospital
                <br />
                beside Yes Bank, Kapadia Chal,
                <br />
                Valsad, Gujarat 396001
              </div>
            </div>
          </div>
        </div>
        {/* Google Map */}
        <div className="w-full max-w-3xl h-80 rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <iframe
            title="Aansh Children's Hospital Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.123456789!2d72.9281234!3d20.6101234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zMjDCsDM2JzM2LjQiTiA3MsKwNTUnNDIuNSJF!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactUs;
