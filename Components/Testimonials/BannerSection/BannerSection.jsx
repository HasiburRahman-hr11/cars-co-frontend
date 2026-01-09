import React from "react";

const BannerSection = () => {
  return (
    <section className="bg-black text-white relative overflow-hidden">
      <div className="relative max-w-[1920px] mx-auto">
        <img
          src="/images/testimonials/banner-image.webp"
          width="1920"
          height="1000"
          alt="Banner Image"
          className="hidden w-full h-full object-cover sm:block min-h-[60rem] 3xl:h-[100rem]"
        />
        <img
          src="/images/testimonials/banner-image.webp"
          width="640"
          height="1280"
          alt="Banner Image"
          className="w-full object-cover block sm:hidden h-[90vh] min-h-[60rem]"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-start pt-[12rem] lg:pt-[15rem] 3xl:pt-[20rem]">
        <div className="container relative">
          <div className="text-center lg:max-w-[56rem] xl:max-w-[85rem] mx-auto">
            <h6 className="w-max mx-auto bg-white px-[3rem] pb-[0.5rem] pt-[0.8rem] text-black text-[1.3rem] uppercase rounded-[4rem] leading-[1.6] mb-[2rem] xl:text-[2rem] xl:mb-[3rem] font-[500] lg:mt-[2rem] xl:mt-[8rem]">
              Testimonials
            </h6>
            <h1 className="text-[#ffffff] text-center text-[3rem] font-[500] [&>br]:hidden lg:[&>br]:block leading-[1.3] xl:text-[6rem] lx:leading-[1.1] ">
              Real Stories From Real <br /> Customers
            </h1>
            <p className="mt-[1rem] text-white xl:text-[2.2rem] xl:mt-[2rem]">
              Hear genuine experiences shared by homeowners who chose Pavilion,
              reflecting satisfaction, trust, and the lifestyle they now proudly
              enjoy.
            </p>
          </div>
          <div className="flex flex-wrap justify-center mt-[5rem] gap-[3rem] max-w-[540px] mx-auto lg:block lg:absolute lg:w-[30%] lg:left-[3rem] lg:top-[-3vw] lg:mt-0 xl:left-0 xl:top-0 3xl:left-[-4rem]">
            <span className="avatar pulse w-[8rem] h-[8rem] border-4 inline-block border-white rounded-[1rem] overflow-hidden lg:absolute left-0 top-0 lg:w-[8vw] lg:h-[8vw] 3xl:w-[13rem] 3xl:h-[13rem]">
              <img
                src="/images/testimonials/banner-avatar-1.webp"
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </span>
            <span className="avatar pulse w-[8rem] h-[8rem] border-4 inline-block border-white rounded-[50%] overflow-hidden lg:absolute left-[12vw] lg:top-[4vw] lg:w-[7vw] lg:h-[7vw] 3xl:w-[12rem] 3xl:h-[12rem] 3xl:left-[20rem] 3xl:top-[8rem]">
              <img
                src="/images/testimonials/banner-avatar-2.webp"
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </span>
            <span className="avatar pulse w-[8rem] h-[8rem] border-4 inline-block border-white rounded-[1rem] overflow-hidden lg:absolute left-[8vw] lg:top-[14vw] lg:w-[11vw] lg:h-[11vw] xl:w-[10vw] xl:h-[10vw] 3xl:w-[17rem] 3xl:h-[17rem] 3xl:left-[15rem] 3xl:top-[26rem]">
              <img
                src="/images/testimonials/banner-avatar-3.webp"
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </span>
            <span className="avatar pulse w-[8rem] h-[8rem] border-4 inline-block border-white rounded-[50%] overflow-hidden lg:absolute left-0 lg:top-[27vw] lg:w-[7vw] lg:h-[7vw] 3xl:w-[12rem] 3xl:h-[12rem] 3xl:top-[47rem]">
              <img
                src="/images/testimonials/banner-avatar-4.webp"
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </span>
            <span className="avatar pulse w-[8rem] h-[8rem] border-4 inline-block border-white rounded-[1rem] overflow-hidden lg:absolute left-[18vw] lg:top-[29vw] lg:w-[8vw] lg:h-[8vw] 3xl:w-[12rem] 3xl:h-[12rem] 3xl:left-[38rem] 3xl:top-[55rem]">
              <img
                src="/images/testimonials/banner-avatar-5.webp"
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </span>
          </div>

          <div className="hidden md:flex flex-wrap justify-center gap-[3rem] mt-[3rem] max-w-[540px] mx-auto lg:block lg:absolute lg:w-[30%] lg:right-[3rem] lg:top-[-3vw] lg:mt-0 xl:right-0 xl:top-0 3xl:right-[-4rem]">
            <span className="avatar pulse w-[7rem] h-[7rem] border-4 inline-block border-white rounded-[1rem] overflow-hidden lg:absolute right-0 top-0 lg:w-[8vw] lg:h-[8vw] 3xl:w-[13rem] 3xl:h-[13rem]">
              <img
                src="/images/testimonials/banner-avatar-6.webp"
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </span>
            <span className="avatar pulse w-[7rem] h-[7rem] border-4 inline-block border-white rounded-[50%] overflow-hidden lg:absolute right-[12vw] lg:top-[4vw] lg:w-[7vw] lg:h-[7vw] 3xl:w-[12rem] 3xl:h-[12rem] 3xl:right-[20rem] 3xl:top-[8rem]">
              <img
                src="/images/testimonials/banner-avatar-7.webp"
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </span>
            <span className="avatar pulse w-[7rem] h-[7rem] border-4 inline-block border-white rounded-[1rem] overflow-hidden lg:absolute right-[8vw] lg:top-[14vw] lg:w-[11vw] lg:h-[11vw] xl:w-[10vw] xl:h-[10vw] 3xl:w-[17rem] 3xl:h-[17rem] 3xl:right-[15rem] 3xl:top-[26rem]">
              <img
                src="/images/testimonials/banner-avatar-8.webp"
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </span>
            <span className="avatar pulse w-[7rem] h-[7rem] border-4 inline-block border-white rounded-[50%] overflow-hidden lg:absolute right-0 lg:top-[27vw] lg:w-[7vw] lg:h-[7vw] 3xl:w-[12rem] 3xl:h-[12rem] 3xl:top-[47rem]">
              <img
                src="/images/testimonials/banner-avatar-9.webp"
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </span>
            <span className="avatar pulse w-[7rem] h-[7rem] border-4 inline-block border-white rounded-[1rem] overflow-hidden lg:absolute right-[18vw] lg:top-[29vw] lg:w-[8vw] lg:h-[8vw] 3xl:w-[12rem] 3xl:h-[12rem] 3xl:right-[38rem] 3xl:top-[55rem]">
              <img
                src="/images/testimonials/banner-avatar-10.webp"
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </span>
          </div>
        </div>

        <div className="scroller w-max hidden xl:block absolute bottom-[6rem] left-[50%] translate-x-[-50%] text-center xl:bottom-[8rem] 3xl:bottom-[12rem]">
          <span className="scroll-border mx-auto flex justify-center w-[3rem] h-[5rem] border-2 border-white rounded-[50px] p-[1rem] 3xl:w-[3.7rem] 3xl:h-[6rem] 3xl:p-[1.4rem]">
            <span className="scroll-dot w-[4px] h-[4px] rounded-[50%] inline-block bg-white"></span>
          </span>
          <span className="text-white uppercase text-[12px] block mt-[2rem] font-medium">
            SCROLL
          </span>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
