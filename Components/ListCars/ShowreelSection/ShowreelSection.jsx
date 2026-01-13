"use client";
import { useRef, useState } from "react";

const ShowreelSection = () => {
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
    <section className="bg-black">
      <div className="max-w-[1920px] mx-auto relative">
        <img src="/images/list-cars/showreel-left-hand.webp" alt="Hand Image" className="hidden lg:inline-block absolute left-0 w-[20rem] top-[30rem] z-10 xl:w-[40rem] xl:top-[45rem] 3xl:w-[45rem]" />
        <img src="/images/list-cars/showreel-right-hand.webp" alt="Hand Image" className="hidden lg:inline-block absolute right-0 w-[18rem] bottom-[13rem] z-10 xl:w-[40rem] xl:bottom-[17rem] 3xl:w-[46rem] 3xl:bottom-[15rem]" />
        <div className="container">
          <div className="py-[6rem] xl:py-[13rem] border-t border-t-[#7C7C7C] text-center">
            <div className="w-full lg:w-[60%] lg:mx-auto">
              <h6 className="w-max mx-auto bg-[#202020] px-[3rem] py-[1.4rem] text-[#AEAEAE] text-[1.3rem] uppercase rounded-[4rem] leading-1 mb-[2rem] xl:text-[2rem] xl:leading-[1] xl:mb-[3rem]">
                Watch Now
              </h6>
              <h2 className="text-white leading-[1.3] text-[2.6rem] [&>br]:hidden md:[&>br]:block xl:text-[4.5rem] xl:leading-[1.2]">
                Watch The <b>Listing Car Experience</b>
              </h2>
              <p className="mt-[1rem] text-[#818181] xl:text-[2.2rem] xl:mt-[2rem]">
                From the start, we’ve focused on people — understanding their
                needs, exceeding expectations, and creating meaningful, lasting
                relationships.
              </p>
            </div>

            <div
              className="relative video-box mt-[4rem] w-full lg:w-[80%] lg:mx-auto xl:mt-[7rem]"
              onClick={() => {
                if (isPlaying) {
                  handlePause();
                }
              }}
            >
              <video
                src="/videos/showroom-video.mp4"
                poster="/images/list-cars/showreel-video-thumb.webp"
                className="w-full h-[55rem] sm:h-auto block object-cover rounded-[1rem] xl:h-[73rem] xl:rounded-[2rem]"
                ref={videoRef}
                playsInline
                preload="auto"
                loop
              ></video>
              {/* Play Icon */}
              <span
                className={`play-icon absolute-center w-[13rem] h-[14rem] transition-opacity duration-500 cursor-pointer ${
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowreelSection;
