import React from "react";

const usps = [
  {
    icon: "/images/list-cars/why-us-usp-1.webp",
    title: "Maximum Visibility, & Offers",
  },
  {
    icon: "/images/list-cars/why-us-usp-2.webp",
    title: "Instant & Transparent Pricing",
  },
  {
    icon: "/images/list-cars/why-us-usp-3.webp",
    title: "Hassle-Free Selling Experience",
  },
  {
    icon: "/images/list-cars/why-us-usp-4.webp",
    title: "Secure and Reliable Transactions",
  },
];

const WhyUs = () => {
  return (
    <section className="bg-black py-[6rem] overflow-hidden xl:py-[13rem]">
      <div className="container">
        <div className="flex flex-wrap justify-between">
          <div className="w-full text-center">
            <h6 className="w-max mx-auto bg-[#202020] px-[3rem] py-[1.4rem] text-[#AEAEAE] text-[1.3rem] uppercase rounded-[4rem] leading-1 mb-[2rem] xl:text-[2rem] xl:leading-[1] xl:mb-[3rem]">
              Why choose us ?
            </h6>
            <h2 className="text-white leading-[1.3] text-[2.6rem] [&>br]:hidden md:[&>br]:block xl:text-[4.5rem] xl:leading-[1.2]">
              Because Your Car <b>Shouldn’t Wait to Sell</b>
            </h2>
            <p className="mt-[1rem] text-[#818181] xl:text-[2.2rem] xl:mt-[2rem]">
              List your car with us and experience a faster, smarter, and
              hassle-free selling journey. Enjoy maximum visibility, instant
              price evaluations, secure transactions, and professional support
              that ensures you get the best value effortlessly.
            </p>
            <img
              src="/images/list-cars/why-us-logo.webp"
              alt=""
              className="object-contain max-w-[20rem] inline-block mx-auto mt-[5rem]"
            />
          </div>
          <div className="w-full">
            <ul className="list-none grid grid-cols-2 gap-[2rem] mt-[5rem]">
              {usps.map((usp, index) => (
                <li key={index} className="text-center bg-[#212121] flex flex-col items-center py-[3rem] px-[1rem] rounded-[1rem] text-white">
                  <img
                    src={usp.icon}
                    alt="USP Icon"
                    className="object-contain w-[8rem] h-[8rem]"
                  />
                  <span className="block font-medium mt-[2rem] text-[1.8rem] xl:text-[2.8rem]">{usp.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
