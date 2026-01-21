import React from "react";
import Slider from "react-slick";
import Link from "next/link";

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

const CarItem = ({ data, togglePopup }) => {
  return (
    <div className="pb-16 bg-[#fff] common-car-item transition-all duration-500 ease-in-out">
      <Link href={`/cars/${data._id}`} className="block relative">
        <Slider {...settings} className="collection-gallery-slider">
          {data.gallery.map((galleryImage, index) => (
            <div key={index} className="relative outline-none">
              <img
                src={galleryImage}
                alt="Product Image"
                className="w-full object-cover block"
                width="470"
                height="351"
              />
            </div>
          ))}
        </Slider>
        <div className="absolute w-max left-[-0.4rem] top-0">
          {data.isBooked && (
            <img
              src="/images/collection-booked.webp"
              alt="Booked"
              width="33"
              height="84"
              className="object-contain max-h-[3rem] w-auto"
            />
          )}
          {data.isSoldOut && (
            <img
              src="/images/collection-sold.webp"
              alt="Sold"
              width="33"
              height="84"
              className="object-contain max-h-[3rem] w-auto"
            />
          )}
        </div>
      </Link>

      <div className="px-[2rem] pt-8 md:px-10 xl:px-[3rem] 1xl:px-[4rem] 1xl:pt-[2.5rem] 3xl:pt-[3rem] ">
        <Link href={`/cars/${data._id}`} className="block">
          <div>
            <p
              className={`inline-block bg-black text-white text-center rounded-2xl text-base px-5 py-2 leading-4 lg:text-sm lg:py-1 xl:text-[1.2rem] xl:leading-[1] xl:px-10 xl:py-[0.6rem] xl:rounded-[4rem]`}
            >
              Reg.Year : {data.registrationYear}
            </p>
            <h4 className="mt-[1rem] font-medium text-[1.7rem] sm:text-3xl lg:text-2xl xl:text-[2.5rem] xl:tracking-tighter 1xl:mt-6  line-clamp-1">
              {data.title}
            </h4>
            <p
              className={`text-[1.4rem] mt-[0.5rem] font-[600] lg:mt-3 xl:mt-[0.5rem] mb-12 sm:mb-8 xl:text-[2.2rem]`}
            >
              ₹ {data.price}
            </p>
          </div>
          <ul className="flex carCommonInfo [&>*:first-child]:pl-0 [&>*:first-child]:border-0">
            <li className="w-2/6 pl-[1.7rem] border-l border-[rgb(207,207,207)] sm:pl-[1.2rem]">
              <img
                src="/images/km-icon-black.webp"
                alt="Icon"
                width="24"
                height="25"
                className="object-contain h-[1.2rem] lg:h-[1rem] xl:h-[1.2rem]"
              />
              <p className="text-base mt-4 mb-2 lg:mt-3 lg:mb-1 lg:text-sm xl:text-[1.4rem] text-[#767778] tracking-[-0.5px]">
                Kilometers Driven
              </p>
              <h6
                className={`text-lg xl:text-[1.4rem] font-[600] `}
              >
                {" "}
                {data?.kmDriven ? data.kmDriven : "3500"} km
              </h6>
            </li>
            <li className="w-2/6 pl-[1.7rem] border-l border-[#cfcfcf] sm:pl-[1.2rem]">
              <img
                src="/images/gas-icon-black.webp"
                alt="Icon"
                width="24"
                height="25"
                className="object-contain h-[1.2rem] lg:h-[1rem] xl:h-[1.2rem]"
              />
              <p className="text-base mt-4 mb-2 lg:mt-3 lg:mb-1 lg:text-sm xl:text-[1.4rem] text-[#767778] tracking-[-0.5px]">
                Fuel / Gas Type
              </p>
              <h6
                className={`text-lg xl:text-[1.4rem] font-[600] `}
              >
                {data?.fuelType ? data.fuelType : "Petrol"}
              </h6>
            </li>
            <li className="w-2/6 pl-[1.7rem] border-l border-[#cfcfcf] sm:pl-[1.2rem]">
              <img
                src="/images/register-icon-black.webp"
                alt="Icon"
                width="24"
                height="25"
                className="object-contain h-[1.2rem] lg:h-[1rem] xl:h-[1.2rem]"
              />
              <p className="text-base mt-4 mb-2 lg:mt-3 lg:mb-1 lg:text-sm xl:text-[1.4rem] text-[#767778] tracking-[-0.5px]">
                Registration State
              </p>
              <h6
                className={`text-lg xl:text-[1.4rem] font-[600] `}
              >
                {data?.registrationState ? data.registrationState : "Delhi"}
              </h6>
            </li>
          </ul>
        </Link>

        <div className="flex items-center justify-between callBtnGroup mt-12 overflow-hidden flex-wrap">
          {data.isBooked || data.isSoldOut ? (
            <div className="flex-grow">
              <div
                className="bg-black text-white text-[1.2rem] font-medium xl:font-normal flex justify-center items-center h-[4.5rem] rounded-[0.5rem] xl:h-[5.8rem] xl:text-[1.7rem] cursor-pointer border border-black group transition-all duration-500 hover:bg-transparent hover:text-black"
                onClick={togglePopup}
              >
                <img
                  src="/images/square-btn-call-icon.webp"
                  width="20"
                  height="20"
                  alt="Call Icon"
                  className="object-contain w-[1.57rem] mr-6 h-auto xl:w-[2rem] xl:mr-[3rem] group-hover:invert transition-all duration-500"
                />
                Request A Call Back
              </div>
            </div>
          ) : (
            <div className="flex-grow">
              <a
                href="tel:+919999999983"
                className="bg-black text-white text-[1.2rem] font-medium xl:font-normal flex justify-center items-center h-[4.5rem] rounded-[0.5rem] xl:h-[5.8rem] xl:text-[1.7rem] cursor-pointer border border-black group transition-all duration-500 hover:bg-transparent hover:text-black"
              >
                <img
                  src="/images/square-btn-call-icon.webp"
                  width="20"
                  height="20"
                  alt="Call Icon"
                  className="object-contain w-[1.57rem] mr-6 h-auto xl:w-[2rem] xl:mr-[3rem] group-hover:invert transition-all duration-500"
                />
                Call Cars.Co.In
              </a>
            </div>
          )}

          <div className="callBtnRight ml-4">
            <a
              href="#"
              className="bg-[#1bd741] w-[4.5rem] h-[4.5rem] flex justify-center items-center rounded-[5px] xl:w-[5.8rem] xl:h-[5.8rem] group"
            >
              <img
                src="/images/whatsapp-btn-icon.webp"
                width="18"
                height="18"
                alt="Call Icon"
                className="object-contain w-9 h-auto xl:w-[2.6rem] transition-all duration-500 group-hover:scale-110"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarItem;
