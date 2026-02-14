import React from "react";
import whoWeAreImg from "../../assets/baby.png";
import LazyImage from "../LazyImage";

const WeAre = () => {
  return (
    <section className="py-8 md:py-16">
      <div className="container space-y-6 md:space-y-12">
        <h1
          className="text-primary font-bold text-4xl md:text-5xl xl:text-6xl text-center"
          data-aos="fade-up"
        >
          Who We Are
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 md:gap-y-10 items-center">
          {/* Text Content */}
          <div
            className="lg:pt-16 space-y-6 xl:space-y-10 text-center lg:text-left px-4 md:px-0"
            data-aos="fade-right"
          >
            <h2 className="text-primary text-2xl lg:text-5xl font-bold px-6 lg:px-0">
              Where Every Baby’s Smile Begins.
            </h2>
            <p className="text-secondary  md:text-xl lg:text-2xl leading-snug">
              We are dedicated to nurturing little ones with compassion, safety, and care.
              From their first moments to every milestone, our team is committed to providing
              a loving environment where your child can thrive. With expert knowledge,
              gentle hands, and a whole lot of heart, we support parents in giving their babies
              the healthiest, happiest start in life.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end " data-aos="fade-left">
            <LazyImage
              src={whoWeAreImg}
              alt="Happy baby"
              className="h-[320px] md:h-[400px] xl:h-[420px] object-contain "
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeAre;
