"use client";
import React, { useState } from "react";

const locations = [
  {
    id: 1,
    title: "Gurgaon",
    thumbnail: "/images/contact/gurgaon-showroom-img.webp",
    address: "Plot No. 134, Sector 37, Pace City 1, Gurgaon, Haryana - 122001",
    mapLink: "#",
  },
  {
    id: 1,
    title: "Ahmedabad",
    thumbnail: "/images/contact/gurgaon-showroom-img.webp",
    address:
      "Cama Motors, Rustom Cama Marg, Old City, Lal Darwaja, Ahmedabad, Gujarat 380001",
    mapLink: "#",
  },
  {
    id: 1,
    title: "Mumbai",
    thumbnail: "/images/contact/gurgaon-showroom-img.webp",
    address:
      "7, Hubtown Sunmist, Opposite Hubtown Solaris, Telli Galli, Andheri East, N S Phadke Marg, Mumbai - 400053",
    mapLink: "#",
  },
  {
    id: 1,
    title: "Hydrebad",
    thumbnail: "/images/contact/gurgaon-showroom-img.webp",
    address:
      "Road no 2, Banjara Hills, Shangrila Plaza, Opp.KBR Park, Hyderabad, Telangana - 500034",
    mapLink: "#",
  },
  {
    id: 1,
    title: "Bengaluru",
    thumbnail: "/images/contact/gurgaon-showroom-img.webp",
    address:
      "140, Residency Road, Shanthala Nagar, Richmond Town, Bengaluru, Karnataka - 560025",
    mapLink: "#",
  },
];

const usps = [
    {
        icon:"/images/contact/presence-usp-icon-1.webp",
        title: "2009",
        subtitle: "Established",
    },
    {
        icon:"/images/contact/presence-usp-icon-2.webp",
        title: "10000+",
        subtitle: "Our Clientele",
    },
    {
        icon:"/images/contact/presence-usp-icon-3.webp",
        title: "120+",
        subtitle: "Luxury Car Brands",
    },
    {
        icon:"/images/contact/presence-usp-icon-4.webp",
        title: "5000+",
        subtitle: "Supercars Sold",
    }
]

const LocationSection = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [locationNumber, setLocationNumber] = useState(0);
  return (
    <section className="bg-[#F3F3F3] py-[6rem] xl:py-[13rem] contact-location-section">
      <div className="container">
        <div className="flex flex-wrap justify-between max-w-[540px] mx-auto lg:max-w-full">

          <div className="w-full text-center lg:w-[45%] lg:text-left">
            <h6 className="w-max mx-auto bg-[#F3F3F3] border border-[#4D4D4D] px-[3rem] pb-[0.5rem] pt-[0.8rem] text-[#4D4D4D] text-[1.3rem] uppercase rounded-[4rem] leading-[1.6] mb-[2rem] xl:text-[2rem] xl:mb-[3rem] font-medium lg:ml-0">
              OUR PRESENCE
            </h6>
            <h2 className="text-[#202020] leading-[1.3] text-[2.6rem] [&>br]:hidden md:[&>br]:block xl:text-[4.5rem] xl:leading-[1.2]">
              Visit us in our <br /> <b>showroom in your city</b>
            </h2>
            <p className="mt-[1rem] text-[#636363] xl:text-[2.2rem] xl:mt-[2rem]">
              Our list of Associates share a common vision for Automotive
              Excellence and a deep passion for Exotic cars.
            </p>

            <div className="flex justify-center items-center mt-[3rem] lg:hidden">
              <div className="relative map-box">
                <img
                  src="/images/contact/map-img.webp"
                  alt="Map Image"
                  className="w-full block object-contain"
                />
                <span
                  className={`location-1 top-[26%] left-[26%] ${locationTagStyle}`}
                  onClick={() => {
                    setOpenPopup(true);
                    setLocationNumber(0);
                  }}
                >
                  Gurgaon
                </span>
                <span
                  className={`location-2 top-[45%] left-[0] ${locationTagStyle}`}
                  onClick={() => {
                    setOpenPopup(true);
                    setLocationNumber(1);
                  }}
                >
                  Ahmedabad
                </span>
                <span
                  className={`location-3 top-[62%] left-[10%] ${locationTagStyle}`}
                  onClick={() => {
                    setOpenPopup(true);
                    setLocationNumber(2);
                  }}
                >
                  Mumbai
                </span>
                <span
                  className={`location-4 top-[65%] left-[33%] ${locationTagStyle}`}
                  onClick={() => {
                    setOpenPopup(true);
                    setLocationNumber(3);
                  }}
                >
                  Hyderabad
                </span>
                <span
                  className={`location-5 bottom-[10%] left-[14%] ${locationTagStyle}`}
                  onClick={() => {
                    setOpenPopup(true);
                    setLocationNumber(4);
                  }}
                >
                  Bengaluru
                </span>
              </div>
            </div>

            <ul className="list-none grid grid-cols-2 gap-y-[4rem] mt-[5rem] xl:gap-y-[7rem]">
               {usps.map((usp , index)=> (
                <li key={index} className="text-center lg:text-left px-[1rem] border-l border-l-[#D5D5D5] even:border-r even:border-r-[#D5D5D5] lg:pl-[4rem]">
                    <img src={usp.icon} alt="USP Icon" className="object-contain max-w-[5rem] max-h-[4.5rem] xl:max-w-[6rem] xl:max-h-[5.5rem] inline-block" />
                    <h6 className="font-[600] mt-[2rem] text-[2.5rem] xl:text-[5rem]">{usp.title}</h6>
                    <p className="text-[#606060] text-[1.8rem] xl:text-[2.8rem]">{usp.subtitle}</p>
                </li>
               ))}
            </ul>
          </div>


          <div className=" justify-center items-center hidden lg:flex lg:w-[47%]">
            <div className="relative map-box">
              <img
                src="/images/contact/map-img.webp"
                alt="Map Image"
                className="w-full block object-contain"
              />
              <span
                className={`location-1 top-[26%] left-[26%] xl:left-[27%] xl:top-[25%] ${locationTagStyle}`}
                onClick={() => {
                  setOpenPopup(true);
                  setLocationNumber(0);
                }}
              >
                Gurgaon
              </span>
              <span
                className={`location-2 top-[45%] left-[0] xl:left-[-7rem] ${locationTagStyle}`}
                onClick={() => {
                  setOpenPopup(true);
                  setLocationNumber(1);
                }}
              >
                Ahmedabad
              </span>
              <span
                className={`location-3 top-[62%] left-[10%] xl:left-[5%] xl:top-[60%] ${locationTagStyle}`}
                onClick={() => {
                  setOpenPopup(true);
                  setLocationNumber(2);
                }}
              >
                Mumbai
              </span>
              <span
                className={`location-4 top-[65%] left-[33%] xl:top-[62%]  ${locationTagStyle}`}
                onClick={() => {
                  setOpenPopup(true);
                  setLocationNumber(3);
                }}
              >
                Hyderabad
              </span>
              <span
                className={`location-5 bottom-[10%] left-[14%] xl:bottom-[13%] xl:left-[15%] ${locationTagStyle}`}
                onClick={() => {
                  setOpenPopup(true);
                  setLocationNumber(4);
                }}
              >
                Bengaluru
              </span>
            </div>
          </div>


        </div>
      </div>
      {openPopup && (
        <div
          className={`location-popup fixed w-full h-full left-0 top-0 flex items-center justify-center z-10 `}
        >
          <div
            className="overlay absolute w-full h-full bg-[rgba(0,0,0,0.8)] left-0 top-0"
            onClick={() => setOpenPopup(false)}
          ></div>
          <div
            className={`location-card relative bg-white z-[2] overflow-hidden xl:max-w-[480px] 3xl:max-w-[553px] mx-auto w-[90%] rounded-[2.5rem] transition-all duration-500 ${
              openPopup ? "opacity-100" : "opacity-0"
            }`}
          >
            <span
              className="close absolute right-[2rem] top-[2rem] w-[2.5rem] h-[2.5rem] xl:w-[3.1rem] xl:h-[3.1rem] cursor-pointer"
              onClick={() => setOpenPopup(false)}
            >
              <img
                src="/images/close-icon-white.webp"
                alt=""
                className="object-contain "
              />
            </span>
            <div className="card-img">
              <img
                src={locations[locationNumber].thumbnail}
                alt=""
                className="w-full h-auto max-h-[50vh] min-h-[200px] block object-cover"
              />
            </div>
            <div className="card-body py-[2rem] px-[2rem] xl:px-[5rem] xl:py-[5rem]">
              <h6 className="text-[#393939] font-medium text-[2rem] xl:text-[3.2rem]">
                {locations[locationNumber].title}
              </h6>
              <p className="text-[#313131] text-[1.6rem] xl:text-[2.5rem] mt-[1rem]">
                {locations[locationNumber].address}
              </p>
              <a
                href={locations[locationNumber].mapLink}
                className="flex items-center font-medium mt-[2rem] text-[1.6rem] xl:text-[2rem] group"
                target="_blank"
              >
                Locate on map
                <img
                  src="/images/link-arrow-black.webp"
                  alt=""
                  className="object-contain max-w-[13px] inline-block ml-[10px] transition-all duration-500 group-hover:rotate-[45deg]"
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LocationSection;

const locationTagStyle =
  "location-tag absolute cursor-pointer bg-white inline-flex items-center justify-center rounded-[5px] text-[1.25rem] xl:text-[2rem] px-[10px] py-[5px] shadow-lg transition-all duration-500 lg:hover:bg-black lg:hover:text-white z-2";
