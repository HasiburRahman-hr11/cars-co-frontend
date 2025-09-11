"use client";
import React, { useState } from "react";
import cars from "@/public/dummyData/cars";
import CarItem from "@/Components/CommonComponents/CarItem/CarItem";
import RequestCallPopup from "@/Components/RequestCallPopup/RequestCallPopup";

const LatestAdditions = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };


  return (
    <section className="bg-[#F3F3F3] py-[6rem] overflow-hidden] xl:py-[13rem]">
      <div className="container">
        <h2 className="relative text-center leading-[1.3] text-[2.6rem] md:text-left md:flex md:items-center md:justify-between [&>br]:hidden md:[&>br]:block xl:text-[4.5rem] xl:leading-[1.2]">
          Explore <b>latest additions</b>
          <span className="hidden md:block md:h-[1px] md:bg-[#0A0909] md:ml-[1rem] md:flex-[1]"></span>
        </h2>

        {popupOpen && (
          <RequestCallPopup active={popupOpen} togglePopup={togglePopup} />
        )}

        <div className="mt-[4rem] flex flex-wrap gap-y-[3rem] sm:max-w-[40rem] sm:mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-x-[2.5rem] lg:grid-cols-3 xl:mt-[6rem]">
          {cars.map((car, index) => (
            <div key={index}  className="w-full [&_.item-divider]:hidden">
              <CarItem data={car}  togglePopup={togglePopup} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestAdditions;
