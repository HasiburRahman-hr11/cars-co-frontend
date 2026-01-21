import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <Header forceBlack />
      <div className="bg-white py-[6rem] xl:py-[13rem]">
        <div className="container">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full text-center lg:w-[45%]">
              <h1 className="text-[3rem] xl:text-[6rem] font-medium">
                Page Not Found
              </h1>
              <img
                src="/images/not-found.png"
                alt=""
                className="block object-contain my-[3rem] lg:hidden"
              />
              <p className="text-[#6D6D6D] xl:text-[2rem] mt-[2rem]">
                The page you are looking for might have been removed, had its
                name changed or is temporarily unavailable.
              </p>

              <Link
                href="/"
                className="bg-black border border-black urbanist w-full inline-block px-[3rem] py-[1.4rem] text-white text-[1.8rem] rounded-[4rem] font-medium cursor-pointer md:w-max md:mx-auto md:px-[5rem] xl:text-[2.2rem] xl:px-[7rem] xl:py-[1.9rem] xl:rounded-[8rem] transition-all duration-500 hover:text-black hover:bg-transparent mt-[4rem]"
              >
                Back To Homepage
              </Link>
            </div>
            <div className="hidden lg:block lg:w-[42%]">
              <img
                src="/images/not-found.png"
                alt=""
                className="block object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
