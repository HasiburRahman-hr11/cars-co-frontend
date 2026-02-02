"use client";
import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";

import { videoTestimonials, googleReviews, writtenReviews } from "./reviews";

const TestimonialSection = () => {
  const videoRefs = useRef([]);
  const progressRefs = useRef([]);
  const [activeHash, setActiveHash] = useState("");

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

  const handleHashClick = (e, hash) => {
    e.preventDefault();

    const target = document.querySelector(hash);
    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActiveHash(hash);

    // Optional: update URL hash without jump
    window.history.pushState(null, "", hash);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bg-[#F3F3F3] py-[6rem] xl:py-[13rem]">
      <div className="container">
        <div className="flex flex-wrap justify-between max-w-[540px] mx-auto md:max-w-[768px] lg:max-w-full">
          <div
            className="relative w-full md:w-[35%] lg:w-[25%] xl:w-[28%]"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <ul className=" bg-black py-[2rem] px-[3rem] rounded-[1.5rem] md:sticky top-[3rem] xl:px-[4rem]">
              <li className="border-b border-b-[#404040]">
                <a
                  href="#videoTestimonials"
                  className={`flex items-center font-medium text-[1.7rem] py-[1.5rem] xl:text-[2.8rem] xl:py-[2.5rem] ${
                    activeHash === "#videoTestimonials"
                      ? "text-[#FE0000]"
                      : "text-white"
                  }`}
                  onClick={(e) => handleHashClick(e, "#videoTestimonials")}
                >
                  <img
                    src="/images/right-arrow-white.webp"
                    alt="Arrow"
                    className="object-contain w-[1rem] inline-block mr-[10px] xl:w-[1.2rem] xl:mr-[12px]"
                  />
                  Video Testimonials
                </a>
              </li>
              <li className="border-b border-b-[#404040]">
                <a
                  href="#googleTestimonials"
                  className={`flex items-center font-medium text-[1.7rem] py-[1.5rem] xl:text-[2.8rem] xl:py-[2.5rem] ${
                    activeHash === "#googleTestimonials"
                      ? "text-[#FE0000]"
                      : "text-white"
                  }`}
                  onClick={(e) => handleHashClick(e, "#googleTestimonials")}
                >
                  <img
                    src="/images/right-arrow-white.webp"
                    alt="Arrow"
                    className="object-contain w-[1rem] inline-block mr-[10px] xl:w-[1.2rem] xl:mr-[12px]"
                  />
                  Google Reviews
                </a>
              </li>
              <li>
                <a
                  href="#writtenTestimonials"
                  className={`flex items-center font-medium text-[1.7rem] py-[1.5rem] xl:text-[2.8rem] xl:py-[2.5rem] ${
                    activeHash === "#writtenTestimonials"
                      ? "text-[#FE0000]"
                      : "text-white"
                  }`}
                  onClick={(e) => handleHashClick(e, "#writtenTestimonials")}
                >
                  <img
                    src="/images/right-arrow-white.webp"
                    alt="Arrow"
                    className="object-contain w-[1rem] inline-block mr-[10px] xl:w-[1.2rem] xl:mr-[12px]"
                  />
                  Written Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full mt-[5rem] md:w-[55%] md:mt-0 lg:w-[68%] xl:w-[65%]">
            {/* Video Testimonials */}
            <div id="videoTestimonials">
              <h2
                className="text-center leading-[1.3] text-[2.6rem] [&>br]:hidden md:[&>br]:block xl:text-[4.5rem] xl:leading-[1.2] mb-[3rem] xl:text-left xl:mb-[5rem]"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                Video <b>Testimonials</b>
              </h2>
              <div className="hp-testimonial-slider flex flex-wrap gap-[2rem] lg:grid lg:grid-cols-2 xl:gap-[3.5rem]">
                {videoTestimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="relative h-full w-full overflow-hidden rounded-[1.5rem] max-h-[75rem] slide-wrapper xl:rounded-[2rem]"
                    onClick={() => {
                      const video = videoRefs.current[index];
                      if (video && !video.paused) handlePause(index);
                    }}
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="500"
                  >
                    <div className="video-box h-full w-full">
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
                ))}
              </div>
            </div>

            {/* Google Reviews */}
            <div
              id="googleTestimonials"
              className="mt-[6rem] pt-[5rem] border-t border-t-[#818181] xl:mt-[10rem] xl:pt-[9rem]"
            >
              <h2
                className="text-center leading-[1.3] text-[2.6rem] [&>br]:hidden md:[&>br]:block xl:text-[4.5rem] xl:leading-[1.2] mb-[3rem] xl:text-left xl:mb-[5rem]"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                Google <b>Reviews</b>
              </h2>
              <div className="flex flex-wrap gap-[2rem] lg:grid lg:grid-cols-2 xl:gap-[3.5rem]">
                {googleReviews.map((review, index) => (
                  <div
                    key={index}
                    className="w-full bg-white px-[2rem] py-[3rem] rounded-[1rem] xl:px-[3.5rem] xl:py-[5rem] xl:rounded-[2rem]"
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="500"
                  >
                    <div className="flex items-center">
                      <span
                        className={`avatar w-[7rem] h-[7rem] xl:w-[9.6rem] xl:h-[9.6rem] rounded-[50%] flex items-center justify-center text-white text-[3rem] xl:text-[5rem] bg-[#F4511E]`}
                        style={{ backgroundColor: review.avatarColor }}
                      >
                        {review.name.charAt(0).toUpperCase()}
                      </span>
                      <div className="flex-1 pl-[2rem]">
                        <h6 className="text-[#393939] text-[1.8rem] font-[600] xl:text-[2.5rem]">
                          {review.name}
                        </h6>
                        <span className="text-[#898989] text-[1.5rem] xl:text-[2rem]">
                          {review.date}
                        </span>
                      </div>
                    </div>
                    <div className="mt-[2rem] flex items-center gap-[5px] xl:mt-[3rem]">
                      {Array.from({ length: review.stars }).map((_, index) => (
                        <img
                          key={index}
                          src="/images/star-full.webp"
                          alt="star"
                          className="w-[2rem] xl:w-[3rem] object-contain"
                        />
                      ))}
                    </div>
                    <div className="text-[#2B2B2B] text-[1.7rem] mt-[2rem] font-light xl:text-[2.2rem] xl:mt-[3rem]">
                      {review.review}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Written Reviews */}
            <div
              id="writtenTestimonials"
              className="mt-[6rem] pt-[5rem] border-t border-t-[#818181] xl:mt-[10rem] xl:pt-[9rem]"
            >
              <h2
                className="text-center leading-[1.3] text-[2.6rem] [&>br]:hidden md:[&>br]:block xl:text-[4.5rem] xl:leading-[1.2] mb-[3rem] xl:text-left xl:mb-[5rem]"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                Written <b>Reviews</b>
              </h2>
              <div className="flex flex-wrap gap-[2rem] xl:gap-[4rem]">
                {writtenReviews.map((review, index) => (
                  <div
                    key={index}
                    className="bg-white p-[3rem] flex flex-wrap justify-between lg:items-center w-full rounded-[1rem] xl:rounded-[2rem] xl:p-[5rem]"
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="500"
                  >
                    <div className="w-full flex items-center lg:flex-col lg:w-[30%] lg:pr-[4rem] lg:text-center">
                      <span className="relative inline-block">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="object-cover rounded-[50%] w-[8rem] h-[8rem] xl:w-[18rem] xl:h-[18rem]"
                        />
                        <img
                          src="/images/quote-icon-red-outline.webp"
                          alt=""
                          className="object-contain w-[2.5rem] absolute left-0 top-0 lg:left-[unset] lg:right-0 xl:w-[7.2rem] xl:top-[-2rem]"
                        />
                      </span>
                      <div className="flex-1 pl-[2rem] lg:pl-0 lg:mt-[1.5rem]">
                        <h6 className="text-[#393939] text-[1.8rem] font-[600] xl:text-[2.5rem] xl:tracking-tighter">
                          {review.name}
                        </h6>
                        <span className="text-[#898989] text-[1.5rem] xl:text-[2rem]">
                          {review.designation}
                        </span>
                      </div>
                    </div>
                    <div className="text-[#2B2B2B] text-[1.7rem] mt-[2rem] font-light xl:text-[2.2rem] lg:w-[70%] lg:pl-[4rem] lg:border-l lg:border-l-[#D9D9D9] xl:leading-[1.7] xl:py-[4rem] xl:pl-[6rem]">
                      {review.review}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
