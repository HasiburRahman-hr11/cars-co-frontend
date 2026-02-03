"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import cars from "@/public/dummyData/cars";
import RequestCallPopup from "@/Components/RequestCallPopup/RequestCallPopup";
import CollectionItem from "./CollectionItem";

const CarsListing = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-white md:bg-[#f3f3f3] md:py-[6rem] xl:py-[12rem]">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex flex-wrap sm:max-w-[50rem] sm:mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-x-[2.5rem] md:gap-y-[4rem] lg:grid-cols-3 lg:gap-y-[5rem] md:px-[1.5rem] mx-auto xl:w-[83%] xl:max-w-[1440px]">
          {cars.map((car, index) => (
            <div
              key={index}
              className="w-full [&_.item-divider]:hidden border-t border-[#D9D9D9] pt-4 md:pt-0 md:border-t-0"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <CollectionItem data={car} togglePopup={togglePopup} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[4rem] md:mt-[7rem] xl:mt-[9rem] pb-[6rem] md:pb-0 overflow-hidden px-[15px]">
        <div className="w-full mx-auto xl:w-[83%] xl:max-w-[1440px] relative">
          <span className="hidden md:block absolute w-full h-[1px] bg-[#666666] left-0 top-[50%]"></span>
          <div className="w-max mx-auto px-[2rem] bg-white md:bg-[#f3f3f3] relative z-10">
            <button className="w-max mx-auto flex items-center justify-center px-[4rem] py-[1.4rem] text-[1.5rem] border border-black rounded-[5rem] cursor-pointer font-medium bg-black text-white xl:bg-transparent xl:text-black xl:hover:bg-black xl:hover:text-white transition-all duration-300 xl:text-[1.8rem] xl:py-[2rem] xl:min-w-[25rem]">
              Load More
            </button>
          </div>
        </div>
      </div>
      {popupOpen && (
        <RequestCallPopup active={popupOpen} togglePopup={togglePopup} />
      )}
    </section>
  );
};

export default CarsListing;
