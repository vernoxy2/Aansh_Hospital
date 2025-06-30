import React from "react";
import headerHomeImg from "../../assets/headerHomeImg.png";
import whoWeAreImg from "../../assets/baby.png";
import OurService from "../../components/Home/OurService";
import OurFacilities from "../../components/Home/OurFacilities";
import WhyChooseUs from "../../components/Home/WhyChooseUs";
import CuttingEdge from "../../components/Home/CuttingEdge";

const Home = () => {
  return (
    <div className="">
      <div>
        <img src={headerHomeImg} alt="" />
      </div>
      <div className="py-5">
        <div>
          <h1 className="text-[#A82682] font-bold text-2xl lg:text-6xl text-center lg:mt-12">
            Who We are
          </h1>
        </div>
        <div className="xl:flex grid justify-between lg:p-20">
          <div className="lg:pt-16 xl:space-y-10 xl:pl-20">
            <h1 className="text-[#A82682] text-2xl lg:text-6xl xl:text-left text-center font-bold">
              Where Every Baby's <br className="hidden xl:inline"/> Smile Begins.
            </h1>
            <p className="text-[#BAB8B8] text-xl lg:text-2xl lg:w-[700px] xl:text-left text-center">
              We are dedicated to nurturing little ones with compassion, safety,
              and care. From their first moments to every milestone, our team is
              committed to providing a loving environment where your child can
              thrive. With expert knowledge, gentle hands, and a whole lot of
              heart, we support parents in giving their babies the healthiest,
              happiest start in life.
            </p>
          </div>
          <div>
            <img src={whoWeAreImg} alt="" />
          </div>
        </div>
        <div>
          <OurService/>
        </div>
        <div className="mt-5 xl:mt-20">
          <OurFacilities />
        </div>
        <div className="mt-5 xl:mt-20">
          <WhyChooseUs/>
        </div>
        <div className="mt-5 xl:mt-20">
          <CuttingEdge />
        </div>
      </div>
    </div>
  );
};

export default Home;
