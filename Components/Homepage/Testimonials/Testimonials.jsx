"use client";
import { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    video: "/videos/rolls-video.mp4",
    thumbnail: "/images/homepage/hp-testimonial-img-1.webp",
    name: "John Abraham",
    designation: "Actor",
  },
  {
    video: "/videos/rolls-video.mp4",
    thumbnail: "/images/homepage/hp-testimonial-img-2.webp",
    name: "Aman Gupta",
    designation: "CEO of Boat",
  },
  {
    video: "/videos/rolls-video.mp4",
    thumbnail: "/images/homepage/hp-testimonial-img-3.webp",
    name: "Deepinder Goyal",
    designation: "CEO of Zomato",
  },
  {
    video: "/videos/rolls-video.mp4",
    thumbnail: "/images/homepage/hp-testimonial-img-1.webp",
    name: "John Abraham",
    designation: "Actor",
  },
];

function NextArrow(props) {
  const { onClick, className } = props;
  return (
    <div
      className={`bg-[#303030] w-[7.5rem] h-[7.5rem] rounded-[50%] inline-flex justify-center items-center ${className}`}
      onClick={onClick}
    >
      <Image
        src="/images/slider-arrow-next-white.webp"
        alt="Next Slide"
        width="12"
        height="22"
      />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick, className } = props;
  return (
    <div
      className={`bg-[#303030] w-[7.5rem] h-[7.5rem] rounded-[50%] inline-flex justify-center items-center ${className}`}
      onClick={onClick}
    >
      <Image
        src="/images/slider-arrow-prev-white.webp"
        alt="Previous Slide"
        width="12"
        height="22"
      />
    </div>
  );
}

const Testimonials = () => {
  const sliderRef = useRef(null);
  const videoRefs = useRef([]);
  const progressRefs = useRef([]);
  const [matches, setMatches] = useState(false);

  let sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: false,
    autoplaySpeed: 3000,
    variableWidth: true,
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  let sliderSettingsDesk = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  const resetVideo = (index, resetTime = false) => {
    const video = videoRefs.current[index];
    const progress = progressRefs.current[index];
    if (video) {
      video.pause();
      if (resetTime) video.currentTime = 0; // only reset if video ended
      if (progress && resetTime) progress.style.width = "0%";
      video.closest(".slide-wrapper")?.classList.remove("video-playing");
    }
  };

  const handlePlayClick = (index) => {
    // pause other videos (but do NOT reset posters or time)
    videoRefs.current.forEach((v, i) => {
      if (i !== index) {
        resetVideo(i, false); // only pause, don’t reset time or poster
      }
    });

    const video = videoRefs.current[index];
    if (video) {
      sliderRef.current.slickPause();

      video
        .play()
        .then(() => {
          video.closest(".slide-wrapper")?.classList.add("video-playing");
        })
        .catch((err) => {
          console.error("Video play failed:", err);
        });
    }
  };

  const handlePause = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      // just pause, don’t reset time or progress
      video.pause();
      video.closest(".slide-wrapper")?.classList.remove("video-playing");
    }
    // sliderRef.current.slickPlay();
  };

  const handleEnded = (index) => {
    // when video finishes, reset everything
    resetVideo(index, true);
    // sliderRef.current.slickPlay();
  };

  const handleTimeUpdate = (index) => {
    const video = videoRefs.current[index];
    const progress = progressRefs.current[index];
    if (video && progress && video.duration > 0) {
      const percent = (video.currentTime / video.duration) * 100;
      progress.style.width = `${percent}%`;
    }
  };

  function useMediaQuery(query) {
    useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => setMatches(media.matches);
      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    }, [matches, query]);

    return matches;
  }

  const isMobile = useMediaQuery("(max-width: 1023px)");

  return (
    <section className="bg-[#0D0D0D] py-[6rem] overflow-hidden xl:py-[13rem]">
      <div className="container">
        <div className="text-center section-header">
          <h6 className="w-max mx-auto bg-[#202020] px-[3rem] py-[1.4rem] text-[#AEAEAE] text-[1.3rem] uppercase rounded-[4rem] leading-1 mb-[2rem] xl:text-[2rem] xl:leading-[1] xl:mb-[3rem]">
            Testimonials
          </h6>
          <h2 className="text-white leading-[1.3] text-[2.6rem] [&>br]:hidden md:[&>br]:block xl:text-[4.5rem] xl:leading-[1.2]">
            Hear from customers about their luxurious, <br /> smooth,{" "}
            <b>and hassle-free rides.</b>
          </h2>
        </div>
      </div>
      {isMobile ? (
        <div className=" relative mx-auto mt-[4rem] hp-testimonial-slider pl-[2rem] lg:pl-[30px] xl:w-[90%] xl:px-[20px] xl:mt-[7rem]">
          <Slider ref={sliderRef} {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="h-full">
                <div
                  className="relative h-full w-full overflow-hidden rounded-[1.5rem] max-h-[75rem] slide-wrapper xl:rounded-[2rem]"
                  onClick={() => {
                    const video = videoRefs.current[index];
                    if (video && !video.paused) handlePause(index);
                  }}
                >
                  <div className="video-box h-full w-[85vw] md:w-[43vw] lg:w-[32vw] xl:w-[27vw]">
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      src={testimonial.video}
                      poster={testimonial.thumbnail}
                      className="w-full h-full object-cover block"
                      preload="metadata"
                      playsInline
                      controls={false}
                      loop={false}
                      onPause={() => handlePause(index)}
                      onEnded={() => handleEnded(index)}
                      onTimeUpdate={() => handleTimeUpdate(index)}
                    ></video>
                  </div>

                  <div className="content absolute left-0 top-0 w-full h-full flex flex-col justify-end px-[1.5rem] py-[3rem] xl:px-[3rem] xl:py-[4rem]">
                    <div className="flex justify-between items-end">
                      <div className="flex-[1] pr-[2rem]">
                        <h6 className="text-[2rem] text-white font-medium xl:text-[2.5rem]">
                          {testimonial.name}
                        </h6>
                        <span className="text-[1.2rem] text-[#C8C8C8] xl:text-[1.6rem]">
                          {testimonial.designation}
                        </span>
                      </div>
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePlayClick(index);
                        }}
                        className="cursor-pointer w-[3.5rem] h-[3.5rem] rounded-[50%] overflow-hidden inline-flex play-icon bg-black/60 transition-all duration-300 xl:w-[5rem] xl:h-[5rem]"
                      >
                        <img
                          src="/images/play-icon-red.webp"
                          alt=""
                          className="w-full h-full object-contain"
                        />
                      </span>
                    </div>

                    <div className="progress-bar w-full h-[0.3rem] rounded-[1rem] overflow-hidden bg-[#5D5D5D] mt-[1.5rem] relative xl:mt-[2.5rem] xl:h-[0.47rem]">
                      <div
                        ref={(el) => (progressRefs.current[index] = el)}
                        className="fill w-0 bg-white h-full absolute left-0 top-0 transition-[width] duration-200"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <div className="relative mx-auto mt-[4rem] hp-testimonial-slider pl-[2rem] lg:pl-[30px] xl:w-[90%] xl:px-[25px] xl:mt-[7rem]">
          <Slider ref={sliderRef} {...sliderSettingsDesk}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="h-full">
                <div
                  className="relative h-full w-full overflow-hidden rounded-[1.5rem] max-h-[75rem] slide-wrapper xl:rounded-[2rem]"
                  onClick={() => {
                    const video = videoRefs.current[index];
                    if (video && !video.paused) handlePause(index);
                  }}
                >
                  <div className="video-box h-full w-[85vw] md:w-[43vw] lg:w-full lg:h-[75rem]">
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      src={testimonial.video}
                      poster={testimonial.thumbnail}
                      className="w-full h-full object-cover block"
                      preload="metadata"
                      playsInline
                      controls={false}
                      loop={false}
                      onPause={() => handlePause(index)}
                      onEnded={() => handleEnded(index)}
                      onTimeUpdate={() => handleTimeUpdate(index)}
                    ></video>
                  </div>

                  <div className="content absolute left-0 top-0 w-full h-full flex flex-col justify-end px-[1.5rem] py-[3rem] xl:px-[3rem] xl:py-[4rem]">
                    <div className="flex justify-between items-end">
                      <div className="flex-[1] pr-[2rem]">
                        <h6 className="text-[2rem] text-white font-medium xl:text-[2.5rem]">
                          {testimonial.name}
                        </h6>
                        <span className="text-[1.2rem] text-[#C8C8C8] xl:text-[1.6rem]">
                          {testimonial.designation}
                        </span>
                      </div>
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePlayClick(index);
                        }}
                        className="cursor-pointer w-[3.5rem] h-[3.5rem] rounded-[50%] overflow-hidden inline-flex play-icon bg-black/60 transition-all duration-300 xl:w-[5rem] xl:h-[5rem]"
                      >
                        <img
                          src="/images/play-icon-red.webp"
                          alt=""
                          className="w-full h-full object-contain"
                        />
                      </span>
                    </div>

                    <div className="progress-bar w-full h-[0.3rem] rounded-[1rem] overflow-hidden bg-[#5D5D5D] mt-[1.5rem] relative xl:mt-[2.5rem] xl:h-[0.47rem]">
                      <div
                        ref={(el) => (progressRefs.current[index] = el)}
                        className="fill w-0 bg-white h-full absolute left-0 top-0 transition-[width] duration-200"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}

      {/* Video SLider Mobile */}

      {/* Video Slider Desktop */}

      <div className="mt-[5rem] lg:hidden w-[85%] mx-auto max-w-[40rem]">
        <Link
          href="#"
          className="bg-white flex justify-center items-center px-[5rem] py-[1.5rem] rounded-[5rem]"
        >
          <span className="text-[1.8rem] font-medium text-black inline-block mr-[3rem]">
            Read More Reviews
          </span>
          <img
            src="/images/btn-arrow-black.webp"
            alt=""
            className="object-contain w-[1.3rem]"
          />
        </Link>
      </div>
    </section>
  );
};

export default Testimonials;
