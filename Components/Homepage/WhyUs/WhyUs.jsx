import React from "react";

const usps = [
  {
    title: "Sales support &  warranty",
    icon: "/images/homepage/hp-why-us-icon-1.webp",
  },
  {
    title: "Certified quality assurance",
    icon: "/images/homepage/hp-why-us-icon-2.webp",
  },
  {
    title: "Tailored financing options",
    icon: "/images/homepage/hp-why-us-icon-3.webp",
  },
  {
    title: "Transparent history reports",
    icon: "/images/homepage/hp-why-us-icon-4.webp",
  },
  {
    title: "Expert vehicle maintenance",
    icon: "/images/homepage/hp-why-us-icon-5.webp",
  },
];

const WhyUs = () => {
  return (
    <section className="bg-black py-[6rem] overflow-hidden xl:py-[13rem]">
      <div className="container">
        <div className="text-center section-header">
          <h6 className="w-max mx-auto bg-[#202020] px-[3rem] py-[1.4rem] text-[#AEAEAE] text-[1.3rem] uppercase rounded-[4rem] leading-1 mb-[2rem] xl:text-[2rem] xl:leading-[1] xl:mb-[3rem]">
            Why choose us ?
          </h6>
          <h2 className="text-white leading-[1.3] text-[2.6rem] [&>br]:hidden md:[&>br]:block xl:text-[4.5rem] xl:leading-[1.2]">
            Why we are trusted as{" "}
            <strong>
              leaders <br /> in luxury cars?
            </strong>
          </h2>
          <p className="mt-[1rem] text-[#818181] xl:text-[2.2rem] xl:mt-[2rem]">
            We're the leading brand in affordable luxury cars, built on
            innovation, trust, and excellence.
          </p>
        </div>

        <div className="hp-whyus-usp flex flex-wrap gap-y-[1.5rem] gap-x-[4%] mt-[4rem] justify-center sm:grid sm:grid-cols-3 sm:gap-[2rem] lg:max-w-[768px] lg:mx-auto xl:max-w-none xl:mt-[9rem] xl:grid-cols-5 xl:gap-x-0">
          {usps.map((usp, index) => (
            <div
              key={index}
              className="hp-whyus-usp-item relative  w-[48%] sm:w-full md:min-h-[23rem] bg-[#212121] px-[1.5rem] py-[3rem] text-center rounded-[1rem] flex flex-col items-center md:flex md:flex-col md:justify-center xl:py-[5rem] xl:rounded-[1.8rem] xl:min-h-[29rem]"
            >
              <img
                src={usp.icon}
                alt={usp.title}
                className="object-contain max-h-[6.9rem] max-w-[6.5rem] xl:max-w-[12rem] xl:max-h-[10rem]"
              />
              <span className="block text-[1.6rem] text-white mt-[1.5rem] font-medium md:w-[75%] xl:w-full xl:text-[2.7rem] xl:mt-[2.5rem] xl:tracking-tight">
                {usp.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
