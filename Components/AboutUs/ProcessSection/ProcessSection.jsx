import Link from "next/link";
import React from "react";

const ProcessSection = () => {
  return (
    <section className="bg-black">
      <div className="container">
        <div className="py-[6rem] border-t border-t-[#7C7C7C]">
          <div className="text-center section-header">
            <h6 className="w-max mx-auto bg-[#202020] px-[3rem] py-[1.4rem] text-[#AEAEAE] text-[1.3rem] uppercase rounded-[4rem] leading-1 mb-[2rem] xl:text-[2rem] xl:leading-[1] xl:mb-[3rem] font-medium">
              The Process
            </h6>
            <h2 className="text-white leading-[1.3] text-[2.6rem] [&>br]:hidden md:[&>br]:block xl:text-[4.5rem] xl:leading-[1.2]">
              Explore more <b>about the process works </b>
            </h2>
          </div>

          <div className="mt-[4rem] max-w-[540px] mx-auto">
            <div>
              <img
                src="/images/about-us/process-thumb.webp"
                alt="Thumbnail"
                className="w-full block object-cover rounded-[1.5rem]"
              />
            </div>
            <div className="mt-[3rem] text-center">
              <h4 className="text-white text-[2rem] xl:text-[4.5rem]">
                A process curated for <b>seamless experience</b>{" "}
              </h4>
              <p className="mt-[1rem] text-[#636363] xl:text-[2.2rem] xl:mt-[2rem]">
                Experience a hassle-free, transparent & efficient process to
                sell your car quickly while getting top value.
              </p>
              <div className="w-max mx-auto">
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
