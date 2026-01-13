"use client";
import React, { useState } from "react";

const ListYourCar = () => {
  const [totalStep, setTotalStep] = useState(6);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    carBrand: "",
    carModel: "",
    kmDriven: "",
    year: "",
    color: "",
    carImages: [null, null, null, null],
  });

  const handleChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
    setIsSubmitted(false);
  };

  const handleImageSelect = (index, file) => {
    setFormData((prev) => {
      const updatedImages = [...prev.carImages];
      updatedImages[index] = file;
      return { ...prev, carImages: updatedImages };
    });
  };

  const nextStep = () => {
    if (currentStep < 6) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);

    setFormData({
      carBrand: "",
      carModel: "",
      kmDriven: "",
      year: "",
      color: "",
      carImages: [null, null, null, null],
    });
    setCurrentStep(1);
    setIsSubmitted(true);

    // Will Redirect to the Thank You Page
  };

  const isCurrentStepValid = () => {
    if (currentStep === 6) {
      return formData.carImages.length > 0;
    }

    const stepKeys = ["carBrand", "carModel", "kmDriven", "year", "color"];

    return formData[stepKeys[currentStep - 1]].trim() !== "";
  };

  return (
    <section className="bg-black py-[6rem] xl:py-[13rem]">
      <div className="container">
        <div className="text-center">
          <img
            src="/images/list-cars/list-car-heading.png"
            alt="List Your Car"
            className="w-full block object-contain"
          />
          <div className="w-full text-white md:w-[80%] mx-auto lg:w-[70%] xl:max-w-[90rem] mt-[1rem]">
            <h2 className=" leading-[1.3] text-[2.6rem] [&>br]:hidden md:[&>br]:block xl:text-[4.5rem] xl:leading-[1.2]">
              Upload <b>Your Car Details</b>
            </h2>
            <p className="mt-[1rem] xl:text-[2.2rem] xl:mt-[2rem]">
              From the start, we’ve focused on people — understanding their
              needs, exceeding expectations, and creating meaningful, lasting
              relationships.
            </p>
          </div>
        </div>

        <div className="bg-[#191919] rounded-[2rem] xl:rounded-[4rem] py-[3rem] px-[2rem] mt-[4rem] block w-full relative lg:px-[5rem] lg:py-[5rem] xl:px-[12rem] xl:py-[8rem] xl:mt-[6rem]">
          <span className="count absolute top-[2rem] right-[2rem] inline-flex items-end leading-[1] lg:top-[3rem] lg:right-[4rem] xl:top-[5rem] xl:right-[6rem]">
            <span className="text-[#AEAEAE] text-[1.7rem] xl:text-[3.5rem]">
              0{currentStep}
            </span>
            <span className="text-[#363636] text-[1.4rem] xl:text-[2rem]">
              /0{totalStep}
            </span>
          </span>
          {currentStep === 1 && (
            <div className="flex flex-col items-center">
              <h6 className={inputTitle}>1.Select Your Car Brand.</h6>
              <div className="relative w-full">
                <select
                  className={`${inputStyle} pl-[1rem]`}
                  value={formData.carBrand}
                  onChange={(e) => handleChange("carBrand", e.target.value)}
                >
                  <option value="">Choose your brand from the list</option>
                  <option value="Audi">Audi</option>
                  <option value="BMW">BMW</option>
                  <option value="Mercedes">Mercedes</option>
                  <option value="Ferrari">Ferrari</option>
                  <option value="Lamborghini">Lamborghini</option>
                </select>
                <img
                  src="/images/dropdown-arrow-grey.webp"
                  alt="Arrow"
                  className="pointer-events-none absolute right-0 top-[0.7rem] w-[1.5rem] object-contain"
                />
              </div>
            </div>
          )}

          {/* Step 2 */}
          {currentStep === 2 && (
            <div className="flex flex-col items-center">
              <h6 className={inputTitle}>2.What Is Your Car Model Name?</h6>
              <div className="relative w-full">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Type your car model.."
                  className={inputStyle}
                  value={formData.carModel}
                  onChange={(e) => handleChange("carModel", e.target.value)}
                />
              </div>
            </div>
          )}
          {/* Step 3 */}
          {currentStep === 3 && (
            <div className="flex flex-col items-center">
              <h6 className={inputTitle}>
                3.How many kilometers has the car driven so far?
              </h6>
              <div className="relative w-full">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Type the accurate kilometres here.."
                  className={inputStyle}
                  value={formData.kmDriven}
                  onChange={(e) => handleChange("kmDriven", e.target.value)}
                />
              </div>
            </div>
          )}
          {/* Step 4 */}
          {currentStep === 4 && (
            <div className="flex flex-col items-center">
              <h6 className={inputTitle}>
                4. What is the manufacturing year of this car?
              </h6>
              <div className="relative w-full">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Type the Year here.."
                  className={inputStyle}
                  value={formData.year}
                  onChange={(e) => handleChange("year", e.target.value)}
                />
              </div>
            </div>
          )}

          {/* Step 5 */}
          {currentStep === 5 && (
            <div className="flex flex-col items-center">
              <h6 className={inputTitle}>5. What is the color of your car?</h6>
              <div className="relative w-full">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Type the car color here.."
                  className={inputStyle}
                  value={formData.color}
                  onChange={(e) => handleChange("color", e.target.value)}
                />
              </div>
            </div>
          )}

          {/* Step 6 */}
          {currentStep === 6 && (
            <div className="flex flex-col items-center">
              <h6 className={inputTitle}>6. Upload some images of your car.</h6>
              <div className="grid grid-cols-2 gap-4 w-full md:grid-cols-4 xl:gap-[3rem]">
                {formData.carImages.map((image, index) => (
                  <label
                    key={index}
                    className="w-full h-[10rem] border-dashed border-1 border-[#6A6A6A] rounded-lg flex items-center justify-center cursor-pointer overflow-hidden sm:h-[15rem] md:h-[11rem] lg:h-[13rem] xl:h-[15rem] xl:rounded-[1rem]"
                  >
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) =>
                        handleImageSelect(index, e.target.files[0])
                      }
                    />

                    {image ? (
                      <img
                        src={URL.createObjectURL(image)}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src="/images/list-cars/camera-icon.png"
                        alt="Upload Image"
                        className="w-[7rem] h-[5rem] object-contain xl:w-[9.6rem] xl:h-[7.4rem]"
                      />
                    )}
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex items-center justify-center gap-x-[2rem]">
            {currentStep > 1 && (
              <button className={btnStyle} onClick={prevStep}>
                <img
                  src="/images/btn-double-arrow.png"
                  alt="Arrow"
                  className="w-[1rem] object-contain inline-block mr-[3rem] rotate-[180deg] xl:mr-[4rem] xl:w-[1.5rem] group-hover:invert transition-all duration-500"
                />
                Previous
              </button>
            )}
            {currentStep < totalStep && (
              <button
                className={`${btnStyle} ${
                  isCurrentStepValid()
                    ? "opacity-100"
                    : "opacity-50 pointer-events-none"
                }`}
                onClick={nextStep}
                disabled={!isCurrentStepValid()}
              >
                Next
                <img
                  src="/images/btn-double-arrow.png"
                  alt="Arrow"
                  className="w-[1rem] object-contain inline-block ml-[3rem] xl:ml-[4rem] xl:w-[1.5rem] group-hover:invert transition-all duration-500"
                />
              </button>
            )}
            {currentStep === totalStep && (
              <button
                type="submit"
                disabled={!isCurrentStepValid()}
                onClick={handleSubmit}
                className={`${btnStyle} ${
                  isCurrentStepValid()
                    ? "opacity-100"
                    : "opacity-50 pointer-events-none"
                }`}
              >
                Submit
                <img
                  src="/images/btn-double-arrow.png"
                  alt="Arrow"
                  className="w-[1rem] object-contain inline-block ml-[3rem] xl:ml-[4rem] xl:w-[1.5rem] group-hover:invert transition-all duration-500"
                />
              </button>
            )}
          </div>

          {isSubmitted && (
            <p className="text-center text-white mt-[3rem] xl:text-[2.4rem]">
              Thank You for listing you car. We will get back to you soon.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ListYourCar;

const inputStyle =
  "w-full border-b border-b-[rgb(217,217,217)] outline-none pb-[2rem] text-[1.5rem] xl:text-[2.5rem] text-white [&>option]:text-black [&>option]:pl-[1rem] appearance-none";
const btnStyle =
  "flex items-center justify-between bg-white px-[2rem] h-[4.2rem] rounded-[5rem] font-medium mt-[3rem] xl:h-[6.8rem] xl:text-[2.2rem] xl:px-[4rem] xl:mt-[5rem] cursor-pointer group hover:bg-[#FE0000] transition-all duration-500 hover:text-white";
const inputTitle =
  "text-white font-medium mb-[3rem] text-[2rem] xl:text-[4.5rem] w-full pr-[2rem] mt-[1rem] xl:mt-[3rem] xl:mb-[5rem]";
