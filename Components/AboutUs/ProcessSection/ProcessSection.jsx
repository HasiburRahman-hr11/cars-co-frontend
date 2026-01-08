import Link from "next/link";
import React from "react";

const ProcessSection = () => {
  return (
    <section className="bg-black">
      <div className="container">
        <div className="py-[6rem] border-t border-t-[#7C7C7C] lg:flex lg:flex-wrap lg:justify-between xl:py-[13rem]">
          <div className="text-center section-header lg:text-left lg:w-[30%]">
            <h6 className="w-max mx-auto bg-[#202020] px-[3rem] pb-[1rem] pt-[1.3rem] text-[#AEAEAE] text-[1.3rem] uppercase rounded-[4rem] leading-[1.6] mb-[2rem] xl:text-[2rem] xl:mb-[3rem] font-medium lg:ml-0">
              The Process
            </h6>
            <h2 className="text-white leading-[1.3] text-[2.6rem] [&>br]:hidden md:[&>br]:block xl:text-[4.5rem] xl:leading-[1.2]">
              Explore more <b>about the process works </b>
            </h2>
             <span className="hidden lg:flex items-center justify-center border border-[#AEAEAE] rounded-[50%] p-[2rem] w-[8rem] h-[8rem] xl:w-[14rem] xl:h-[14rem] 1xl:w-[17rem] 1xl:h-[17rem] mt-[5rem]">
            <img src="/images/scroll-down-arrow-light.webp" alt="" className="object-contain h-[3rem] xl:h-[4.5rem] 1xl:h-[6rem] scroll-down-arrow" />
          </span>
          </div>

          <div className="mt-[4rem] max-w-[540px] mx-auto lg:w-[65%] lg:max-w-none lg:mt-0 lg:flex lg:flex-wrap lg:justify-between lg:items-center">
            <div className="lg:w-[47%]">
              <img
                src="/images/about-us/process-thumb.webp"
                alt="Thumbnail"
                className="w-full block object-cover rounded-[1.5rem]"
              />
            </div>
            <div className="mt-[3rem] text-center lg:w-[47%] lg:mt-0 lg:text-left">
              <h4 className="text-white text-[2rem] xl:text-[3.5rem]">
                A process curated for <b>seamless experience</b>{" "}
              </h4>
              <p className="mt-[1rem] text-[#636363] xl:text-[2.2rem] xl:mt-[2rem]">
                Experience a hassle-free, transparent & efficient process to
                sell your car quickly while getting top value.
              </p>
              <div className="w-max mx-auto lg:ml-0">
                <Link
                  href="#"
                  className="inline-block bg-[#FE0000] text-white text-[1.5rem] px-[3rem] py-[1.3rem]  rounded-[5rem] mt-[3rem] xl:text-[2.2rem] xl:py-[1.8rem] xl:px-[6rem] hover:bg-white hover:text-black transition-all duration-500"
                >
                  How it works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
