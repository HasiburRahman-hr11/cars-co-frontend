"use client";
import React from "react";
import Slider from "react-slick";

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

const SellYourCar = () => {
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
  return (
    <section className="py-[6rem] bg-white xl:py-[13rem]">
      <div className="container">
        <div className="block md:flex md:justify-between md:items-end">
          <div className="section-header md:w-[60%] xl:w-[75%]">
            <h2 className="leading-[1.3] text-[2.6rem] [&>br]:hidden md:[&>br]:block xl:text-[4.5rem] xl:leading-[1.2]">
              What happens when <br /> you <b>sell your car with us</b>
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
            Fast and Secure Payment Directly to Your Bank
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
          <div className="hp-sell-car-quotes md:w-[47%] lg:w-[40%]">
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
                      className="block w-[5.8rem] h-[5.8rem] rounded-[1rem] mr-[1rem] xl:w-[8rem] xl:h-[8rem]"
                    />
                    <div>
                      <h6 className="text-[1.7rem] text-[#333333] leading-[1.3] xl:text-[2.4rem]">
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

        <div className="mt-[4rem] bg-[#F0F0F0] rounded-[1.5rem] py-[4rem] px-[1.5rem] lg:px-[2.5rem] xl:px-[4rem]">
          <h3 className="text-[2.2rem] font-medium xl:text-[4rem]">
            List your car
          </h3>
          <form action="" className="block mt-[3rem]">
            <div className="flex flex-wrap justify-around">
              <div className="w-full mb-[2.5rem] xl:mb-[4rem] md:w-[31%]">
                <input
                  type="text"
                  placeholder="Full Name"
                  className={`${inputStyles}`}
                />
              </div>
              <div className="w-full mb-[2.5rem] xl:mb-[4rem] md:w-[31%]">
                <input
                  type="tel"
                  placeholder="Mobile"
                  className={`${inputStyles}`}
                />
              </div>
              <div className="w-full mb-[2.5rem] xl:mb-[4rem] md:w-[31%]">
                <input
                  type="email"
                  placeholder="Email"
                  className={`${inputStyles}`}
                />
              </div>
              <div className="w-full relative mb-[2.5rem] xl:mb-[4rem] md:w-[48%] lg:w-[23%]">
                <input
                  type="text"
                  placeholder="Brand Model"
                  className={`${inputStyles}`}
                />
              </div>
              <div className="w-full mb-[2.5rem] xl:mb-[4rem] md:w-[48%] lg:w-[23%]">
                <input
                  type="text"
                  placeholder="Year"
                  className={`${inputStyles}`}
                />
              </div>
              <div className="w-full relative mb-[2.5rem] xl:mb-[4rem] md:w-[48%] lg:w-[23%]">
                <input
                  type="text"
                  placeholder="Fuel"
                  className={`${inputStyles}`}
                />
              </div>
              <div className="w-full relative mb-[2.5rem] xl:mb-[4rem] md:w-[48%] lg:w-[23%]">
                <input
                  type="text"
                  placeholder="State"
                  className={`${inputStyles}`}
                />
              </div>
              {/* <div className="w-full relative mb-[2.5rem] xl:mb-[4rem] md:w-[48%] lg:w-[23%]">
                <select
                  name=""
                  id=""
                  className={`${inputStyles} appearance-none`}
                >
                  <option value="">Year</option>
                  <option value="2010-2015">2010-2015</option>
                  <option value="2015-2020">2015-2020</option>
                  <option value="2020-2025">2020-2025</option>
                </select>
                <img
                  src="/images/dropdown-arrow-grey.webp"
                  alt="Arrow"
                  className="pointer-events-none absolute right-0 top-[1rem] w-[1.5rem] object-contain"
                />
              </div> */}

              <div className="w-[48%] mb-[2.5rem] xl:mb-[4rem] lg:w-[23%] relative h-[10rem] sm:h-[15rem] xl:h-[18rem]">
                <input
                  type="file"
                  className="opacity-0 block w-full h-full"
                  id="img1"
                />
                <label
                  htmlFor="img1"
                  className="absolute w-full h-full cursor-pointer left-0 top-0 flex items-center justify-center border border-dotted border-[#555555] rounded-[1rem] "
                >
                  <img
                    src="https://cdn.bigboytoyz.com/new-version/assets/images/sellcar-placeholderimg.png"
                    alt="Image 1"
                    className="max-w-[40px]"
                  />
                </label>
              </div>
              <div className="w-[48%] mb-[2.5rem] xl:mb-[4rem] lg:w-[23%] relative h-[10rem] sm:h-[15rem] xl:h-[18rem]">
                <input
                  type="file"
                  className="opacity-0 block w-full h-full"
                  id="img2"
                />
                <label
                  htmlFor="img2"
                  className="absolute w-full h-full cursor-pointer left-0 top-0 flex items-center justify-center border border-dotted border-[#555555] rounded-[1rem] "
                >
                  <img
                    src="https://cdn.bigboytoyz.com/new-version/assets/images/sellcar-placeholderimg.png"
                    alt="Image 2"
                    className="max-w-[40px]"
                  />
                </label>
              </div>
              <div className="w-[48%] mb-[2.5rem] xl:mb-[4rem] lg:w-[23%] relative h-[10rem] sm:h-[15rem] xl:h-[18rem]">
                <input
                  type="file"
                  className="opacity-0 block w-full h-full"
                  id="img3"
                />
                <label
                  htmlFor="img3"
                  className="absolute w-full h-full cursor-pointer left-0 top-0 flex items-center justify-center border border-dotted border-[#555555] rounded-[1rem] "
                >
                  <img
                    src="https://cdn.bigboytoyz.com/new-version/assets/images/sellcar-placeholderimg.png"
                    alt="Image 3"
                    className="max-w-[40px]"
                  />
                </label>
              </div>
              <div className="w-[48%] mb-[2.5rem] xl:mb-[4rem] lg:w-[23%] relative h-[10rem] sm:h-[15rem] xl:h-[18rem]">
                <input
                  type="file"
                  className="opacity-0 block w-full h-full"
                  id="img4"
                />
                <label
                  htmlFor="img4"
                  className="absolute w-full h-full cursor-pointer left-0 top-0 flex items-center justify-center border border-dotted border-[#555555] rounded-[1rem] "
                >
                  <img
                    src="https://cdn.bigboytoyz.com/new-version/assets/images/sellcar-placeholderimg.png"
                    alt="Image 4"
                    className="max-w-[40px]"
                  />
                </label>
              </div>

              <div className="w-full relative mb-[2.5rem] xl:mb-[4rem] md:px-[1rem] xl:px-[1.25rem]">
                <textarea
                  name=""
                  id=""
                  placeholder="Message"
                  className={`${inputStyles} border border-[#727272] p-[1rem] lg:p-[2rem] rounded-[7px] h-[120px] lg:h-[18rem] `}
                ></textarea>
              </div>

              <div className="w-full flex justify-end">
                <button
                  type="submit"
                  className="bg-black urbanist w-full px-[3rem] py-[1.4rem] text-white text-[1.8rem] rounded-[4rem] font-medium cursor-pointer md:w-max md:mx-auto md:px-[5rem] md:mt-[1rem] lg:mr-0 xl:text-[2.2rem] xl:px-[7rem] xl:py-[1.9rem] xl:rounded-[8rem] transition-all duration-500 hover:bg-[#FE0000]"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const inputStyles =
  "w-full text-black bg-transparent outline-none border-b border-b-[#727272] text-[1.6rem] pb-[1.6rem] xl:text-[2rem]";

export default SellYourCar;
