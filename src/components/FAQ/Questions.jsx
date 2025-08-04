import React, { useEffect, useState, } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bg from "../../assets/FAQ/Mask_group(1).png";

const faqs = [
  {
    question: "How can I schedule an appointment?",
    answer:
      "You can schedule an appointment by calling our reception or using our online appointment system on the website.",
  },
  {
    question: "What is the process for rescheduling or canceling appointments?",
    answer:
      "To reschedule or cancel, please contact our front desk at least 24 hours in advance or use the appointment management portal.",
  },
  {
    question: "How can I obtain information about billing and payment options?",
    answer:
      "Billing and payment information is available at our billing counter or you can contact our accounts department for details.",
  },
  {
    question: "Does Aansh Hospital offer Interpreter Service?",
    answer:
      "Yes, interpreter services are available upon request. Please inform us in advance if you need assistance.",
  },
  {
    question: "Is there a waiting area for family and friends?",
    answer:
      "Yes, we have a comfortable waiting area for family and friends with amenities.",
  },
  {
    question:
      "Is there a facility available for getting tests done at Aansh Hospital?",
    answer:
      "Yes, we have an in-house diagnostic center for various tests and investigations.",
  },
];

const Questions = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  });
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className=" flex flex-col md:flex-row gap-8 py-10 container mx-auto">
      {/* Left Side: FAQ Intro and Card */}
      <div className="flex-1 flex flex-col gap-8">
        <div>
          <h2
            className="text-3xl md:text-5xl font-bold text-primary mb-2"
            data-aos="fade-down"
          >
            Frequently Asked
            <br />
            Questions
          </h2>
          <p className="text-secondary max-w-md" data-aos="fade-down">
            Find answers to frequently asked questions about your child's care,
            including vaccination schedules, visiting hours, appointments, and
            more. Designed to support parents with clear, helpful information
            every step of the way.
          </p>
        </div>
        <div
          className="bg-white border-2 border-blue-300 rounded-xl shadow p-6 max-w-md"
          data-aos="fade-down"
        >
          <h3 className="text-2xl font-bold text-primary mb-2">
            Still have a Question?
          </h3>
          <p className="text-secondary mb-4">
            Can't find the answer to your question? Send us an email and we'll
            get back to you as soon as possible!
          </p>
          <a
            href="mailto:drashishgamit9@gmail.com"
            className="bg-primary text-white font-bold px-6 py-2 rounded-lg hover:bg-primary/80 transition"
          >
            Send Email
          </a>
        </div>
      </div>
      {/* Right Side: FAQ Accordions */}
      <div className="flex-1 flex flex-col gap-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow p-4"
            data-aos="fade-down"
          >
            <button
              className="flex justify-between items-center w-full text-left font-bold text-primary text-base md:text-lg focus:outline-none"
              onClick={() => handleToggle(idx)}
            >
              <span>{faq.question}</span>
              <svg
                className={`w-6 h-6 transform transition-transform duration-200 ${
                  openIndex === idx ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === idx && (
              <div className="mt-2 text-secondary text-sm md:text-base">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
