"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import faqs from "@/public/dummyData/faq";

const FaqSection = () => {
  const [activeHash, setActiveHash] = useState("");

  const [open, setOpen] = React.useState("");

  const handleOpen = (value) => setOpen(open === value ? "" : value);

  const handleHashClick = (e, hash) => {
    e.preventDefault();

    const target = document.querySelector(hash);
    console.log("Hash - " ,hash)
    console.log(target)
    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActiveHash(hash);
    window.history.pushState(null, "", hash);
  };
  return (
    <section className="bg-[#F3F3F3] py-[6rem] xl:py-[13rem]">
      <div className="container">
        <div className="flex flex-wrap justify-between max-w-[540px] mx-auto md:max-w-[768px] lg:max-w-full">
          <div className="relative w-full md:w-[35%] lg:w-[25%] xl:w-[28%]">
            <ul className=" bg-black py-[2rem] px-[3rem] rounded-[1.5rem] md:sticky top-[3rem] xl:px-[4rem]">
              {faqs.map((faq, index) => (
                <li className="border-b border-b-[#404040]" key={index}>
                  <a
                    href={`#faqGroup${index + 1}`}
                    className={`flex items-center font-medium text-[1.7rem] py-[1.5rem] xl:text-[2.8rem] xl:py-[2.5rem] ${
                      activeHash === `#faqGroup${index + 1}`
                        ? "text-[#FE0000]"
                        : "text-white"
                    }`}
                    onClick={(e) => handleHashClick(e, `#faqGroup${index + 1}`)}
                  >
                    <img
                      src="/images/right-arrow-white.webp"
                      alt="Arrow"
                      className="object-contain w-[1rem] inline-block mr-[10px] xl:w-[1.2rem] xl:mr-[12px]"
                    />
                    {faq.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-[55%] lg:w-[68%] xl:w-[65%]">
            {faqs.map((faq, index) => (
              <div
                key={index}
                id={`faqGroup${index + 1}`}
                className="pt-[5rem] xl:pt-[8rem] md:first:pt-0"
              >
                <h2 className="leading-[1.3] font-medium text-[2.6rem] [&>br]:hidden md:[&>br]:block xl:text-[4.5rem] xl:leading-[1.2] mb-[3rem]">
                  {faq.title}
                </h2>

                {faq.faqs.map((item, itemIndex) => (
                  <div
                    className=" [&>*:nth-child(1)]:border-t [&>*:nth-child(1)]:border-t-[#ddd]"
                    key={itemIndex}
                  >
                    <Accordion
                      open={
                        open ===
                        `${faq.title.replace(/\s/g, "").toLowerCase()}-${
                          itemIndex + 1
                        }`
                      }
                      className="border-b border-b-[#ddd]"
                    >
                      <AccordionHeader
                        onClick={() =>
                          handleOpen(
                            `${faq.title
                              .replace(/\s/g, "")
                              .toLowerCase()}-${itemIndex + 1}`,
                          )
                        }
                        className="border-0 [&_.ml-4]:hidden cursor-pointer"
                      >
                        <div className="pr-[3rem] py-[1.8rem] relative w-full xl:py-[2.5rem]">
                          <p className="text-[1.4rem] text-left font-normal lg:font-medium xl:text-[2.3rem]">
                            {item.question}
                          </p>

                          <div className="absolute right-0 w-[10px] h-[10px] flex justify-center items-center top-[50%] translate-y-[-50%] xl:w-[17px] xl:h-[17px]">
                            <span className="w-full h-[1px] inline-block bg-black"></span>
                            <span
                              className={`w-[1px] h-full inline-block bg-black absolute top-0 left-[4px] xl:left-[8px] opacity-[${
                                open ===
                                faq.title.replace(/\s/g, "").toLowerCase() +
                                  "-" +
                                  (itemIndex + 1)
                                  ? "0"
                                  : "1"
                              }]`}
                            ></span>
                          </div>
                        </div>
                      </AccordionHeader>
                      <AccordionBody>
                        <div
                          className="pr-[2rem] faq-body text-[#444444] text-[1.4rem] pb-[2rem] [&_li]:my-[0.5rem] [&_ul]:mt-[2rem] xl:text-[1.9rem] xl:pb-[4rem] leading-[1.7] font-normal"
                          dangerouslySetInnerHTML={{ __html: item.answer }}
                        ></div>
                      </AccordionBody>
                    </Accordion>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
