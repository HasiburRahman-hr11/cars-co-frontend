"use client";
import React, { useState } from "react";

const ListCarForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [brandModel, setBrandModel] = useState("");
  const [year, setYear] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [state, setState] = useState("");
  const [message, setMessage] = useState("");
  const [carImage1, setCarImage1] = useState("");
  const [carImage2, setCarImage2] = useState("");
  const [carImage3, setCarImage3] = useState("");
  const [carImage4, setCarImage4] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);

    switch (e.target.id) {
      case "img1":
        setCarImage1(previewUrl);
        break;
      case "img2":
        setCarImage2(previewUrl);
        break;
      case "img3":
        setCarImage3(previewUrl);
        break;
      case "img4":
        setCarImage4(previewUrl);
        break;
      default:
        break;
    }
  };
  return (
    <div className="mt-[2rem] md:mt-[4rem] bg-[#F0F0F0] rounded-[1.5rem] py-[4rem] px-[1.5rem] lg:px-[2.5rem] xl:px-[4rem]">
      <h3 className="text-[2.2rem] font-medium xl:text-[4rem]">
        Get free car evaluation
      </h3>
      <form action="" className="block mt-[3rem]">
        <div className="flex flex-wrap justify-around">
          <div className="w-full mb-[2.5rem] xl:mb-[4rem] md:w-[31%]">
            <input
              type="text"
              placeholder="Full Name"
              className={`${inputStyles}`}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="w-full mb-[2.5rem] xl:mb-[4rem] md:w-[31%]">
            <input
              type="tel"
              placeholder="Mobile"
              className={`${inputStyles}`}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="w-full mb-[2.5rem] xl:mb-[4rem] md:w-[31%]">
            <input
              type="email"
              placeholder="Email"
              className={`${inputStyles}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-full relative mb-[2.5rem] xl:mb-[4rem] md:w-[48%] lg:w-[23%]">
            <input
              type="text"
              placeholder="Brand Model"
              className={`${inputStyles}`}
              value={brandModel}
              onChange={(e) => setBrandModel(e.target.value)}
            />
          </div>
          <div className="w-full mb-[2.5rem] xl:mb-[4rem] md:w-[48%] lg:w-[23%]">
            <input
              type="text"
              placeholder="Year"
              className={`${inputStyles}`}
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
          <div className="w-full relative mb-[2.5rem] xl:mb-[4rem] md:w-[48%] lg:w-[23%]">
            <input
              type="text"
              placeholder="Fuel"
              className={`${inputStyles}`}
              value={fuelType}
              onChange={(e) => setFuelType(e.target.value)}
            />
          </div>
          <div className="w-full relative mb-[2.5rem] xl:mb-[4rem] md:w-[48%] lg:w-[23%]">
            <input
              type="text"
              placeholder="State"
              className={`${inputStyles}`}
              value={state}
              onChange={(e) => setState(e.target.value)}
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

          <div className="w-[48%] mb-[2.5rem] xl:mb-[4rem] lg:w-[23%] relative overflow-hidden h-[10rem] sm:h-[15rem] xl:h-[18.6rem] rounded-[1rem]">
            <input
              type="file"
              className="opacity-0 block w-full h-full"
              id="img1"
              accept="image/*"
              onChange={handleImageChange}
            />
            <label
              htmlFor="img1"
              className="absolute w-full h-full cursor-pointer left-0 top-0 flex items-center justify-center border border-dashed border-[#555555] rounded-[1rem] p-[5px]"
            >
              <img
                src={
                  carImage1
                    ? carImage1
                    : "https://cdn.bigboytoyz.com/new-version/assets/images/sellcar-placeholderimg.png"
                }
                alt="Image 1"
                className={
                  carImage1
                    ? "w-full h-full object-contain"
                    : "max-w-[40px] object-contain"
                }
              />
            </label>
          </div>
          <div className="w-[48%] mb-[2.5rem] xl:mb-[4rem] lg:w-[23%] relative overflow-hidden h-[10rem] sm:h-[15rem] xl:h-[18.6rem] rounded-[1rem]">
            <input
              type="file"
              className="opacity-0 block w-full h-full"
              id="img2"
              accept="image/*"
              onChange={handleImageChange}
            />
            <label
              htmlFor="img2"
              className="absolute w-full h-full cursor-pointer left-0 top-0 flex items-center justify-center border border-dashed border-[#555555] rounded-[1rem] p-[5px]"
            >
              <img
                src={
                  carImage2
                    ? carImage2
                    : "https://cdn.bigboytoyz.com/new-version/assets/images/sellcar-placeholderimg.png"
                }
                alt="Image 2"
                className={
                  carImage2
                    ? "w-full h-full object-contain"
                    : "max-w-[40px] object-contain"
                }
              />
            </label>
          </div>
          <div className="w-[48%] mb-[2.5rem] xl:mb-[4rem] lg:w-[23%] relative overflow-hidden h-[10rem] sm:h-[15rem] xl:h-[18.6rem] rounded-[1rem]">
            <input
              type="file"
              className="opacity-0 block w-full h-full"
              id="img3"
              accept="image/*"
              onChange={handleImageChange}
            />
            <label
              htmlFor="img3"
              className="absolute w-full h-full cursor-pointer left-0 top-0 flex items-center justify-center border border-dashed border-[#555555] rounded-[1rem] p-[5px]"
            >
              <img
                src={
                  carImage3
                    ? carImage3
                    : "https://cdn.bigboytoyz.com/new-version/assets/images/sellcar-placeholderimg.png"
                }
                alt="Image 3"
                className={
                  carImage3
                    ? "w-full h-full object-contain"
                    : "max-w-[40px] object-contain"
                }
              />
            </label>
          </div>
          <div className="w-[48%] mb-[2.5rem] xl:mb-[4rem] lg:w-[23%] relative overflow-hidden h-[10rem] sm:h-[15rem] xl:h-[18.6rem] rounded-[1rem]">
            <input
              type="file"
              className="opacity-0 block w-full h-full"
              id="img4"
              accept="image/*"
              onChange={handleImageChange}
            />
            <label
              htmlFor="img4"
              className="absolute w-full h-full cursor-pointer left-0 top-0 flex items-center justify-center border border-dashed border-[#555555] rounded-[1rem] p-[5px]"
            >
              <img
                src={
                  carImage4
                    ? carImage4
                    : "https://cdn.bigboytoyz.com/new-version/assets/images/sellcar-placeholderimg.png"
                }
                alt="Image 4"
                className={
                  carImage4
                    ? "w-full h-full object-contain"
                    : "max-w-[40px] object-contain"
                }
              />
            </label>
          </div>

          <div className="w-full relative mb-[2.5rem] xl:mb-[4rem] md:px-[1rem] xl:px-[1.25rem]">
            <textarea
              name=""
              id=""
              placeholder="Message"
              className={inputStyles}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
  );
};

const inputStyles =
  "w-full text-black bg-transparent outline-none border-b border-b-[#727272] text-[1.6rem] pb-[1.6rem] xl:text-[2rem]";

export default ListCarForm;
