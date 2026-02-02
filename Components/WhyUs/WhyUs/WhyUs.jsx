import React from "react";

const usps = [
  {
    icon: "/images/buy-cars/intro-usp-1.webp",
    title: `Maximum <br> Visibility, & Offers`,
  },
  {
    icon: "/images/buy-cars/intro-usp-2.webp",
    title: `Instant <br> Assistance`,
  },
  {
    icon: "/images/buy-cars/intro-usp-3.webp",
    title: `Best Market <br> Deals`,
  },
  {
    icon: "/images/buy-cars/intro-usp-4.webp",
    title: `Secure <br> Payments`,
  },
];

const WhyUs = () => {
  return (
    <section className="bg-black py-[6rem] overflow-hidden xl:py-[13rem]">
      <div className="container">
        <div className="w-full text-center lg:w-[65%] mx-auto">
          <h6 className="w-max mx-auto bg-[#202020] px-[3rem] py-[1.4rem] text-[#AEAEAE] text-[1.3rem] uppercase rounded-[4rem] leading-1 mb-[2rem] xl:text-[2rem] xl:leading-[1] xl:mb-[3rem]">
            Why Buy From Us
          </h6>
          <h2 className="text-white leading-[1.3] text-[2.6rem] [&>br]:hidden md:[&>br]:block xl:text-[4.5rem] xl:leading-[1.2]">
            Because Buying a <br /> <b>Car Should Be Stress-Free.</b>
          </h2>
          <p className="mt-[1rem] text-[#818181] xl:text-[2.2rem] xl:mt-[2rem]">
            Buying a car should be exciting—not confusing. We ensure trusted
            listings, expert guidance, secure payments, and the best deals, so
            you enjoy a smooth, transparent, and stress-free car-buying
            experience.
          </p>
        </div>

        <ul className="list-none grid grid-cols-2 mt-[5rem] gap-[2rem] md:grid-cols-4 lg:mb-[5rem] lg:w-[80%] mx-auto">
          {usps.map((usp, index) => (
            <li
              key={index}
              className="text-center px-[1.5rem] relative bg-[#111111] rounded-[1rem] py-[3rem] lg:bg-transparent lg:mt-[5rem] lg:odd:mt-[15rem] xl:odd:mt-[20rem]"
            >
              <img
                src={usp.icon}
                alt="USP Icon"
                className="object-contain inline-block w-[6rem] h-[6rem] mx-auto xl:w-[10rem] xl:h-[8rem]"
              />
              <h6
                className="text-white text-[1.7rem] xl:text-[2.8rem] font-medium mt-[2rem]"
                dangerouslySetInnerHTML={{ __html: usp.title }}
              ></h6>
              <img
                src="/images/buy-cars/usp-pulse.webp"
                alt="Pulse Icon"
                className="object-contain hidden absolute left-0 top-[3rem] w-[2.5rem] lg:inline-block xl:w-[3.4rem]"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyUs;
