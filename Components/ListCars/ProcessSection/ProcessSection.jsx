"use client";
import { useRef, useState } from "react";

const processList = [
  {
    thumbnail: "/images/list-cars/process-img-1.webp",
    video: "/videos/hp-process-video.mp4",
    icon: "/images/list-cars/process-icon-1.webp",
    title: "Outright Sale to End User",
    description:
      "Direct listing to genuine end users, ensuring transparency, better value, and a smooth ownership transfer.",
  },
  {
    thumbnail: "/images/list-cars/process-img-2.webp",
    icon: "/images/list-cars/process-icon-3.webp",
    title: "Best Offer in 24 Minutes",
    description:
      "Receive competitive market-aligned offers quickly through our efficient listing and buyer-matching process.",
  },
  {
    thumbnail: "/images/list-cars/process-img-3.webp",
    icon: "/images/list-cars/process-icon-3.webp",
    title: "10k+ Satisfied Customers",
    description:
      "Trusted by thousands for reliable service, transparent processes, and consistent customer satisfaction.",
  },
  {
    thumbnail: "/images/list-cars/process-img-4.webp",
    icon: "/images/list-cars/process-icon-4.webp",
    title: "Hassle Free Processing",
    description:
      "From inspection to paperwork, we manage every step for a smooth, stress-free car listing experience.",
  },
];

const ProcessSection = () => {
  const videoRefs = useRef([]);
  const progressRefs = useRef([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const resetVideo = (index, resetTime = false) => {
    const video = videoRefs.current[index];
    const progress = progressRefs.current[index];
    if (video) {
      video.pause();
      if (resetTime) video.currentTime = 0;
      if (progress && resetTime) progress.style.width = "0%";
      setIsPlaying(false);
    }
  };

  const handlePlayClick = (index) => {
    videoRefs.current.forEach((v, i) => {
      if (i !== index) {
        resetVideo(i, false);
      }
    });

    const video = videoRefs.current[index];
    if (video) {
      video
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.error("Video play failed:", err);
        });
    }
  };

  const handlePause = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleEnded = (index) => {
    resetVideo(index, true);
  };

  return (
    <section className="bg-white py-[6rem] lg:pb-[0] xl:pt-[13rem]">
      <div className="container">
        <div className="text-center">
          <h6 className="w-max mx-auto bg-white border border-[#333333] px-[3rem] pb-[0.5rem] pt-[0.8rem] text-[#333333] text-[1.3rem] uppercase rounded-[4rem] leading-[1.6] mb-[2rem] xl:text-[2rem] xl:mb-[3rem] font-medium lg:ml-0">
            The Process
          </h6>
          <h2 className="text-[#222222] leading-[1.3] text-[2.6rem] [&>br]:hidden md:[&>br]:block xl:text-[4.5rem] xl:leading-[1.2]">
            Making Every Step <b>Simple, Clear, and Easy</b>
          </h2>
          <p className="mt-[1rem] text-[#333333] xl:text-[2.2rem] xl:mt-[2rem]">
            From the start, we’ve focused on people — understanding their needs,
            exceeding expectations, and creating meaningful, lasting
            relationships.
          </p>
        </div>
      </div>
      <div className="relative max-w-[1920] mx-auto mt-[4rem]">
        <div className="container flex flex-col gap-y-[6rem] ">
          {processList.map((process, index) => (
            <div key={index} className="w-full flex flex-wrap px-[2rem]">
              <div
                className={`thumb-box w-full relative ${
                  index % 2 !== 0 ? "" : "aspect-square"
                }`}
              >
                {process.video ? (
                  <div
                    className="video-box h-full w-full relative z-20"
                    onClick={() => {
                      const video = videoRefs.current[index];
                      if (video && !video.paused) handlePause(index);
                    }}
                  >
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      src={process.video}
                      poster={process.thumbnail}
                      className="w-full h-full object-cover block rounded-[1.6rem]"
                      preload="metadata"
                      playsInline
                      controls={false}
                      loop={false}
                      onPause={() => handlePause(index)}
                      onEnded={() => handleEnded(index)}
                    ></video>
                    <span
                      className={`play-icon absolute-center w-[5rem] h-[5rem] xl:w-[7.2rem] xl:h-[7.2rem] transition-opacity duration-500 ${
                        isPlaying
                          ? "opacity-0 pointer-events-none"
                          : "opacity-100"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePlayClick(index);
                      }}
                    >
                      <img
                        src="/images/play-icon-red.webp"
                        alt="Play"
                        className="object-contain w-full"
                      />
                    </span>
                  </div>
                ) : (
                  <div className="relative z-20">
                    <img
                      src={process.thumbnail}
                      alt="Thumbnail"
                      className="w-full h-full block object-cover rounded-[1.6rem]"
                    />
                  </div>
                )}

                <span
                  className={`list-car-process-count font-[700] text-[9rem] xl:text-[22rem] leading-[1] text-transparent absolute ${
                    index % 2 !== 0
                      ? "right-[-2rem] top-[-5rem]"
                      : "left-[-2rem] bottom-[-5rem]"
                  }`}
                >
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>
              </div>
              <div className="text-box w-full mt-[3rem] text-center">
                <span className="w-[8rem] h-[8rem] mx-auto xl:w-[13rem] xl:h-[13rem] rounded-[50%] bg-white shadow-lg flex flex-col justify-center items-center p-[1.7rem]">
                  <img
                    src={process.icon}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </span>
                <h6 className="text-[2.5rem] xl:text-[3.5rem] font-medium mt-[2rem]">
                  {process.title}
                </h6>
                <p className="mt-[1rem] text-[#333333] xl:text-[2.2rem] xl:mt-[2rem]">
                  {process.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
