"use client";
import React from "react";
import Slider from "react-slick";
import ListCarForm from "./ListCarForm";

const quotes = [
  {
    quote:
      "Cars.co made selling my car incredibly easy, fast, fair, and truly hassle-free, giving me peace of mind.",
    name: "Rajesh Kumar",
    designation: "Software Engineer",
    avatar: "/images/homepage/hp-quote-avatar.webp",
  },
  {
    quote:
      "Cars.co made selling my car incredibly easy, fast, fair, and truly hassle-free, giving me peace of mind.",
    name: "Rajesh Kumar",
    designation: "Software Engineer",
    avatar: "/images/homepage/hp-quote-avatar.webp",
  },
  {
    quote:
      "Cars.co made selling my car incredibly easy, fast, fair, and truly hassle-free, giving me peace of mind.",
    name: "Rajesh Kumar",
    designation: "Software Engineer",
    avatar: "/images/homepage/hp-quote-avatar.webp",
  },
  {
    quote:
      "Cars.co made selling my car incredibly easy, fast, fair, and truly hassle-free, giving me peace of mind.",
    name: "Rajesh Kumar",
    designation: "Software Engineer",
    avatar: "/images/homepage/hp-quote-avatar.webp",
  },
];
let settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  centerMode: false,
  autoplay: true,
  autoplaySpeed: 3000,
};
const ListYourCar = () => {
  return (
    <section className="py-[6rem] bg-white xl:py-[13rem]">
      <div className="container">
        <div className="block md:flex md:justify-between md:items-end">
          <div className="section-header md:w-[60%] xl:w-[75%]">
            <h2 className="leading-[1.3] text-[2.6rem] [&>br]:hidden md:[&>br]:block xl:text-[4.5rem] xl:leading-[1.2]">
              What happens when you <br /> <b>List your car with us</b>
            </h2>
            <p className="mt-[2rem] text-[#656565] xl:text-[2.2rem] xl:font-medium">
              When you sell your car with us, enjoy a fast, hassle-free process,
              fair valuation, instant payment, and support every step, making
              car selling simple and secure.
            </p>
          </div>
          <div className="hidden md:block w-[10rem] xl:w-[20rem]">
            <img
              src="/images/homepage/hp-sell-car-logo.webp"
              alt=""
              className="w-full object-contain"
            />
          </div>
        </div>

        <ul className="hp-sellcar-usps block mt-[4rem] red-tick-list [&>li]:border-t [&>li]:border-t-[#D4D4D4] [&>li:last-child]:border-b [&>li:last-child]:border-b-[#D4D4D4] lg:flex lg:flex-wrap lg:justify-between lg:[&>li]:w-[48%] xl:mt-[7rem]">
          <li className=" text-[#333333] font-medium py-[2rem] xl:text-[2.5rem] xl:py-[3.5rem]">
            Enjoy Free Doorstep Car Pickup and Inspection
          </li>
          <li className=" text-[#333333] font-medium py-[2rem] xl:text-[2.5rem] xl:py-[3.5rem]">
            List Your Car with Complete Transparency
          </li>
          <li className=" text-[#333333] font-medium py-[2rem] xl:text-[2.5rem] xl:py-[3.5rem]">
            Receive the Best Market Price for Cars
          </li>
          <li className=" text-[#333333] font-medium py-[2rem] xl:text-[2.5rem] xl:py-[3.5rem]">
            We Handle All Paperwork, Stress-Free Process
          </li>
        </ul>

        <div className="block md:flex md:justify-between mt-[4rem] lg:mt-[6rem] xl:mt-[8rem]">
          <div className="md:w-[48%] lg:w-[53%] xl:w-[55%]">
            <img
              src="/images/homepage/hp-sell-car-thumb.webp"
              alt="Seel Car"
              className="w-full block"
            />
          </div>
          {/* Mobile Form */}
          <div className="w-full block md:hidden">
            <ListCarForm />
          </div>
          <div className="hp-sell-car-quotes mt-[5rem] md:mt-0 md:w-[47%] lg:w-[40%]">
            <Slider {...settings}>
              {quotes.map((item, index) => (
                <div key={index}>
                  <div>
                    <img
                      src="/images/quote-icon-red.webp"
                      alt=""
                      className="object-contain w-[5rem] inline-block mx-auto md:ml-0 xl:w-[9rem]"
                    />
                    <div className="mt-[2rem] font-medium text-[1.8rem] text-center md:text-left xl:text-[2.6rem]">
                      {item.quote}
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-max mx-auto mt-[3rem] md:justify-start md:ml-0 xl:mt-[4rem]">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="block w-[5.8rem] h-[5.8rem] rounded-[1rem] mr-[1rem] xl:w-[8rem] xl:h-[8rem] xl:mr-[2rem]"
                    />
                    <div>
                      <h6 className="text-[1.7rem] font-medium text-[#333333] leading-[1.3] xl:text-[2.4rem]">
                        Rajesh Kumar
                      </h6>
                      <span className="text-[1.1rem] text-[#333333] xl:text-[1.5rem]">
                        Software Engineer
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Desktop Form */}
        <div className="hidden md:block">
          <ListCarForm />
        </div>
      </div>
    </section>
  );
};

export default ListYourCar;
