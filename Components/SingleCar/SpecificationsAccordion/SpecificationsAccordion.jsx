"use client";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";



const SpecificationsAccordion = ({ specifications }) => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);


  return (
    <div className="hidden lg:block bg-white pb-[6rem] xl:pb-[13rem]">
      <div
        className="container"

      >
        <h6 className="text-[2rem] xl:text-[4.8rem] pt-[6rem] mb-[3rem] mt-[6rem] border-t border-t-[#383838] xl:mt-[13rem] xl:pt-[10rem] xl:mb-[6rem]">
          <b>Full</b> Specification
        </h6>
        {specifications?.map((item, index) => (
          <Accordion
            key={index}
            open={open === index + 1}
            className="border-b border-b-[#D9D9D9] first-of-type:border-t first-of-type:border-t-[#D9D9D9]"
          >
            <AccordionHeader
              onClick={() => handleOpen(index + 1)}
              className="w-full py-8 border-none xl:py-[3rem] cursor-pointer"
            >
              <div
                className={`${
                  open === index + 1
                    ? "flex items-center justify-between w-full  active"
                    : "flex items-center justify-between w-full "
                }`}
              >
                <div className="flex items-center w-max">
                  <img
                    src={item.icon}
                    alt=""
           
                    className="object-contain w-[1.8rem] h-[1.8rem] inline-block xl:w-[3rem] xl:h-[3rem] mr-[1.5rem] xl:mr-[2rem]"
                  />
                  <p className="font-medium text-[1.8rem] xl:text-[2.8rem]">
                    {item.title}
                  </p>
                </div>
                <div className="w-max">
                  <img
                    src="/images/accordion-arrow-black.png"
                    alt="Arrow Icon"
                
                    className={`w-[16px] object-contain transition-all duration-500 ease-in-out accordion-arrow ${ open === index + 1 && "rotate-[180deg]" }`}
                  />
                </div>
              </div>
            </AccordionHeader>
            <AccordionBody>
              <ul className="pb-5 px-10">
                {item.detailList.map((listItem, index) => (
                  <li key={index} className={`flex justify-between py-5`}>
                    <p className="text-[1.4rem] font-medium xl:text-[2rem]">
                      {listItem.title}
                    </p>
                    <p className="text-[1.4rem] font-normal text-gray-500 xl:text-[2rem]">
                      {listItem.description}
                    </p>
                  </li>
                ))}
              </ul>
            </AccordionBody>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default SpecificationsAccordion;
