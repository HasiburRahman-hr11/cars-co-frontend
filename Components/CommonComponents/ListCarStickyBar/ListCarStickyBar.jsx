"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ListCarStickyBar = () => {
  const [showForm, setShowForm] = useState(false);
  const [forceCloseForm, setForceCloseForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const secondSection = document.getElementById("showStickyBar");
      const footer = document.getElementById("footer");

      if (
        secondSection &&
        footer &&
        secondSection.getBoundingClientRect().top <= 0 &&
        footer.getBoundingClientRect().top > window.innerHeight
      ) {
        setShowForm(true);
      } else {
        setShowForm(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {!forceCloseForm && (
        <div
          className={`z-[20] fixed  left-0 w-full transition-all duration-500 ease-in-out ${
            showForm
              ? "bottom-[5rem] show-from-bottom opacity-[1] block"
              : "opacity-[0] bottom-[100rem]"
          }`}
        >
          <div className="bg-white py-[4rem] px-[2rem] rounded-[1rem] w-[95%] max-w-[600px] xl:max-w-[1140px] mx-auto lg:w-[70%] xl:pl-[3rem] xl:rounded-[2rem] 1xl:max-w-[1240px] 1xl:px-[4rem] 1xl:rounded-[2.5rem] 3xl:px-[6rem] 3xl:py-[5rem] shadow-xl z-100 transition-all duration-500 ease-in-out relative">
            <div
              className=" absolute top-[1.5rem] right-[1.5rem] w-[1.7rem] h-[1.7rem] cursor-pointer"
              onClick={() => setForceCloseForm(true)}
            >
              <img
                src="/images/close-menu-icon.png"
                alt="Close Popup"
                className="w-full object-contain invert transition-all duration-300 hover:scale-110"
                width="29"
                height="29"
              />
            </div>

            <div className="lg:flex justify-between items-center gap-x-[3rem]">
              <div className="lg:flex-[1] text-center justify-center lg:text-left flex flex-wrap items-center gap-[3rem]">
                <img
                  src="/images/lsit-car-bar-img.webp"
                  alt=""
                  className="object-contain w-auto inline-block max-h-[10rem]"
                />
                <div>
                  <h3 className="text-[2rem] xl:text-[3.6rem]">
                    {" "}
                    <b>List Your Car</b> Effortlessly.
                  </h3>
                  <p className="text-[#555555] xl:text-[2.2rem]">
                    Quick, transparent, and hassle-free car listing process
                  </p>
                </div>
              </div>
              <div className="w-max mx-auto lg:mr-0 mt-[2rem] lg:mt-0">
                <Link
                  href="/list-cars"
                  className="bg-black urbanist w-full inline-block px-[3rem] py-[1.4rem] text-white text-[1.8rem] rounded-[4rem] font-medium cursor-pointer md:w-max md:mx-auto md:px-[5rem] md:mt-[1rem] lg:mr-0 xl:text-[2.2rem] xl:py-[1.9rem] xl:rounded-[8rem] transition-all duration-500 hover:bg-[#FE0000] whitespace-nowrap"
                >
                  List Your Car
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ListCarStickyBar;

const styles = {
  inputStyle:
    "border border-[#343434] outline-none bg-[#222222] w-full h-[45px] 2xl:h-[49px] 3xl:h-[55px] text-[1.2rem] text-white pl-[1rem] rounded-[0.6rem] 3xl:text-[1.6rem]",
};
