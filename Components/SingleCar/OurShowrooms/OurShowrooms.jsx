"use client";
import React, { useEffect } from "react";
import AOS from "aos";

const showrooms = [
  {
    title: "Gurgaon Headquarters",
    address:
      "Plot No. 134, Sector 37, Pace City 1, Gurgaon Haryana, 122001, India",
    googleMapLink: "https://maps.app.goo.gl/zNfwAGKLbfkhQrpTA",
    thumbnail: "/images/single-car/showroom-img-1.webp",
  },
  {
    title: "Hyderabad Studio",
    address:
      "Road no 2, Banjara Hills, Shangrila Plaza, Opp.KBR Park, Hyderabad, Telangana - 500034",
    googleMapLink: "https://maps.app.goo.gl/F8v6BMzK2USVz7cS7",
    thumbnail: "/images/single-car/showroom-img-2.webp",
  },
  {
    title: "Mumbai Studio",
    address:
      "7, Hubtown Sunmist, Opposite Hubtown Solaris, Telli Galli, Andheri East, N S Phadke Marg, Mumbai - 400053",
    googleMapLink: "https://maps.app.goo.gl/hH1jvrxkL89TPR6u9",
    thumbnail: "/images/single-car/showroom-img-3.webp",
  },
  {
    title: "Bengaluru Studio",
    address:
      "140, Residency Road, Shanthala Nagar, Richmond Town, Bengaluru, Karnataka - 560025",
    googleMapLink: "https://maps.app.goo.gl/PLdXNLZFW4SgDqaG9",
    thumbnail: "/images/single-car/showroom-img-4.webp",
  },
  {
    title: "Ahmedabad Studio",
    address:
      "Cama Motors, Rustom Cama Marg, Old City, Lal Darwaja, Ahmedabad, Gujarat 380001",
    googleMapLink: "https://maps.app.goo.gl/CYhXfh1RNMzWRmMp9",
    thumbnail: "/images/single-car/showroom-img-5.webp",
  },
];

const OurShowrooms = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-[#F3F3F3] py-[6rem] xl:py-[15rem]">
      <div className="container">
        <div className="flex flex-wrap justify-between gap-y-[3rem] lg:grid lg:grid-cols-3 lg:gap-[3rem]">
          <div
            className="w-full text-center section-header lg:text-left lg:w-full"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <h6 className="w-max mx-auto bg-[#F3F3F3] border border-[#4D4D4D] px-[3rem] pb-[0.5rem] pt-[0.8rem] text-[1.3rem] uppercase rounded-[4rem] leading-[1.6] mb-[2rem] xl:text-[2rem] xl:mb-[3rem] font-medium lg:ml-0">
              Our Showrooms
            </h6>
            <h2 className="text-[#202020] leading-[1.3] text-[2.6rem] [&>br]:hidden md:[&>br]:block xl:text-[4.5rem] xl:leading-[1.2]">
              <b>Visit our showrooms </b>for In-person experience and guidance.
            </h2>

            <span className="hidden lg:flex items-center justify-center border border-[#AEAEAE] rounded-[50%] p-[2rem] w-[8rem] h-[8rem] xl:w-[14rem] xl:h-[14rem] 1xl:w-[17rem] 1xl:h-[17rem] mt-[5rem]">
              <img
                src="/images/scroll-down-arrow-black.webp"
                alt=""
                className="object-contain h-[3rem] xl:h-[4.5rem] 1xl:h-[6rem] scroll-down-arrow"
              />
            </span>
          </div>

          {showrooms.map((showroom, index) => (
            <div
              key={index}
              className="w-full relative overflow-hidden rounded-[1.5rem] sm:w-[48%] lg:w-full group xl:rounded-[3rem]"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <div className="img-box h-full">
                <img
                  src={showroom.thumbnail}
                  alt=""
                  className="block object-cover w-full"
                />
              </div>
              <div className="content absolute w-full h-full flex flex-col justify-end  left-0 top-0 bg-gradient-to-t from-[rgba(0,0,0,0.9)] to-[rgba(0,0,0,0.1)] px-[2rem] py-[3rem] xl:px-[4rem] xl:py-[6rem]">
                <div className="transition-all duration-300 xl:translate-y-[17rem] group-hover:translate-y-0">
                  <h6 className="text-white text-[2rem] xl:text-[2.8rem] font-[600]">
                    {showroom.title}
                  </h6>
                  <div className="overflow-hidden transition-all duration-500 xl:h-[16rem] xl:flex flex-col justify-between">
                    <p className="mt-[1rem] text-white xl:text-[2rem] xl:mt-[5rem] transition-all duration-500 group-hover:xl:mt-[1.5rem]">
                      {showroom.address}
                    </p>
                    <a
                      href={showroom.googleMapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-[2rem] inline-block xl:text-[2rem] text-[#f9f9f9] transition-all duration-300 hover:text-[#FE0000]"
                    >
                      Locate On Map
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurShowrooms;
