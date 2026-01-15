"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const phoneNumbers = [
  { label: "BUY - 9999 9999 83", link: "tel:+919999999983" },
  { label: "SELL - 9999 9999 15", link: "tel:+919999999915" },
  { label: "Car Detailing - 89999 99627", link: "tel:+918999999627" },
  { label: "Servicing - 89999 99264", link: "tel:+918999999264" },
  { label: "Modification & Upgrade - 89999 99627", link: "tel:+918999999627" },
  { label: "CARS.CO.IN - 9999 9999 08", link: "tel:+919999999908" },
];

const Header = () => {
  const pathName = usePathname();

  // Define static routes and dynamic route prefixes
  const staticRoutes = ["/emi-calculator"];
  const dynamicPrefixes = ["/cars", "/blogs"];

  // Check for matching static or dynamic routes
  const isPageHeader =
    staticRoutes.includes(pathName) ||
    dynamicPrefixes.some((prefix) => pathName.startsWith(prefix));

  return (
    <header
      className={`header left-[0] top-[0] z-[20] w-full ${
        isPageHeader ? "page-header bg-[#000] relative" : "bg-transparent absolute"
      }`}
      id="header"
    >
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
          <span className="menu-icon group flex flex-col justify-between w-[3.5rem] h-[1.5rem] xl:w-[3.4rem] xl:h-[1.7rem] cursor-pointer [&>span]:transition-all [&>span]:duration-500">
            <span className="bg-white w-[1.6rem] h-[1px] group-hover:w-[2.5rem]"></span>
            <span className="bg-white w-full h-[1px]"></span>
            <span className="bg-white w-[1.6rem] h-[1px] ml-auto group-hover:w-[2.5rem]"></span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
