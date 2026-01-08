import React from "react";

const bannerUsps = [
  {
    icon: "/images/about-us/banner-usp-1.webp",
    title: "Transparency",
    subtitle: "Clear deals, no hidden terms.",
  },
  {
    icon: "/images/about-us/banner-usp-2.webp",
    title: "Reliability",
    subtitle: "Verified cars you can trust.",
  },
  {
    icon: "/images/about-us/banner-usp-3.webp",
    title: "Affordability",
    subtitle: "Luxury within your reach.",
  },
  {
    icon: "/images/about-us/banner-usp-4.webp",
    title: "Excellence",
    subtitle: "Premium service at every step.",
  },
];

const BannerSection = () => {
  return (
    <section className="bg-[#1B1A1D] text-white relative overflow-hidden">
      <div className="relative">
        <img
          src="/images/about-us/banner-image-desktop.webp"
          width="1920"
          height="1000"
          alt="Banner Image"
          className="hidden w-full h-full object-cover sm:block min-h-[500px]"
        />
        <img
          src="/images/about-us/banner-image-desktop.webp"
          width="640"
          height="1280"
          alt="Banner Image"
          className="w-full object-cover block sm:hidden h-[90vh] min-h-[500px]"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between pt-[9rem] xl:pt-[15rem] 3xl:pt-[20rem]">
        <div className="container ">
          <div className="text-center xl:max-w-[79rem] 1xl:mx-auto">
            <h6 className="w-max mx-auto bg-white px-[3rem] pb-[1rem] pt-[1.3rem] text-black text-[1.3rem] uppercase rounded-[4rem] leading-[1.6] mb-[2rem] xl:text-[2rem] xl:mb-[3rem] font-[600]">
              About Us
            </h6>
            <h1 className="text-[#ffffff] text-center text-[3rem] font-[500] leading-[1.3] xl:text-[6rem] lx:leading-[1.1] ">
              Driving Luxury, Redefining Affordability
            </h1>
            <p className="mt-[1rem] text-white xl:text-[2.2rem] xl:mt-[2rem]">
              At Cars.co.in, we believe luxury should be real—always within your
              reach.
            </p>
          </div>
        </div>
        <div className="container">
          <ul className="flex flex-wrap justify-between pb-[4rem] gap-y-[2.5rem] max-w-[500px] mx-auto md:max-w-none md:justify-between xl:mx-[-6rem] [&>li:first-child]:border-l-0 [&>li:last-child]:pr-0 2xl:mx-[-12rem] 3xl:mx-[-15rem]">
            {bannerUsps.map((usp, index) => (
              <li
                key={index}
                className="flex w-[48%] md:w-[23%] xl:w-[25%] xl:px-[3rem] xl:border-l xl:border-l-[#D9D9D9] xl:items-center 1xl:pl-[4rem]"
              >
                <span className="icon w-[2.8rem] inline-block mt-[0.6rem] xl:w-[4rem] 1xl:w-[5rem] xl:mt-0">
                  <img
                    src={usp?.icon}
                    alt="Icon"
                    className="object-contain max-w-full"
                  />
                </span>
                <div className="flex-1 pl-[1rem] xl:pl-[2rem]">
                  <h6 className="text-white text-[1.6rem] xl:text-[2.5rem] 1xl:text-[2.8rem] font-[600]">
                    {usp.title}
                  </h6>
                  <p className="text-[#BDBEBE] text-[1.1rem] xl:text-[1.55rem] xl:mt-[0.5rem] 1xl:text-[2rem]">
                    {usp.subtitle}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
