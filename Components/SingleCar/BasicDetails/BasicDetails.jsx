"use client";

import Image from "next/image";
import React, { useState } from "react";
import RequestCallPopup from "../../RequestCallPopup/RequestCallPopup";
import Link from "next/link";
import styles from "../SingleCar.module.css";

const BasicDetails = () => {
  const [isSold, setIsSold] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };

  const handleScroll = () => {
    const section = document.getElementById("singleEmiCalculator");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="lg:sticky top-0 bg-white z-[20] detail-basic-shadow">
      <div className="max-w-[1920px] mx-auto">
        <div className="py-[4rem] px-[2rem]  xl:px-0 xl:w-[92%] xl:mx-auto xl:py-[3rem] 3xl:py-[4.5rem]">
          {popupOpen && (
            <RequestCallPopup active={popupOpen} togglePopup={togglePopup} />
          )}
          <div className="block sm:flex sm:flex-wrap sm:justify-between">
            <div className="w-full sm:w-[40%] md:w-[45%] lg:w-[35%]">
              <p
                className={`inline-block bg-black text-[#AEAEAE] text-center rounded-2xl text-base px-5 py-2 mb-5 leading-4   xl:text-[2rem] xl:py-[1.2rem] xl:px-[1.8rem] xl:rounded-[5rem]`}
              >
                Reg.Year : 2022 | EMI STARTS @ 45,000
              </p>
              <h4 className=" text-[2.3rem] tracking-tight xl:text-[4rem] font-medium leading-[1.3] xl:leading-[1.15]">
                Mercedes Benz A200 Limousine
              </h4>
              <p className="text-[2rem] tracking-tight xl:text-[3rem] font-medium mt-[0.5rem]">
                ₹ 62,50,000
              </p>
            </div>

            <div className="mt-[4rem] sm:w-[56%] sm:flex sm:flex-wrap sm:items-center sm:justify-between md:w-[50%] lg:w-[60%] lg:gap-x-[3rem] lg:mt-0">
              <div className="w-full lg:flex-[1]">
                <ul
                  className={`${styles.detailInfoUsp} flex carCommonInfo [&>*:first-child]:pl-0 [&>*:first-child]:border-0 sm:[&>*:first-child]:border-l sm:[&>*:first-child]:border-l-[rgb(207,207,207)] sm:[&>*:first-child]:pl-[1.2rem]`}
                >
                  <li className="w-2/6 pl-[1.7rem] border-l border-[rgb(207,207,207)] sm:pl-[1.2rem] xl:py-[2rem]">
                    <img
                      src="/images/single-car/km-icon.png"
                      alt="Icon"
                      className="h-[1.7rem] object-contain xl:h-[2.5rem]"
                    />
                    <p className="text-[1.2rem] text-[#767778] mt-[1rem] xl:text-[2rem]">
                      Kilometers Driven
                    </p>
                    <h6 className="font-medium text-[1.5rem] mt-[0.5rem] xl:text-[2.8rem]">
                      3500 km
                    </h6>
                  </li>
                  <li className="w-2/6 pl-[1.7rem] border-l border-[#cfcfcf] sm:pl-[1.2rem] xl:py-[2rem]">
                    <img
                      src="/images/single-car/fuel-icon.png"
                      alt="Icon"
                      className="h-[1.7rem] object-contain xl:h-[2.5rem]"
                    />
                    <p className="text-[1.2rem] text-[#767778] mt-[1rem] xl:text-[2rem]">
                      Fuel / Gas Type
                    </p>
                    <h6 className="font-medium text-[1.5rem] mt-[0.5rem] xl:text-[2.8rem]">
                      Petrol
                    </h6>
                  </li>
                  <li className="w-2/6 pl-[1.7rem] border-l border-[#cfcfcf] sm:pl-[1.2rem] xl:py-[2rem]">
                    <img
                      src="/images/single-car/registration-icon.png"
                      alt="Icon"
                      className="h-[1.7rem] object-contain xl:h-[2.5rem]"
                    />
                    <p className="text-[1.2rem] text-[#767778] mt-[1rem] xl:text-[2rem]">
                      Registration State
                    </p>
                    <h6 className="font-medium text-[1.5rem] mt-[0.5rem] xl:text-[2.8rem]">
                      Delhi
                    </h6>
                  </li>
                </ul>
              </div>

              {/* Call Buttons For Mobile */}
              <div className="lg:hidden  py-[1.5rem] px-[3rem] bg-white fixed bottom-0 left-0 w-full z-10">
                <div className="flex flex-wrap justify-center items-center max-w-[450px] mx-auto">
                  <div className="h-[4.5rem] bg-black flex-grow text-white rounded-[7px] flex justify-center items-center mr-[1rem]">
                  Reserve The Car
                </div>
                <div className="w-[4.5rem] h-[4.5rem] border border-[#333] rounded-[7px] flex justify-center items-center bg-white">
                  <Image
                    src="/images/square-btn-call-icon.webp"
                    className="object-contain w-[2.3rem] h-auto invert"
                    alt="Call Icon"
                    width="25"
                    height="25"
                  />
                </div>
                </div>
              </div>

              {/* Call Button For Desktop */}
              <div className="overflow-hidden hidden lg:block lg:max-w-[17rem] xl:max-w-[27rem]">
                <Link href="/emi-calculator" className="outline-none font-medium w-full flex items-center justify-center border border-black transition-all duration-300 px-[2rem] text-[1.2rem] xl:text-[2.2rem] h-[5rem] xl:h-[7.5rem] rounded-[5rem] hover:bg-black hover:text-white group">
                  <img src="/images/single-car/emi-icon.png" alt="EMI Calculator" className="object-contain w-[1.8rem] xl:w-[2.6rem] inline-block mr-[2rem] transition-all duration-300 group-hover:invert" />
                  <span>Emi Calculator</span>
                </Link>

                <button href="#" className="outline-none font-medium w-full flex items-center justify-center border bg-black border-black transition-all duration-300 px-[2rem] text-[1.2rem] xl:text-[2.2rem] h-[5rem] xl:h-[7.5rem] rounded-[5rem] hover:bg-[#222222] text-white group mt-[1rem] group cursor-pointer">
                  <img src="/images/single-car/reserve-car-icon.png" alt="EMI Calculator" className="object-contain w-[1.8rem] xl:w-[2.6rem] inline-block mr-[2rem] transition-all duration-300 " />
                  <span>Reserve Car </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
