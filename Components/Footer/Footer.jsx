"use client";

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Link from "next/link";

const carsCoWorldMenu = [
  { title: "List Cars", link: "/list-cars" },
  { title: "How it works", link: "#" },
  { title: "Why Us", link: "#" },
  { title: "Compare Cars", link: "#" },
  { title: "Blog", link: "#" },
  { title: "About Us", link: "/about-us" },
  { title: "Contact Us", link: "/contact" },
  { title: "Testimonials", link: "/testimonials" },
];
const stylesMenu = [
  { title: "Bike", link: "#" },
  { title: "Convertible", link: "#" },
  { title: "Hatchback", link: "#" },
  { title: "MUV-MPV", link: "#" },
  { title: "Sedan", link: "#" },
  { title: "Sports", link: "#" },
  { title: "SUV", link: "#" },
];

const brandsMenu = [
  { title: "Aprilia", link: "#" },
  { title: "Audi", link: "#" },
  { title: "Bentley", link: "#" },
  { title: "BMW", link: "#" },
  { title: "Chevrolet", link: "#" },
  { title: "Citroen", link: "#" },
  { title: "Fiat", link: "#" },
  { title: "Land Rover", link: "#" },
  { title: "Ford", link: "#" },
  { title: "Honda", link: "#" },
  { title: "Hyundai", link: "#" },
  { title: "Jeep", link: "#" },
  { title: "Kawasaki", link: "#" },
  { title: "Lexus", link: "#" },
  { title: "Mercedes-Benz", link: "#" },
  { title: "MG", link: "#" },
  { title: "Mini", link: "#" },
  { title: "Nissan", link: "#" },
  { title: "Suzuki", link: "#" },
  { title: "Toyota", link: "#" },
  { title: "Volkswagen", link: "#" },
  { title: "Volvo", link: "#" },
];

const socialLinks = [
  { title: "YouTube", icon: "/images/youtube-icon-white.webp", link: "#" },
  { title: "Instagram", icon: "/images/insta-icon-white.webp", link: "#" },
  { title: "Facebook", icon: "/images/fb-icon-white.webp", link: "#" },
];

const Footer = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <footer className="footer bg-black pt-[7rem] xl:pt-[13rem]">
      <div className="max-w-[1920px] mx-auto px-[1.5rem] xl:w-[97%] xl:max-w-[1790px] xl:px-[30px]">
        <div className="flex flex-wrap xl:justify-between xl:pb-[5rem]">
          <div className="w-full xl:w-[25%] xl:flex xl:flex-col xl:justify-between">
            <div>
              <Link href="/">
                <img
                  src="/images/logo-white.webp"
                  alt="Logo"
                  className="object-contain w-[15rem] xl:w-[20rem]"
                />
              </Link>
              <p className="mt-[3rem] text-[#818181] text-[1.5rem] xl:text-[2rem]">
                As a Big Boy Toyz company, Cars.co.in is dedicated to making
                luxury vehicles accessible and affordable for all.
              </p>
              <Link href="https://www.bigboytoyz.com/" target="_blank">
                <img
                  src="/images/footer-bbt-logo.webp"
                  alt=""
                  className="inline-block object-contain max-h-[4.2rem] mt-[3rem] xl:max-h-[5rem]"
                />
              </Link>
            </div>
            <ul className="hidden md:flex items-center flex-wrap gap-[1rem] mt-[2rem]">
              {socialLinks.map((item, index) => (
                <li key={index} className="w-max group">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[4rem] h-[4rem] rounded-[50%] border border-[#5B5B5B] flex items-center justify-center p-[1rem] xl:w-[6.1rem] xl:h-[6.1rem] group hover:bg-[#ffffff] transition-all duration-500 hover:border-[#ffffff]"
                  >
                    <img
                      src={item.icon}
                      alt={item?.title || "Icon"}
                      className="max-h-[1.5rem] max-w-[1.5rem] object-contain xl:max-h-[2.2rem] xl:max-w-[2.2rem] group-hover:invert transition-all duration-500"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Mobile Menus */}
          <div className="w-full mt-[5rem] md:hidden ">
            <div className=" border-t border-t-[#2A2A2A]">
              <Accordion open={open === 1}>
                <AccordionHeader onClick={() => handleOpen(1)}>
                  <div
                    className={`${
                      open === 1
                        ? "flex w-full items-center justify-between active-menu"
                        : "flex w-full  items-center justify-between"
                    }`}
                  >
                    <h3 className="urbanist font-[600] text-white text-[2rem] py-[2rem]">
                      Cars.Co World
                    </h3>
                    <img
                      src="/images/dropdown-arrow-grey.webp"
                      alt="Arrow"
                      className="object-contain w-[15px] transition-all duration-300"
                    />
                  </div>
                </AccordionHeader>
                <AccordionBody>
                  <ul className="pb-[2rem]">
                    {carsCoWorldMenu.map((menu, index) => (
                      <li key={index}>
                        <Link
                          href={menu.link}
                          className="block text-[#7D7D7D] text-[1.6rem] py-[6px] urbanist font-medium"
                        >
                          {menu.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionBody>
              </Accordion>
            </div>

            <div className=" border-t border-t-[#2A2A2A]">
              <Accordion open={open === 2}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                  <div
                    className={`${
                      open === 2
                        ? "flex w-full items-center justify-between active-menu"
                        : "flex w-full  items-center justify-between"
                    }`}
                  >
                    <h3 className="urbanist font-[600] text-white text-[2rem] py-[2rem]">
                      Styles
                    </h3>
                    <img
                      src="/images/dropdown-arrow-grey.webp"
                      alt="Arrow"
                      className="object-contain w-[15px] transition-all duration-300"
                    />
                  </div>
                </AccordionHeader>
                <AccordionBody>
                  <ul className="pb-[2rem]">
                    {stylesMenu.map((menu, index) => (
                      <li key={index}>
                        <Link
                          href={menu.link}
                          className="block text-[#7D7D7D] text-[1.6rem] py-[6px] urbanist font-medium"
                        >
                          {menu.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionBody>
              </Accordion>
            </div>

            <div className=" border-t border-t-[#2A2A2A] border-b border-b-[#2A2A2A]">
              <Accordion open={open === 3}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                  <div
                    className={`${
                      open === 3
                        ? "flex w-full items-center justify-between active-menu"
                        : "flex w-full  items-center justify-between"
                    }`}
                  >
                    <h3 className="urbanist font-[600] text-white text-[2rem] py-[2rem]">
                      Brands
                    </h3>
                    <img
                      src="/images/dropdown-arrow-grey.webp"
                      alt="Arrow"
                      className="object-contain w-[15px] transition-all duration-300"
                    />
                  </div>
                </AccordionHeader>
                <AccordionBody>
                  <ul className="pb-[2rem] flex flex-wrap justify-between md:block">
                    {brandsMenu.map((menu, index) => (
                      <li key={index} className="w-[47%] md:w-full">
                        <Link
                          href={menu.link}
                          className="block text-[#7D7D7D] text-[1.6rem] py-[6px] urbanist font-medium"
                        >
                          {menu.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionBody>
              </Accordion>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden w-full mt-[5rem] md:flex md:flex-wrap md:justify-between xl:w-[70%] xl:mt-0">
            <div className="w-[28%] pr-[3rem] border-r border-r-[#454545] xl:pl-[4rem] border-l border-l-[#454545] xl:w-[25%]">
              <h3 className="urbanist font-[600] text-white text-[2rem] xl:text-[2.6rem]">
                Cars.Co World
              </h3>
              <ul className="pt-[2rem]">
                {carsCoWorldMenu.map((menu, index) => (
                  <li key={index}>
                    <Link
                      href={menu.link}
                      className="block text-[#7D7D7D] text-[1.6rem] py-[6px] urbanist font-medium xl:text-[2.35rem] transition-all duration-500 hover:text-white"
                    >
                      {menu.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-[26%] pl-[3rem] border-r border-r-[#454545] xl:w-[23%]">
              <h3 className="urbanist font-[600] text-white text-[2rem] xl:text-[2.6rem]">
                Styles
              </h3>
              <ul className="pt-[2rem]">
                {stylesMenu.map((menu, index) => (
                  <li key={index}>
                    <Link
                      href={menu.link}
                      className="block text-[#7D7D7D] text-[1.6rem] py-[6px] urbanist font-medium xl:text-[2.35rem] transition-all duration-500 hover:text-white"
                    >
                      {menu.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-[46%] pl-[3rem] xl:w-[52%]">
              <h3 className="urbanist font-[600] text-white text-[2rem] xl:text-[2.6rem]">
                Brands
              </h3>
              <ul className="pt-[2rem] grid grid-cols-2 1xl:grid-cols-3">
                {brandsMenu.map((menu, index) => (
                  <li key={index}>
                    <Link
                      href={menu.link}
                      className="block text-[#7D7D7D] text-[1.6rem] py-[6px] urbanist font-medium xl:text-[2.35rem] transition-all duration-500 hover:text-white"
                    >
                      {menu.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-[3rem] md:border-t md:border-t-[#454545] md:mt-[5rem] md:flex md:justify-between">
          <p className="text-[#7D7D7D] font-medium text-[1.8rem] xl:text-[2.35rem]">
            Copyright ©2025 car.co.in
          </p>
          <p className="text-[#7D7D7D] font-medium text-[1.8rem] mt-[1rem] md:mt-0 xl:text-[2.35rem]">
            Credit :-{" "}
            <a
              href="https://www.artattackk.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Art Attackk
            </a>
          </p>

          <ul className="flex items-center flex-wrap gap-[1rem] mt-[2rem] md:hidden">
            {socialLinks.map((item, index) => (
              <li key={index} className="w-max">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[4rem] h-[4rem] rounded-[50%] border border-[#5B5B5B] flex items-center justify-center p-[1rem]"
                >
                  <img
                    src={item.icon}
                    alt={item?.title || "Icon"}
                    className="max-h-[1.5rem] max-w-[1.5rem] object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
