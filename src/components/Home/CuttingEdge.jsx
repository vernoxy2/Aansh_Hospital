import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    value: 40,
    suffix: "+",
    label: "Years in Serving Women & Children",
  },
  {
    value: 30,
    suffix: "k",
    label: "Healthy Babies Delivered",
  },
  {
    value: 30,
    suffix: "k",
    label: "New Born Sent Home From NICU",
  },
  {
    value: 12,
    suffix: "k",
    label: "Children Sent Home From PICU",
  },
];

const CuttingEdge = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when it enters view
    threshold: 0.3, // Percentage of component visible before triggering
  });

  return (
    <div ref={ref} className="mt-10  w-full hidden xl:block">
      <h1 className="text-primary text-3xl sm:text-4xl xl:text-6xl font-bold font-kulim text-center">
        Cutting-edge pediatric care
      </h1>

      <div className="w-full h-[300px] bg-primary flex flex-row items-center justify-center gap-6 sm:gap-12 md:gap-24 mt-44">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center text-center -mt-48"
          >
            <div className="h-[250px] w-[250px] bg-white rounded-full flex items-center justify-center">
              <div className="h-[210px] w-[210px] border-[10px] border-primary rounded-full flex items-center justify-center">
                <div className="h-[170px] w-[170px] bg-white rounded-full border border-gray-300 shadow-lg flex items-center justify-center">
                  <h2 className="text-primary text-[40px] sm:text-[50px] md:text-[60px] font-bold font-kulim">
                    {inView && (
                      <CountUp
                        end={item.value}
                        duration={5.5}
                        separator=","
                        suffix={item.suffix}
                      />
                    )}
                  </h2>
                </div>
              </div>
            </div>
            <p className="text-white text-base sm:text-lg md:text-xl font-bold font-kulim mt-4 w-[180px] sm:w-[200px] leading-tight">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CuttingEdge;



/* 
import React from "react";

const stats = [
  {
    value: "40+",
    label: "Years in Serving Women & Children",
  },
  {
    value: "30k",
    label: "Healthy Babies Delivered",
  },
  {
    value: "30k",
    label: "New Born Sent Home From NICU",
  },
  {
    value: "12k",
    label: "Children Sent Home From PICU",
  },
];

const CuttingEdge = () => {
  return (
    <div className="my-10 w-full overflow-x-hidden">
      <h1 className="text-[#A82682] text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-bold font-kulim text-center">
        Cutting-edge pediatric care
      </h1>

      <div className="w-full bg-[#A82682] py-10 mt-20 sm:mt-28 lg:mt-36 flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16 px-4">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center text-center"
          >
            <div className="h-[180px] w-[180px] sm:h-[200px] sm:w-[200px] md:h-[230px] md:w-[230px] lg:h-[250px] lg:w-[250px] bg-white rounded-full flex items-center justify-center">
              <div className="h-[150px] w-[150px] sm:h-[170px] sm:w-[170px] md:h-[190px] md:w-[190px] lg:h-[210px] lg:w-[210px] border-[8px] sm:border-[10px] border-[#A82682] rounded-full flex items-center justify-center">
                <div className="h-[120px] w-[120px] sm:h-[140px] sm:w-[140px] md:h-[160px] md:w-[160px] lg:h-[170px] lg:w-[170px] bg-white rounded-full border border-gray-300 shadow-lg flex items-center justify-center">
                  <h2 className="text-[#A82682] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-bold font-kulim">
                    {item.value}
                  </h2>
                </div>
              </div>
            </div>
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold font-kulim mt-4 max-w-[180px] leading-tight">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CuttingEdge;

*/
