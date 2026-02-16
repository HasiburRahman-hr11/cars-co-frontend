"use client";
import React, { useEffect, useState } from "react";
import styles from "./FilterPopup.module.css";
import Image from "next/image";

const brands = [
  {
    _id: "001",
    logo: "/images/single-car/brand-icon-audi.webp",
    title: "Audi",
    url: "#",
  },
  {
    _id: "002",
    logo: "/images/single-car/brand-icon-mercedes.webp",
    title: "Mercedes",
    url: "#",
  },
  {
    _id: "003",
    logo: "/images/single-car/brand-icon-jaguar.webp",
    title: "Jaguar",
    url: "#",
  },
  {
    _id: "004",
    logo: "/images/single-car/brand-icon-bmw.webp",
    title: "BMW",
    url: "#",
  },
  {
    _id: "005",
    logo: "/images/single-car/brand-icon-bentley.webp",
    title: "Bently",
    url: "#",
  },
  {
    _id: "006",
    logo: "/images/single-car/brand-icon-hd.webp",
    title: "Harley Davidson",
    url: "#",
  },
  {
    _id: "007",
    logo: "/images/single-car/brand-icon-ferrari.webp",
    title: "Ferrari",
    url: "#",
  },
  {
    _id: "008",
    logo: "/images/single-car/brand-icon-lambo.webp",
    title: "Lamborghini",
    url: "#",
  },
  {
    _id: "009",
    logo: "/images/single-car/brand-icon-toyota.webp",
    title: "Toyota",
    url: "#",
  },
  {
    _id: "0010",
    logo: "/images/single-car/brand-icon-land-rover.webp",
    title: "Land Rover",
    url: "#",
  },
];

const categories = [
  {
    _id: "001",
    icon: "/images/filter-type-bike.webp",
    title: "Bike",
    url: "#",
  },
  {
    _id: "002",
    icon: "/images/filter-type-convertible.webp",
    title: "Convertible",
    url: "#",
  },
  {
    _id: "003",
    icon: "/images/filter-type-coupe.webp",
    title: "Coupe",
    url: "#",
  },
  {
    _id: "004",
    icon: "/images/filter-type-hatchback.webp",
    title: "Hatchback",
    url: "#",
  },
  {
    _id: "005",
    icon: "/images/filter-type-muv.webp",
    title: "MUV-MPV",
    url: "#",
  },
  {
    _id: "006",
    icon: "/images/filter-type-sedan.webp",
    title: "Sedan",
    url: "#",
  },
  {
    _id: "007",
    icon: "/images/filter-type-sports.webp",
    title: "Sports",
    url: "#",
  },
  {
    _id: "008",
    icon: "/images/filter-type-suv.webp",
    title: "SUV",
    url: "#",
  },
];

const statesList = {
  AP: "Andhra Pradesh",
  AR: "Arunachal Pradesh",
  AS: "Assam",
  BR: "Bihar",
  CG: "Chhattisgarh",
  GA: "Goa",
  GJ: "Gujarat",
  HR: "Haryana",
  HP: "Himachal Pradesh",
  JH: "Jharkhand",
  KA: "Karnataka",
  KL: "Kerala",
  MP: "Madhya Pradesh",
  MH: "Maharashtra",
  MN: "Manipur",
  ML: "Meghalaya",
  MZ: "Mizoram",
  NL: "Nagaland",
  OD: "Odisha",
  PB: "Punjab",
  RJ: "Rajasthan",
  SK: "Sikkim",
  TN: "Tamil Nadu",
  TS: "Telangana",
  TR: "Tripura",
  UP: "Uttar Pradesh",
  UK: "Uttarakhand",
  WB: "West Bengal",
  AN: "Andaman and Nicobar Islands",
  CH: "Chandigarh",
  DD: "Dadra and Nagar Haveli and Daman and Diu",
  DL: "Delhi",
  JK: "Jammu and Kashmir",
  LD: "Lakshadweep",
  PY: "Puducherry",
  LA: "Ladakh",
  BH: "Bharat",
};

const FilterPopup = ({ active, togglePopup }) => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedKmDriven, setSelectedKmDriven] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [disableSubmit, setDisableSubmit] = useState(true);

  //   Select Registration function
  const handleSelectRegistrationYear = (year) => {
    setSelectedYear(year);
  };
  //   Select KM Driven function
  const handleSelectKmDriven = (km) => {
    setSelectedKmDriven(km);
  };

  //   Select Budget function
  const handleSelectBudget = (budget) => {
    setSelectedBudget(budget);
  };
  //   Select Fuel Type function
  const handleSelectFuelType = (fuel) => {
    setFuelType(fuel);
  };

  //   Select and Unselect Vehicle Type Function
  const selectTypesController = (item) => {
    const isInArray = selectedTypes.filter((e) => e._id === item._id);
    if (isInArray.length > 0) {
      const filteredBrands = selectedTypes.filter(
        (brand) => brand._id !== item._id,
      );
      setSelectedTypes(filteredBrands);
    } else {
      setSelectedTypes([...selectedTypes, item]);
    }
  };

  //   Reset function
  const handleResetFilter = () => {
    setDisableSubmit(true);
    setSelectedTypes([]);
    setSelectedBrand("");
    setSelectedYear("");
    setSelectedKmDriven("");
    setSelectedBudget("");
  };

  const handleSubmit = () => {
    if (!disableSubmit) {
      console.log("Selected Year:", selectedYear);
      console.log("Selected KM:", selectedKmDriven);
      console.log("Selected Budget:", selectedBudget);
      console.log("Selected Types:", selectedTypes);
      console.log("Selected Brand:", selectedBrand);
      togglePopup();
    }
  };

  useEffect(() => {
    console.log(selectedBrand);
    console.log(selectedBudget);
    console.log(selectedTypes);
    if (
      selectedBrand !== "" ||
      selectedTypes.length > 0 ||
      selectedBudget !== ""
    ) {
      setDisableSubmit(false);
    } else {
      setDisableSubmit(true);
    }
  }, [selectedBrand, selectedTypes, selectedBudget]);

  return (
    <div
      className={`${
        active ? "opacity-100 flex" : ""
      } fixed w-full h-full left-0 top-0 min-h-screen items-center justify-center opacity-0 transition-all duration-500 z-100`}
    >
      <div
        className={` bg-[#00000099] w-full h-full fixed left-0 top-0 z-10 block opacity-100 transition-all duration-500`}
        onClick={togglePopup}
      ></div>
      <div className="w-full bg-white h-screen z-20 mx-auto relative overflow-x-hidden lg:w-[80%] lg:rounded-[2rem] lg:max-h-[90vh] xl:w-[70%] 2xl:max-w-[1400px]">
        <div className="popupScrollbar overflow-y-auto h-full px-8 pb-10 xl:px-[4rem]">
          <div className="flex justify-between py-6 border-b border-neutral-200 xl:pt-[3rem]">
            <h3 className="text-[1.8rem] font-medium xl:text-[3.5rem]">
              Filters
            </h3>
            <div className="flex items-center">
              <div
                className={`flex py-[0.7rem] px-[2rem] rounded-[1.5rem] xl:rounded-[3rem] items-center w-max border border-black cursor-pointer group hover:bg-black transition-all duration-300 xl:px-[2.5rem] xl:py-[0.8rem] ${
                  disableSubmit ? "opacity-40 pointer-events-none" : ""
                }`}
                onClick={handleResetFilter}
              >
                <img
                  src="/images/filter-reset.webp"
                  alt="Reset Filter"
                  className="w-5 xl:w-[1.5rem] inline-block object-contain transition-all duration-300 group-hover:invert"
                />
                <span className="text-xl xl:text-[1.5rem] inline-block ml-4 leading-none transition-all duration-300 group-hover:text-white">
                  Reset
                </span>
              </div>
              <div
                className="w-[2.7rem] h-[2.7rem] p-3 flex justify-center items-center cursor-pointer rounded-[50%] border border-black ml-3 group hover:bg-black transition-all duration-300 xl:w-[3.5rem] xl:h-[3.5rem] xl:p-[0.9rem]"
                onClick={togglePopup}
              >
                <img
                  src="/images/filter-close.webp"
                  alt="Close Popup"
                  className="w-5 object-contain transition-all duration-300 group-hover:invert xl:w-full"
                />
              </div>
            </div>
          </div>

          {/* Registration Year */}
          <div className="border-t border-b border-neutral-200 pt-10 pb-4">
            <p className={filterTypeTitle}>Registration Year</p>
            <ul className="flex py-7 flex-wrap gap-y-5">
              <li
                className={`${capsuleStyles}  ${selectedYear === "2000-2010" ? "active" : ""}`}
                onClick={() => handleSelectRegistrationYear("2000-2010")}
              >
                2000 - 2010
              </li>
              <li
                className={`${capsuleStyles}  ${selectedYear === "2011-2020" ? "active" : ""}`}
                onClick={() => handleSelectRegistrationYear("2011-2020")}
              >
                2011 - 2020
              </li>
              <li
                className={`${capsuleStyles}  ${selectedYear === "2021-2025" ? "active" : ""}`}
                onClick={() => handleSelectRegistrationYear("2021-2025")}
              >
                2021 - 2025
              </li>
              <li
                className={`${capsuleStyles}  ${selectedYear === "all" ? "active" : ""}`}
                onClick={() => handleSelectRegistrationYear("all")}
              >
                All
              </li>
            </ul>
          </div>

          {/* Registration State */}
          <div className="border-t border-b border-neutral-200 py-10">
            <p className={filterTypeTitle}>Registration State</p>

            <select className={selectStyles}>
              <option value="all">All States</option>
              {Object.entries(statesList).map(([code, name]) => (
                <option key={code} value={code}>
                  {name} ({code})
                </option>
              ))}
            </select>
          </div>

          {/* Kms Driven */}
          <div className="border-t border-b border-neutral-200 pt-10 pb-4">
            <p className={filterTypeTitle}>Kms Driven</p>
            <ul className="flex py-7 flex-wrap gap-y-5">
              <li
                className={`${capsuleStyles} ${
                  styles.budgetItem
                } ${selectedKmDriven === "new" ? "active" : ""}`}
                onClick={() => handleSelectKmDriven("new")}
              >
                Brand New
              </li>
              <li
                className={`${capsuleStyles} ${
                  styles.budgetItem
                } ${selectedKmDriven === "0-5000" ? "active" : ""}`}
                onClick={() => handleSelectKmDriven("0-5000")}
              >
                0 - 5000
              </li>
              <li
                className={`${capsuleStyles}  ${selectedKmDriven === "5000-10000" ? "active" : ""}`}
                onClick={() => handleSelectKmDriven("5000-10000")}
              >
                5000-10000
              </li>
              <li
                className={`${capsuleStyles}  ${selectedKmDriven === "10000-15000" ? "active" : ""}`}
                onClick={() => handleSelectKmDriven("10000-15000")}
              >
                10000-15000
              </li>
              <li
                className={`${capsuleStyles}  ${selectedKmDriven === "15000-20000" ? "active" : ""}`}
                onClick={() => handleSelectKmDriven("15000-20000")}
              >
                15000-20000
              </li>
              <li
                className={`${capsuleStyles}  ${selectedKmDriven === "20000+" ? "active" : ""}`}
                onClick={() => handleSelectKmDriven("20000+")}
              >
                20000 & Above
              </li>
            </ul>
          </div>

          {/* Fuel Type */}
          <div className="border-t border-b border-neutral-200 pt-10 pb-4">
            <p className={filterTypeTitle}>Fuel Type</p>
            <ul className="flex py-7 flex-wrap gap-y-5">
              <li
                className={`${capsuleStyles}  ${fuelType === "Petrol" ? "active" : ""}`}
                onClick={() => handleSelectFuelType("Petrol")}
              >
                Petrol
              </li>
              <li
                className={`${capsuleStyles}  ${fuelType === "Diesel" ? "active" : ""}`}
                onClick={() => handleSelectFuelType("Diesel")}
              >
                Diesel
              </li>
              <li
                className={`${capsuleStyles}  ${fuelType === "Hybrid" ? "active" : ""}`}
                onClick={() => handleSelectFuelType("Hybrid")}
              >
                Hybrid
              </li>
              <li
                className={`${capsuleStyles}  ${fuelType === "Electric" ? "active" : ""}`}
                onClick={() => handleSelectFuelType("Electric")}
              >
                Electric
              </li>
            </ul>
          </div>

          {/* Budget */}
          <div className="border-t border-b border-neutral-200 pt-10 pb-4">
            <p className={filterTypeTitle}>Price Range</p>
            <ul className="flex py-7 flex-wrap gap-y-5">
              <li
                className={`${capsuleStyles}  ${selectedBudget === "500000" ? "active" : ""}`}
                onClick={() => handleSelectBudget("500000")}
              >
                Less Than 50L
              </li>
              <li
                className={`${capsuleStyles} ${
                  selectedBudget === "5000000-10000000" ? "active" : ""
                }`}
                onClick={() => handleSelectBudget("5000000-10000000")}
              >
                50L to 1Cr
              </li>
              <li
                className={`${capsuleStyles} ${
                  selectedBudget === "10000000-15000000" ? "active" : ""
                }`}
                onClick={() => handleSelectBudget("10000000-15000000")}
              >
                1Cr to 1.5Cr
              </li>
              <li
                className={`${capsuleStyles} ${
                  selectedBudget === "15000000-50000000" ? "active" : ""
                }`}
                onClick={() => handleSelectBudget("15000000-50000000")}
              >
                1.5Cr & Above
              </li>
            </ul>
          </div>

          {/* Vehicle Type */}
          <div className="py-12">
            <p className={filterTypeTitle}>Vehicle type</p>
            <ul className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[1.5rem] xl:gap-[2.5rem] mt-[2rem]">
              {categories.map((category) => (
                <li
                  key={category._id}
                  className={`${
                    styles.categoryItem
                  } text-center flex justify-center items-center flex-col border border-neutral-200 rounded-md cursor-pointer transition-all duration-300 aspect-square xl:rounded-2xl ${
                    selectedTypes.some((item) => item._id === category._id)
                      ? styles.active
                      : ""
                  }`}
                  onClick={() => selectTypesController(category)}
                >
                  <img
                    src={category.icon}
                    alt={category.title}
                    className="object-contain h-8 lg:h-12 xl:h-18"
                  />
                  <p className="text-black text-[1.3rem] mt-3 font-medium xl:text-[2rem] xl:mt-12">
                    {category.title}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand */}
          <div className="border-t pt-10 ">
            <p className={filterTypeTitle}>Brands</p>

            <select
              className={selectStyles}
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
            >
              <option value="all">All Brands</option>
              {brands.map((brand, index) => (
                <option value={brand._id} key={index}>
                  {brand.title}
                </option>
              ))}
            </select>
          </div>

          {/* Submit  */}
          <div>
            <button
              className={`border mt-[30px] text-white w-full flex items-center justify-center py-6 px-10 transition-all duration-500 font-medium xl:text-[1.8rem] xl:py-8 ${
                disableSubmit
                  ? " bg-gray-300 border-gray-300 pointer-events-none"
                  : "bg-black border-black cursor-pointer"
              }`}
              onClick={handleSubmit}
              disabled={disableSubmit}
            >
              Show Cars
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const filterTypeTitle = "font-medium text-[1.5rem] xl:text-[2.2rem]";
const capsuleStyles =
  "text-[1.3rem] tracking-tight px-[1.5rem] border border-neutral-200 rounded-3xl mr-3 whitespace-nowrap cursor-pointer transition-all duration-300 xl:text-[1.6rem] xl:rounded-[4rem] xl:px-[2.5rem] xl:min-w-[12rem] py-[0.5rem] flex justify-center items-center filter-popup-capsule";
const selectStyles =
  "bg-transparent border border-neutral-200 mt-8 px-[2rem] py-[1.5rem] text-[1.3rem] w-full rounded-md outline-none xl:text-[1.7rem] filter-custom-dropdown";

export default FilterPopup;
