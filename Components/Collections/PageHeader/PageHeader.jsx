"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import FilterPopup from "@/Components/FilterPopup/FilterPopup";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const PageHeader = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortBy, setSorBy] = useState("");
  const [sortTitle, setSorTitle] = useState("Price");

  const togglePopup = () => {
    setFilterOpen(!filterOpen);
  };

  const sortChangeHandle = (title, value) => {
    setSorTitle(title);
    setSorBy(value);
  };

  return (
    <section className="bg-white md:bg-[#f3f3f3]">
      <div className="container">
        <div className="pt-16 xl:pt-[11rem] sm:max-w-[50rem] sm:mx-auto md:max-w-none">
          <p className="hidden lg:flex flex-wrap items-center font-normal">
            <Link href="/" className="text-lg md:text-xl xl:text-[1.8rem]">
              Home
            </Link>
            <Image
              src="/images/breadcrumb-arrow.webp"
              className="object-contain w-3 inline-block mx-2 h-auto  xl:mx-4 xl:w-[0.8rem]"
              width="6"
              height="11"
              alt="Arrow Icon"
            />
            <span className="text-lg md:text-xl xl:text-[1.8rem]">
              Collection
            </span>
          </p>
          <div className="lg:mt-[1rem] xl:mt-[3rem]">
            <h1 className="font-[200] [&>b]:font-[400] text-[3.5rem] leading-[1.1] tracking-[-2px] xl:text-[7.5rem] 3xl:tracking-[-5px] md:[&>br]:hidden">
              More Than Cars - <br /> <b>It’s a Way of Life.</b>{" "}
            </h1>
            <p className="font-[300] text-[1.4rem] mt-[2rem] pr-[4rem] xl:text-[2.5rem] text-[#666666] tracking-wide">
              We make driving your dream car seamless, swift, and unforgettable.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-between mt-[5rem] border-t border-[#D9D9D9] py-[3rem] xl:mt-[9.5rem] xl:pt-[4rem] md:border-b md:border-b-[#D9D9D9]">
            <div className="flex flex-wrap items-center lg:flex-row-reverse">
              <div className="flex flex-wrap items-center ">
                <div className="md:flex cursor-pointer md:items-center lg:mx-[2rem] lg:px-[2rem] lg:border-l lg:border-[#D9D9D9] xl:px-[3.5rem] xl:mx-[3.5rem]">
                  <p className="hidden md:inline-block md:mr-4 xl:text-[2rem]">
                    Filters:
                  </p>
                  <div
                    className="w-[2.5rem] h-[2.5rem] p-[0.5rem] mr-[10px] border border-[#E0E0E0] rounded-[5px]  xl:w-[4.5rem] xl:h-[4.5rem] xl:p-[0.9rem] flex justify-center items-center filter-icon-box group transition-all duration-300 hover:bg-black"
                    onClick={togglePopup}
                  >
                    <img
                      src="/images/collection-filter-icon.svg"
                      width="20"
                      height="20"
                      className="w-full object-contain h-auto xl:w-[2.8rem] transition-all duration-300 group-hover:invert"
                      alt="Filter Icon"
                    />
                  </div>

                  {filterOpen && (
                    <FilterPopup
                      active={filterOpen}
                      togglePopup={togglePopup}
                    />
                  )}
                </div>
              </div>

              <h2 className="text-[1.5rem] md:text-[1.6rem] xl:text-[2rem]">
                Total 1575 Results Found
              </h2>
            </div>

            <div className="flex flex-wrap items-center">
              <div className="ml-5 md:flex md:items-center md:ml-8">
                <p className="hidden md:inline-block md:mr-4 xl:text-[2rem]">
                  Sort by:
                </p>
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className=" w-[11rem] whitespace-nowrap  inline-flex justify-between items-center gap-x-1.5 outline-none border border-neutral-400 pl-[1rem] py-[0.4rem] text-[1.1rem] rounded-[0.4rem] md:border md:border-[#E0E0E0] md:h-[4rem] md:min-w-[12rem] md:rounded-[5px] md:bg-transparent md:text-xl xl:min-w-[19rem]  xl:h-[5.7rem] xl:text-[2rem] cursor-pointer">
                      {sortTitle}
                      <ChevronDownIcon
                        className="h-8 w-8 object-contain  1xl:w-[2.8rem] 1xl:h-[2.8rem] 3xl:w-[3.5rem] 3xl:h-[3.5rem] text-[#333] font-light"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-[11rem] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-[#555] ring-opacity-5 focus:outline-none md:w-[12rem] xl:min-w-[19rem] xl:ring-0">
                      <div>
                        <Menu.Item>
                          {({ active }) => (
                            <span
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-[1.1rem] md:px-5 md:py-4  md:text-xl xl:text-[1.8rem] cursor-pointer",
                              )}
                              onClick={() =>
                                sortChangeHandle("High To Low", "high")
                              }
                            >
                              High To Low
                            </span>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <span
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-[1.1rem] md:px-5 md:py-4  md:text-xl xl:text-[1.8rem] cursor-pointer",
                              )}
                              onClick={() =>
                                sortChangeHandle("Low To High", "low")
                              }
                            >
                              Low To High
                            </span>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
