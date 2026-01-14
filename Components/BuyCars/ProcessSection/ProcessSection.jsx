import React from "react";

const processList = [
  {
    thumbnail: "/images/buy-cars/process-thumb-1.webp",
    title: "Browse & Compare",
    description:
      "Explore verified listings with detailed specs, inspection reports, and real photos to find the perfect match.",
  },
  {
    thumbnail: "/images/buy-cars/process-thumb-2.webp",
    title: "Schedule a Test Drive",
    description:
      "Choose your date and location—we’ll prepare the car and ensure a seamless experience.",
  },
  {
    thumbnail: "/images/buy-cars/process-thumb-3.webp",
    title: "Get Expert Guidance",
    description:
      "Our team helps with pricing, negotiation, paperwork, and financing so you make an informed decision.",
  },
  {
    thumbnail: "/images/buy-cars/process-thumb-4.webp",
    title: "Buy & Drive Home",
    description:
      "Complete secure payment, finalize documents, and enjoy your new car with full confidence.",
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-white py-[6rem] xl:py-[13rem]">
      <div className="container">
        <div className="text-center md:w-[60%] md:mx-auto mb-[4rem] md:mb-[5rem] lg:w-[48%] lg:text-left lg:ml-0">
          <h6 className="w-max mx-auto bg-white border border-[#333333] px-[3rem] pb-[0.5rem] pt-[0.8rem] text-[#333333] text-[1.3rem] uppercase rounded-[4rem] leading-[1.6] mb-[2rem] xl:text-[2rem] xl:mb-[3rem] font-medium lg:ml-0">
            How It Works
          </h6>
          <h2 className="text-[#222222] leading-[1.3] text-[2.6rem] [&>br]:hidden md:[&>br]:block xl:text-[4.5rem] xl:leading-[1.2]">
            Making Every Step <b>Simple, Smart & Hassle-Free.</b>
          </h2>
          <p className="mt-[1rem] text-[#333333] xl:text-[2.2rem] xl:mt-[2rem]">
            From browsing to delivery, we guide you through every step making
            the entire car-buying process simple, transparent, and worry-free.
          </p>
        </div>

        <div className="flex flex-wrap justify-between max-w-[600px] mx-auto md:max-w-full md:gap-y-[5rem]">
          {processList.map((process, index) => (
            <div key={index} className="mt-[4rem] pt-[4rem] border-t border-t-[#dddddd] first:mt-0 first:pt-0 first:border-t-0 w-full md:w-[48%] md:mt-0 md:pt-0 md:border-t-o lg:even:-translate-y-[20rem]">
              <img
                src={process.thumbnail}
                alt="Process Image"
                className="object-cover block aspect-square rounded-[1rem] xl:rounded-[1.5rem]"
              />
              <div className="flex items-center gap-x-[2rem] mt-[2rem]">
                <span className="w-max inline-block list-car-process-count font-[700] text-[8rem] xl:text-[17rem] leading-[1] text-transparent">
                  0{index + 1}
                </span>
                <div className="flex-[1]">
                  <h6 className="font-medium text-[1.8rem] xl:text-[3rem]">
                    {process.title}
                  </h6>
                  <p className="text-[1.6rem] xl:text-[2.2rem] mt-[1rem] font-light">{process.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
