import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import UploadResume from "./UploadResume";

const positions = [
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" fill="currentColor" />
        <path
          d="M4 20c0-2.21 3.58-4 8-4s8 1.79 8 4"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
    title: "Pediatrician",
    subtitle: "Senior Level",
    department: "Medical",
    type: "Full Time",
    location: "Valsad",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" fill="currentColor" />
        <rect x="9" y="14" width="6" height="2" fill="currentColor" />
      </svg>
    ),
    title: "NICU Nurse",
    subtitle: "Experienced",
    department: "Nursing",
    type: "Night Shift",
    location: "Valsad",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24">
        <path
          d="M12 2C7.03 2 2 7.03 2 12c0 4.97 5.03 10 10 10s10-5.03 10-10c0-4.97-5.03-10-10-10zm0 18c-4.41 0-8-4.03-8-8 0-4.41 3.59-8 8-8s8 3.59 8 8c0 3.97-3.59 8-8 8z"
          fill="currentColor"
        />
        <path
          d="M12 6a6 6 0 016 6c0 3.31-2.69 6-6 6s-6-2.69-6-6a6 6 0 016-6z"
          fill="#fff"
        />
      </svg>
    ),
    title: "Child Psychologist",
    subtitle: "Licensed",
    department: "Psychology",
    type: "Part Time",
    location: "Valsad",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor" />
        <rect x="8" y="8" width="8" height="8" fill="#fff" />
      </svg>
    ),
    title: "Front Desk Executive",
    subtitle: "Entry Level",
    department: "Admin",
    type: "Full Time",
    location: "Valsad",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24">
        <circle cx="8" cy="12" r="2" fill="currentColor" />
        <circle cx="16" cy="12" r="2" fill="currentColor" />
        <rect x="6" y="16" width="12" height="2" fill="currentColor" />
      </svg>
    ),
    title: "Pharmacist",
    subtitle: "Licensed",
    department: "Pharmacy",
    type: "Full Time",
    location: "Valsad",
  },
];

const Position = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="w-full">
      <div className="max-w-5xl mx-auto mt-12 mb-12"  data-aos="flip-up">
        <div className="border-2 border-primary rounded-2xl overflow-hidden">
          <div className="bg-primary text-white font-bold text-lg grid grid-cols-2 sm:grid-cols-5 px-4 py-3">
            <div className="col-span-1 sm:col-span-2">Position</div>
            <div className="hidden sm:block">Department</div>
            <div className="hidden md:block">Type</div>
            <div className="col-span-1">Location</div>
            <div className="col-span-1">Action</div>
          </div>
          <div>
            {positions.map((pos, idx) => (
              <div
                key={idx}
                className="bg-white flex flex-col sm:flex-row items-center sm:items-stretch justify-between gap-4 border-b last:border-b-0 border-primary px-4 py-3 transition hover:shadow-lg"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="shrink-0">{pos.icon}</div>
                  <div>
                    <div className="font-bold text-primary text-base sm:text-lg">
                      {pos.title}
                    </div>
                    <div className="text-xs text-secondary">{pos.subtitle}</div>
                  </div>
                </div>
                <div className="hidden sm:flex items-center justify-center flex-1 text-primary">
                  {pos.department}
                </div>
                <div className="hidden md:flex items-center justify-center flex-1 text-primary">
                  {pos.type}
                </div>
                <div className="flex items-center justify-center flex-1 gap-1 text-primary">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2a6 6 0 016 6c0 4.418-6 10-6 10S4 12.418 4 8a6 6 0 016-6zm0 8a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                  <span>{pos.location}</span>
                </div>
                <div className="flex items-center justify-center flex-1">
                  <button className="bg-primary text-white font-bold px-4 py-2 rounded-lg hover:bg-fuchsia-800 transition text-sm">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <UploadResume />
    </div>
  );
};

export default Position;
