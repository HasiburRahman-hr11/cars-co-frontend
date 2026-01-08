import Link from "next/link";
import React from "react";

const BottomBanner = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-box h-full">
        <img
          src="/images/about-us/body-banner-bg-desktop.webp"
          width="1920"
          height="1000"
          alt="Banner Image"
          className="hidden w-full h-auto object-cover sm:block min-h-[500px]"
        />
        <img
          src="/images/about-us/body-banner-bg-desktop.webp"
          width="640"
          height="1280"
          alt="Banner Image"
          className="w-full object-cover block sm:hidden h-[90vh] min-h-[500px]"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col pt-[8rem] md:justify-center md:py-[8rem]">
        <div className="container text-center md:text-left">
          <div className="w-full max-w-[540px] mx-auto md:ml-0 lg:max-w-none lg:w-[57%] xl:w-[63%] 1xl:w-[55%]">
            <h6 className="w-max mx-auto bg-[#202020] px-[3rem] pb-[1rem] pt-[1.3rem] text-[#AEAEAE] text-[1.3rem] uppercase rounded-[4rem] leading-[1.6] mb-[2rem] xl:text-[2rem] xl:mb-[3rem] font-medium md:ml-0">
              start your journey
            </h6>
            <h2 className="text-black leading-[1.3] text-[2.6rem] [&>br]:hidden md:[&>br]:block xl:text-[4.5rem] xl:leading-[1.2] lg:w-[80%] xl:w-[75%]">
             <b>Your journey starts here,</b> unlocking trust & premium car ownership.
            </h2>
            <p className="mt-[2rem] text-black xl:text-[2.2rem]">
              Your journey starts here with Cars.co.in, where trust meets
              luxury. From verified dealers to seamless processes, we make
              premium car ownership effortless, reliable, and rewarding for
              every aspiring enthusiast across India.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-[1rem] md:justify-start mt-[3rem] xl:mt-[5rem]">
              <Link
                href="#"
                className="inline-block bg-[#FE0000] text-white text-[1.5rem] px-[3rem] py-[1.3rem]  rounded-[5rem] xl:text-[2.2rem] xl:py-[1.8rem] xl:px-[6rem] hover:bg-white hover:text-black transition-all duration-500"
              >
                Buy Cars
              </Link>
              <Link
                href="#"
                className="inline-block bg-[transparent border border-black text-black text-[1.5rem] px-[3rem] py-[1.3rem]  rounded-[5rem] xl:text-[2.2rem] xl:py-[1.8rem] xl:px-[6rem] hover:bg-black hover:text-white transition-all duration-500"
              >
                List Cars
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomBanner;
