"use client";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";

const reviews = [
  {
    reviewType: "text",
    reviewText:
      "The process was incredibly smooth and simple. I received a fair price instantly and the team made everything effortless.",
    name: "Prince Narula",
    designation: "Actor",
    avatar: "/images/testimonials/written-review-avatar-1.webp",
  },
  {
    reviewType: "video",
    videoUrl: "/videos/rolls-video.mp4",
    thumbnail: "/images/homepage/hp-testimonial-img-3.webp",
    name: "Deepinder Goyal",
    designation: "CEO of Zomato",
  },
  {
    reviewType: "text",
    reviewText:
      "I loved how transparent and quick the entire process was. From sharing details to payment, everything was seamless!",
    name: "Yuvika Chaudhary",
    designation: "Actor",
    avatar: "/images/testimonials/written-review-avatar-3.webp",
  },
  {
    reviewType: "video",
    videoUrl: "/videos/rolls-video.mp4",
    thumbnail: "/images/homepage/hp-testimonial-img-1.webp",
    name: "John Abraham",
    designation: "Actor",
  },
  {
    reviewType: "text",
    reviewText:
      "Highly recommend! The team was professional, friendly, and made sure I understood every step. Truly stress-free experience.",
    name: "Neha Dhupia",
    designation: "Actor",
    avatar: "/images/testimonials/written-review-avatar-4.webp",
  },
  {
    reviewType: "video",
    videoUrl: "/videos/rolls-video.mp4",
    thumbnail: "/images/homepage/hp-testimonial-img-2.webp",
    name: "Aman Gupta",
    designation: "CEO of Boat",
  },
];

const ReviewsSection = () => {
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

      video.closest(".video-box")?.classList.remove("video-playing");
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
          video.closest(".video-box")?.classList.add("video-playing");
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
      video.closest(".video-box")?.classList.remove("video-playing");
    }
  };

  const handleEnded = (index) => {
    resetVideo(index, true);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bg-black ">
      <div className="container">
        <div className="py-[6rem] xl:py-[13rem] border-t border-t-[#7C7C7C] ">
          <div className="flex flex-wrap lg:justify-between lg:items-end">
            <div
              className="text-center w-full lg:w-[40%] lg:text-left"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <h6 className="w-max mx-auto bg-[#202020] px-[3rem] py-[1.4rem] text-[#AEAEAE] text-[1.3rem] uppercase rounded-[4rem] leading-1 mb-[2rem] xl:text-[2rem] xl:leading-[1] xl:mb-[3rem] lg:ml-0">
                Reviews
              </h6>
              <h2 className="text-white leading-[1.3] text-[2.6rem] [&>br]:hidden md:[&>br]:block xl:text-[4.5rem] xl:leading-[1.2]">
                Don’t Trust Us? <b>Enough</b>
              </h2>
            </div>
            <div
              className="w-[70%] mx-auto mt-[2rem] text-center max-w-[477px] lg:mt-0 lg:mr-0"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <img
                src="/images/list-cars/review-rating-img.webp"
                alt="Google Review"
                className="object-contain"
              />
            </div>
          </div>

          <div className="mt-[4rem] grid grid-cols-1 gap-[3rem] max-w-[510px] mx-auto lg:max-w-full lg:grid-cols-3 align-middle items-center xl:gap-[4rem] xl:mt-[8rem]">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="w-full"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                {review.reviewType === "text" && (
                  <div className="px-[2rem] py-[3rem] border border-[#4E4E4E] rounded-[2rem] xl:py-[5rem] xl:px-[4rem]">
                    <img
                      src="/images/quote-icon-red.webp"
                      alt=""
                      className="object-contain w-[4rem] xl:w-[6.6rem]"
                    />
                    <p className="mt-[3rem] text-white font-medium text-[1.8rem] xl:text-[2.4rem] xl:mt-[5rem] xl:leading-[1.7]">
                      "{review.reviewText}"
                    </p>
                    <div className="flex items-center mt-[3rem] pt-[2rem] border-t border-t-[#4E4E4E] lg:pt-[3rem] xl:mt-[6rem] xl:pt-[5rem]">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="object-cover w-[4rem] h-[4rem] lg:w-[7rem] lg:h-[7rem] rounded-[0.7rem] xl:rounded-[1.3rem] xl:w-[8.2rem] xl:h-[8.2rem]"
                      />
                      <div className="flex-[1] pl-[2rem] xl:pl-[3rem]">
                        <h6 className="text-white font-medium text-[1.8rem] xl:text-[2.4rem]">
                          {review.name}
                        </h6>
                        <span className="text-[#dddddd] text-[1.4rem] xl:text-[1.5rem]">
                          {review.designation}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {review.reviewType === "video" && (
                  <div
                    className="video-box w-full relative"
                    onClick={() => {
                      const video = videoRefs.current[index];
                      if (video && !video.paused) handlePause(index);
                    }}
                  >
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      src={review.videoUrl}
                      poster={review.thumbnail}
                      className="w-full h-[57rem] object-cover block rounded-[1.6rem] md:h-[70rem] lg:h-[40rem] xl:h-[60rem]"
                      preload="metadata"
                      playsInline
                      controls={false}
                      loop={false}
                      onPause={() => handlePause(index)}
                      onEnded={() => handleEnded(index)}
                    ></video>
                    <span
                      className={`play-icon absolute-center w-[5rem] h-[5rem] xl:w-[7.2rem] xl:h-[7.2rem] transition-opacity duration-500 cursor-pointer`}
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
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
