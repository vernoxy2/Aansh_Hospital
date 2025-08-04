import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import support from "../../assets/about/support.png";
import hygiene from "../../assets/about/hygiene.png";
import comfort from "../../assets/about/comfort.png";

const caringData = [
  {
    id: 1,
    title: "Support",
    description:
      "Friendly hospital staff providing dedicated support, guidance, and care to families for a better experience.",
    image: support,
  },
  {
    id: 2,
    title: "Hygiene",
    description:
      "Dedicated staff ensure hospital cleanliness and strict hygiene protocols for a safe and healthy environment.",
    image: hygiene,
  },
  {
    id: 3,
    title: "Comfort",
    description:
      "Comfortable, well-equipped room providing warmth and care for mothers and newborns.",
    image: comfort,
  },
];

const Caring = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  });
  return (
    <div className="w-full py-8 md:py-16 space-y-4 md:space-y-10">
      <h2
        className="text-primary text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-12"
        data-aos="fade-up"
      >
        Caring Beyond Treatment.
      </h2>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-20">
        {caringData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center w-full max-w-xs"
            data-aos="flip-down"
          >
            {/* Circle image with magenta border and dots */}
            <div className="relative flex items-center justify-center mb-6">
              {/* Outer magenta border */}
              <div className=" flex items-center justify-center">
                {/* Actual image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-full w-80 h-80 object-cover"
                />
              </div>
            </div>
            {/* Title */}
            <h3 className="text-primary text-xl md:text-2xl font-bold mb-2 text-center">
              {item.title}
            </h3>
            {/* Description */}
            <p className="text-secondary text-base md:text-lg font-medium text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Caring;
