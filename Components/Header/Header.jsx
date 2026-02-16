"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HeaderMenu from "./HeaderMenu";

const phoneNumbers = [
  { label: "BUY - 9999 9999 83", link: "tel:+919999999983" },
  { label: "SELL - 9999 9999 15", link: "tel:+919999999915" },
  { label: "Car Detailing - 89999 99627", link: "tel:+918999999627" },
  { label: "Servicing - 89999 99264", link: "tel:+918999999264" },
  { label: "Modification & Upgrade - 89999 99627", link: "tel:+918999999627" },
  { label: "CARS.CO.IN - 9999 9999 08", link: "tel:+919999999908" },
];

const Header = ({ forceBlack = false }) => {
  const pathName = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Define static routes and dynamic route prefixes
  const staticRoutes = [
    "/emi-calculator",
    "/privacy-policy",
    "/thank-you",
    "/terms-and-conditions",
    "/refund-policy",
    "/collections",
    "/search-results",
    "/booking",
  ];
  const dynamicPrefixes = ["/cars"];

  // single blog page: /blogs/{id}
  const isSingleBlog = pathName.startsWith("/blogs/") && pathName !== "/blogs";

  const isBlackHeader =
    forceBlack ||
    staticRoutes.includes(pathName) ||
    dynamicPrefixes.some((prefix) => pathName.startsWith(prefix)) ||
    isSingleBlog;

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY >= 1000);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`header left-[0] top-[0] z-[22] w-full ${
        isBlackHeader ? "black-header " : "bg-transparent absolute"
      } ${isSticky ? "page-header sticky-header w-full" : ""}`}
      id="header"
    >
      <HeaderMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className="header-wrapper mx-auto px-[20px] py-[15px] flex justify-between items-center lg:px-[30px] xl:py-[20px] xl:w-[97%] xl:max-w-[1790px] xl:px-[30px]">
        <Link
          href="/"
          className="inline-block w-[12rem] lg:w-[15rem] xl:w-[17.4rem]"
        >
          <Image
            src="/images/logo-white.webp"
            alt=""
            width="175"
            height="39"
            className="object-contain w-full h-auto"
            loading="eager"
          />
        </Link>

        <div className=" flex flex-wrap justify-end">
          <div className="hidden xl:flex items-center justify-end flex-[1] mr-[3rem] border-r border-r-[#dddddd]">
            {phoneNumbers.map((phone, index) => (
              <a
                key={index}
                href={phone.link}
                className="inter text-[#dddddd] text-[1.2rem] font-normal inline-block px-[1.5rem] border-l border-l-[#dddddd] transition-all duration-500 hover:text-white"
              >
                {phone.label}
              </a>
            ))}
          </div>
          <span className="flex md:hidden w-[4.4rem] h-[4.4rem] rounded-[50%] items-center justify-center mr-[7px] border border-[#4B4B4B] p-[1rem] bg-[#1D1A1B] transition-all duration-500 hover:bg-white focus:bg-white active:bg-white group">
            <img
              src="/images/mob-search-icon.png"
              alt="Search icon"
              className="object-contain transition-all duration-500 group-hover:invert group-focus:invert group-active:invert"
            />
          </span>
          <span
            className="menu-icon group w-[4.4rem] h-[4.4rem] rounded-[50%] border border-[#4B4B4B] py-[1.5rem] px-[1.2rem] bg-[#1D1A1B] md:p-0 md:bg-transparent flex flex-col justify-between md:border-0 md:w-[3.5rem] md:h-[1.5rem] xl:w-[3.4rem] xl:h-[1.7rem] cursor-pointer transition-all duration-500 [&>span]:transition-all [&>span]:duration-500 hover:bg-white focus:bg-white active:bg-white md:hover:bg-transparent md:focus:bg-transparent md:active:bg-transparent hover:[&>span]:bg-black focus:[&>span]:bg-black active:[&>span]:bg-black md:hover:[&>span]:bg-white md:focus:[&>span]:bg-white md:active:[&>span]:bg-white"
            onClick={() => setOpenMenu(true)}
          >
            <span className="bg-white w-[1rem] md:w-[1.6rem] h-[1px] md:group-hover:w-[2.5rem]"></span>
            <span className="bg-white w-full h-[1px]"></span>
            <span className="bg-white w-[1rem] h-[1px] md:w-[1.6rem] ml-auto md:group-hover:w-[2.5rem]"></span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
