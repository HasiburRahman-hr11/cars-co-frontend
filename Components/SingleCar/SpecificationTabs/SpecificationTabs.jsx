"use client";
import Image from "next/image";
import React, {  useState } from "react";
import styles from "../SingleCar.module.css";




const SpecificationTabs = ({specifications}) => {
  const [activeTab, setActiveTab] = useState("tab-1");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="block md:hidden">
      <div className="container">
        <div className="border-t border-t-[#dddddd] block my-[4rem]"></div>
      </div>
      <ul
        className={`${styles.specTabList} detailPageTabs no-scroll-bar flex flex-wrap overflow-auto items-center pl-[1rem] mb-[3rem]`}
      >
        {specifications?.map((item, index) => (
          <li
            key={index}
            className={`${
              styles.specTabItem
            } flex items-center h-[3.5rem] px-[1.5rem] group border border-black rounded-[5rem] mr-[1.5rem] w-max ${
              activeTab === `tab-${index + 1}` ? "active bg-black" : "transparent"
            }`}
            onClick={() => handleTabChange(`tab-${index + 1}`)}
          >
            <img
              src={item.icon}
              alt=""
              className={`object-contain w-[2rem] h-[2rem] ${
              activeTab === `tab-${index + 1}` ? "invert" : ""
            }`}
            />
            <span className={`text-[1.2rem] font-normal ml-[1rem] whitespace-nowrap inline-block mr-[2rem]  ${
              activeTab === `tab-${index + 1}` ? "text-white" : "text-black"
            }`}>
              {item.title}
            </span>
          </li>
        ))}
      </ul>

      <div className="container">
        {specifications?.map((item, index) => (
          <div
          key={index}
            className={`tabContainer ${
              activeTab === `tab-${index + 1}` ? "active" : ""
            }`}
          >
            <div className="flex items-center mb-6">
              <img
                src={item.icon}
                alt=""
           
                className="object-contain w-[2rem] h-[2rem] inline-block mr-[1rem]"
              />
              <h6 className="font-medium text-[1.8rem]">{item.title}</h6>
            </div>
            <ul>
              {item.detailList.map((listItem, index) => (
                <li
                  key={index}
                  className={`${styles.tabContentList} flex justify-between py-6 sm:py-8`}
                >
                  <p className="text-[1.2rem] font-medium w-[35%]">{listItem.title}</p>
                  <p className="text-[1.2rem] font-light text-gray-500 w-[60%]">
                    {listItem.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecificationTabs;
