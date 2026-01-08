"use client";
import Link from "next/link";
import { useRef, useState } from "react";

const usps = [
  { title: "Outright Sale to End User" },
  { title: "Best Offer in 24 Minutes" },
  { title: "10k+ Satisfied Customers" },
  { title: "Hassle Free Processing" },
];

const ProcessSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };
  return (
    <section className="bg-[#0D0D0D] overflow-hidden">
      <div className="container">
        <div className="py-[6rem] border-t border-t-[#7C7C7C] xl:py-[13rem]">
          <div className="text-center section-header md:hidden">
            <h6 className="w-max mx-auto bg-[#202020] px-[3rem] pb-[0.5rem] pt-[0.8rem] text-[#AEAEAE] text-[1.3rem] uppercase rounded-[4rem] leading-[1.6] mb-[2rem] xl:text-[2rem]">
              The Process
            </h6>
            <h2 className="text-white leading-[1.3] text-[2.6rem] md:[&>br]:block xl:text-[4.5rem] xl:leading-[1.2]">
              Selling your luxury car for the best price? Let's get you better. <br /> <b>List your car @ Cars.co.in</b>
            </h2>
            <p className="mt-[1rem] text-[#818181] xl:text-[2.2rem] xl:mt-[2rem]">
              Sell your luxury car quickly and hassle-free in just four easy
              steps, with transparent process, fair pricing, and complete
              support throughout.
            </p>
          </div>

          <div className="block mx-auto max-w-[500px] md:max-w-none md:flex md:justify-between">
            <div
              className="relative video-box mt-[4rem] w-full md:w-[45%] md:mt-0 xl:w-[42%]"
              onClick={() => {
                if (isPlaying) {
                  handlePause();
                }
              }}
            >
              <video
                src="/videos/hp-process-video.mp4"
                poster="/images/homepage/hp-process-thumb.webp"
                className="w-full h-[48rem] block object-cover xl:h-[87rem] rounded-[1.8rem] xl:rounded-[2.8rem]"
                ref={videoRef}
                playsInline
                preload="auto"
                loop
              ></video>
              {/* Play Icon */}
              <span
                className={`play-icon absolute-center w-[14rem] h-[14rem] transition-opacity duration-500 ${
                  isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
                onClick={(e) => {
                  e.stopPropagation(); // prevent parent onClick
                  handlePlay();
                }}
              >
                <img
                  src="/images/process-play-icon.webp"
                  alt="Play"
                  className="object-contain w-full"
                />
              </span>
            </div>

            <div className="w-full md:w-[50%] xl:w-[52%]">
              <div className="text-center section-header hidden md:block md:text-left">
                <h6 className="w-max mx-auto bg-[#202020] px-[3rem] py-[1.4rem] text-[#AEAEAE] text-[1.3rem] uppercase rounded-[4rem] leading-1 mb-[2rem] xl:text-[2rem] xl:leading-[1] xl:mb-[3rem] xl:ml-0">
                  The Process
                </h6>
                <h2 className="text-white leading-[1.3] text-[2.6rem] [&>br]:hidden md:[&>br]:block xl:text-[4.5rem] xl:leading-[1.2]">
                  Selling your luxury car for the best price? Let's get you better. <br /> <b>List your car @ Cars.co.in</b>
                </h2>
                <p className="mt-[1rem] text-[#818181] xl:text-[2.2rem] xl:mt-[2rem]">
                  Sell your luxury car quickly and hassle-free in just four easy
                  steps, with transparent process, fair pricing, and complete
                  support throughout.
                </p>
              </div>
              <ul className="mt-[5rem] [&>li]:py-[2rem] [&>li]:border-t [&>li]:border-t-[#3A3A3A] [&>li:last-child]:border-b [&>li:last-child]:border-b-[#3A3A3A] xl:[&>li]:py-[3.7rem] xl:mt-[7rem]">
                {usps.map((usp, index) => (
                  <li
                    key={index}
                    className="flex text-white text-[2rem] font-medium xl:text-[3rem]"
                  >
                    <span className="inline-block text-[#5B5B5B] mr-[1rem] xl:mr-[2rem]">
                      0{index + 1} /
                    </span>
                    {usp.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap flex-col items-center justify-center bg-[#FE0000] px-[3rem] py-[4rem] rounded-[1.5rem] mt-[5rem] md:flex-row md:justify-between md:py-[2.5rem] xl:mt-[7rem]">
            <div className="w-full md:flex md:items-center md:flex-[1] md:pr-[3rem]">
              <img
                src="/images/homepage/hp-process-cars.webp"
                alt="Car Image"
                className="object-contain block md:w-[25%] xl:w-[30rem]"
              />
              <p className="text-center text-white mt-[1rem] text-[1.8rem] md:flex-[1] md:pl-[2rem] md:text-left md:mt-0 xl:text-[3.7rem] xl:text-[300]">
                We have sold 3024+ cars already
              </p>
            </div>
            <div className="w-max mt-[2rem] md:mt-0">
              <Link
                href="#"
                className="bg-black inline-block text-white leading-[1] text-[1.8rem] px-[3rem] py-[1.4rem] rounded-[3rem] xl:text-[2.2rem] xl:px-[7rem] xl:py-[2.4rem] xl:rounded-[8rem] transition-all duration-500 hover:bg-white hover:text-black"
              >
                Sell Yours?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
