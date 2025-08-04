import React from "react";
import HeaderHomeImg1 from "../../assets/headerAboutImg.png";
import HeaderLower from "../../assets/HeaderLower.svg";
import { IoCalendar } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";

const AboutHeader = () => {
  return (
    <section
      className="relative mt-[63px] md:mt-[80px] px-0 w-full h-[210px] sm:h-[320px] md:h-[310px] lg:h-[420px] xl:h-[650px] bg-cover bg-center"
      style={{ backgroundImage: `url(${HeaderHomeImg1})` }}
    >
      {/* Optional Text/CTA Section */}
      <div className="absolute container sm:mb-20 inset-0 flex items-center justify-start ">
        <div className="space-y-1 md:space-y-5">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl xl:text-8xl text-start text-SecondPrimary leading-tight">
            About Us
          </h1>
        </div>
      </div>

      {/* Decorative Bottom Overlay */}
      <div className=" hidden md:block absolute bottom-0 right-0 bg-SecondPrimary py-2 sm:py-4 xl:py-5 w-3/5 xl:w-[1099px] ">
        <div className="grid grid-cols-3 xl:gap-x-3 xl:w-4/5 pb-2 sm:pb-5 xl:pb-12">
          <div className="text-white text-xs xl:text-xl text-right felx flex-col items-end  ">
            <IoCalendar className="text-xl xl:text-4xl ml-auto sm:mb-1" />
            <h1 className="font-semibold sm:font-bold">
              Book An <br className="sm:hidden" /> Appointment
            </h1>
            <h1 className="font-light text-[9.5px] xl:text-lg leading-tight">
              For world-class assistance
            </h1>
          </div>
          <div className="text-white text-xs xl:text-xl text-right felx flex-col items-end  ">
            <IoMdContact className="text-xl xl:text-4xl ml-auto sm:mb-1" />
            <h1 className=" sm:font-bold">
              Get a Second <br className="sm:hidden" /> Opinion
            </h1>
            <h1 className="font-light text-[9.5px] xl:text-lg leading-tight">
              For well-informed medical decision
            </h1>
          </div>
          <div className="text-white text-right flex flex-row items-center justify-start gap-4 px-4 sm:px-6">
            <div className="h-full bg-white w-[6px] min-h-[30px] sm:min-h-[40px]"></div>
            <h1 className="font-bold text-[8px] xl:text-lg">
              Simplify your wellness journey with a click
            </h1>
          </div>
        </div>
      </div>

      {/* HeaderLower Overlay */}
      <img
        src={HeaderLower}
        alt="Lower Decoration"
        className="absolute -bottom-1.5 sm:-bottom-3 xl:-bottom-6 w-full left-0  pointer-events-none"
      />
    </section>
  );
};

export default AboutHeader;
