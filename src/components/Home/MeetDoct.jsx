import React from "react";
import MeetImg from "../../assets/MeetImg.webp";
import LazyImage from "../LazyImage";

const MeetDoct = () => {
  return (
    <section className="py-8 md:py-16">
      <div className="container pr-0 grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Image Section */}
        <div className="order-2 lg:order-1">
          <LazyImage src={MeetImg} alt="" className="w-[80%] mx-auto" loading="lazy" />
        </div>

        {/* Text Section */}
        <div className="order-1 lg:order-2 text-right space-y-6 lg:space-y-14 my-auto">
          <div className="bg-gradient-to-r from-primary to-[#737373]/10 h-[60px]"></div>
          <h1 className="text-primary text-center lg:text-right text-2xl lg:text-5xl font-bold container">
            Meet Our Doctor
          </h1>
          <p className="text-secondary text-center lg:text-right md:text-xl lg:text-2xl leading-snu container pl-0 pb-14 lg:pb-0" >
            With years of experience and a commitment to holistic healing, our
            doctor provides personalized care that blends traditional wisdom
            with modern medical practices. Dedicated to your health and
            well-being, he ensures every patient receives compassionate guidance
            and effective treatment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MeetDoct;
