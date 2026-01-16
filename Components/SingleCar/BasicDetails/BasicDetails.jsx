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
    <div className="lg:sticky top-0 bg-white z-[20] lg:shadow-detail-space">
      <div className="max-1920">
        <div className="py-[4rem] px-[2rem]  xl:px-0 xl:w-[92%] xl:mx-auto xl:py-20 2xl:py-[6rem]  3xl:py-28">
          {popupOpen && (
            <RequestCallPopup active={popupOpen} togglePopup={togglePopup} />
          )}
          <div className="block sm:flex sm:flex-wrap sm:justify-between">
            <div className="w-full sm:w-[40%] md:w-[45%]">
              <p
                className={`inline-block bg-black text-[#AEAEAE] text-center rounded-2xl text-base px-5 py-2 mb-5 leading-4 lg:text-sm lg:py-1 3xl:text-[2rem]  xl:py-1 xl:px-7`}
              >
                Reg.Year : 2022 | EMI STARTS @ 45,000
              </p>
              <h4 className=" text-[2.3rem] tracking-tight xl:text-[6rem] font-medium leading-[1.3]">
                Mercedes Benz A200 Limousine
              </h4>
              <p className="text-[2rem] tracking-tight xl:text-[4.5rem] font-medium mt-[0.5rem]">
                ₹ 62,50,000
              </p>
            </div>

            <div className="mt-[4rem] sm:w-[56%] sm:flex sm:flex-wrap sm:items-center sm:justify-between md:w-[50%]">
              <div className="w-full">
                <ul
                  className={`${styles.detailInfoUsp} flex carCommonInfo [&>*:first-child]:pl-0 [&>*:first-child]:border-0 sm:[&>*:first-child]:border-l sm:[&>*:first-child]:border-l-[rgb(207,207,207)] sm:[&>*:first-child]:pl-[1.2rem]`}
                >
                  <li className="w-2/6 pl-[1.7rem] border-l border-[rgb(207,207,207)] sm:pl-[1.2rem]">
                    <img
                      src="/images/single-car/km-icon.png"
                      alt="Icon"
                      className="h-[1.7rem] object-contain xl:h-[2.5rem]"
                    />
                    <p className="text-[1.2rem] text-[#767778] mt-[1rem]">
                      Kilometers Driven
                    </p>
                    <h6 className="font-medium text-[1.5rem] mt-[0.5rem] xl:text-[2.8rem]">
                      3500 km
                    </h6>
                  </li>
                  <li className="w-2/6 pl-[1.7rem] border-l border-[#cfcfcf] sm:pl-[1.2rem]">
                    <img
                      src="/images/single-car/fuel-icon.png"
                      alt="Icon"
                      className="h-[1.7rem] object-contain xl:h-[2.5rem]"
                    />
                    <p className="text-[1.2rem] text-[#767778] mt-[1rem]">
                      Fuel / Gas Type
                    </p>
                    <h6 className="font-medium text-[1.5rem] mt-[0.5rem] xl:text-[2.8rem]">
                      Petrol
                    </h6>
                  </li>
                  <li className="w-2/6 pl-[1.7rem] border-l border-[#cfcfcf] sm:pl-[1.2rem]">
                    <img
                      src="/images/single-car/registration-icon.png"
                      alt="Icon"
                      className="h-[1.7rem] object-contain xl:h-[2.5rem]"
                    />
                    <p className="text-[1.2rem] text-[#767778] mt-[1rem]">
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
              <div className=" mt-12 overflow-hidden  sm:w-40% sm:mt-0 xl:w-[37%] hidden lg:block">
                {isSold ? (
                  <div className="sm:pl-5 1xl:pl-10 3xl:pl-24">
                    <p className="font-light [&_strong]:font-medium mb-4 text-center xl:text-left xl:mb-6 1xl:text-[2rem] 3xl:text-[2.2rem]">
                      Sorry This Car is Sold !! <br />{" "}
                      <strong>Still want to know more ?</strong>
                    </p>
                    <div
                      className="bg-black w-full flex justify-center cursor-pointer items-center py-7 px-10 rounded-[5px] xl:rounded-[1rem] transition-all duration-500 ease-in-out group hover:bg-white hover:border hover:border-black"
                      onClick={togglePopup}
                    >
                      <Image
                        src="/images/square-btn-call-icon.webp"
                        alt="Reserve Icon"
                        width="30"
                        height="30"
                        className=" object-contain inline-block mr-8 w-[2rem] h-auto 2xl:w-[2.5rem] 3xl:w-[2.9rem] group-hover:invert transition-all duration-500 ease-in-out"
                      />
                      <span className="text-[1.3rem] text-white font-medium text-center 1xl:text-[1.5rem] 3xl:text-[1.7rem] group-hover:text-black transition-all duration-500 ease-in-out">
                        Request a Call Back
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-wrap justify-between md:pl-5 1xl:pl-10 3xl:pl-14">
                    <div className="hidden md:block md:w-[48%] lg:hidden xl:block xl:w-[55%]">
                      <div
                        className="border border-[#A0A0A0] rounded-[1rem] flex justify-center items-center cursor-pointer py-4 px-2 xl:py-5 2xl:py-6 3xl:py-8 group transition-all duration-500 ease-in-out hover:bg-black"
                        onClick={handleScroll}
                      >
                        <Image
                          src="/images/single-car/emi-icon.png"
                          alt="Reserve Icon"
                          width="26"
                          height="26"
                          className=" object-contain mr-8 w-[2rem] h-auto hidden lg:inline-block xl:w-[1.8rem] xl:mr-3 2xl:w-[2.2rem] 3xl:w-[2.7rem] group-hover:invert"
                        />
                        <span className="text-[1.3rem] font-[600] 1xl:text-[1.5rem] 3xl:text-[1.8rem] group-hover:text-white tracking-[-1.1px]">
                          EMI Calculator
                        </span>
                      </div>
                      <Link
                        href="/compare-cars"
                        className="border border-[#A0A0A0] rounded-[1rem] flex justify-center items-center cursor-pointer py-4 px-2 xl:py-5 2xl:py-6 3xl:py-8 mt-4 3xl:mt-6 group transition-all duration-500 ease-in-out hover:bg-black"
                      >
                        <Image
                          src="/images/single-car/emi-icon.png"
                          alt="Reserve Icon"
                          width="26"
                          height="26"
                          className=" object-contain mr-8 w-[2rem] h-auto hidden lg:inline-block xl:w-[1.8rem] xl:mr-3 2xl:w-[2.2rem] 3xl:w-[2.7rem] group-hover:invert"
                        />
                        <span className="text-[1.3rem] font-[600] 1xl:text-[1.5rem] 3xl:text-[1.8rem] group-hover:text-white tracking-[-1.1px]">
                          Compare Car
                        </span>
                      </Link>
                    </div>
                    <div className="w-full md:w-[48%] lg:w-full xl:w-[40%]">
                      <Link
                        href="/booking"
                        className="bg-black w-full flex justify-center items-center py-7 px-10 rounded-[5px] md:flex-col xl:rounded-[1rem] xl:h-full 3xl:py-12 transition-all duration-500 ease-in-out  group hover:bg-white hover:border hover:border-black"
                      >
                        <Image
                          src="/images/single-car/reserve-car-icon.png"
                          alt="Reserve Icon"
                          width="30"
                          height="30"
                          className=" object-contain inline-block mr-8 w-[2rem] h-auto md:mr-0 md:mb-6 xl:mb-4 2xl:w-[2.5rem] 3xl:w-[2.9rem] group-hover:invert transition-all duration-500 ease-in-out"
                        />
                        <span className="text-[1.3rem] text-white font-medium text-center 1xl:text-[1.5rem] 3xl:text-[1.7rem] 3xl:max-w-[6.9rem] 3xl:mx-auto group-hover:text-black transition-all duration-500 ease-in-out">
                          Reserve Car
                        </span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
