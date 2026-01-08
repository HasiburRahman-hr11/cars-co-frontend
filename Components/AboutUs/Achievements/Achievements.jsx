import React from "react";

const achievementsList = [
  {
    title: `<b>100%</b> Dedicated Support`,
    thumbnail: "/images/about-us/achievement-img-1.webp",
    description:
      "From inquiry to delivery, our team ensures smooth, transparent, and personalized support for a hassle-free ownership journey.",
  },
  {
    title: `<b>500+</b> Cities Covered`,
    thumbnail: "/images/about-us/achievement-img-2.webp",
    description:
      "Luxury within your reach—our nationwide presence ensures every customer enjoys access to premium cars and trusted services.",
  },
  {
    title: `<b>10+</b> Years of Expertise`,
    thumbnail: "/images/about-us/achievement-img-3.webp",
    description:
      "With over a decade of expertise, Cars.co.in simplifies processes and redefines premium car ownership experiences.",
  },
  {
    title: `<b>32000+</b> Happy Customers`,
    thumbnail: "/images/about-us/achievement-img-4.webp",
    description: "Trusted by over 32,000 customers nationwide, each experience reflects our promise of luxury, satisfaction, and long-lasting trust.",
  },
  {
    title: `<b>12000+</b> Luxury Cars Delivered`,
    thumbnail: "/images/about-us/achievement-img-5.webp",
    description: "With over 12,000 cars delivered, we proudly connect enthusiasts to their dream luxury vehicles across India’s roads.",
  },
  {
    title: `<b>300+</b> Verified Dealers`,
    thumbnail: "/images/about-us/achievement-img-6.webp",
    description: "A strong network of verified dealers ensures authenticity, transparency, and fair value in every transaction we complete.",
  },
];
// Calculate middle index
const mid = Math.floor(achievementsList.length / 2);

// Divide the array
const leftCol = achievementsList.slice(0, mid);
const rightCol = achievementsList.slice(mid);

const Achievements = () => {
  return (
    <section className="bg-white py-[6rem] lg:pb-[0] xl:pt-[13rem]">
      <div className="container">
        <div className="text-center section-header lg:text-left lg:w-[50%] 2xl:w-[43%]">
          <h6 className="w-max mx-auto bg-white border border-[#4D4D4D] px-[3rem] py-[1rem] text-[#4D4D4D] text-[1.3rem] uppercase rounded-[4rem] leading-[1.6] mb-[2rem] xl:text-[2rem] xl:mb-[3rem] font-medium lg:ml-0">
            Achievements
          </h6>
          <h2 className="text-[#202020] leading-[1.3] text-[2.6rem] [&>br]:hidden md:[&>br]:block xl:text-[4.5rem] xl:leading-[1.2]">
            <b>Our Milestones</b> Speak for Themselves
          </h2>
          <p className="mt-[1rem] text-[#636363] xl:text-[2.2rem] xl:mt-[2rem]">
            When you sell your car with us, enjoy a fast, hassle-free process,
            fair valuation, instant payment, and support every step, making car
            selling simple and secure.
          </p>
          <span className="hidden lg:flex items-center justify-center border border-[#AEAEAE] rounded-[50%] p-[2rem] w-[8rem] h-[8rem] xl:w-[14rem] xl:h-[14rem] 1xl:w-[17rem] 1xl:h-[17rem] mt-[5rem]">
            <img src="/images/scroll-down-arrow-black.webp" alt="" className="object-contain h-[3rem] xl:h-[4.5rem] 1xl:h-[6rem] scroll-down-arrow" />
          </span>
        </div>
        <div className="max-w-[540px] mx-auto md:max-w-none md:flex md:justify-between lg:w-[75%] lg:ml-auto lg:mr-0 lg:translate-y-[-13rem] xl:w-[78%] 1xl:translate-y-[-16rem] about-achievement-list">
            <div className="md:w-[48%] lg:w-[47%]">
                {leftCol.map((item ,index) => (
                    <div key={index} className="mt-[4rem] xl:mt-[6rem]">
                        <h4 className="text-[2rem] text-[#4B4B4B] font-[500] [&>b]:font-[700] [&>b]:text-black xl:text-[3.8rem] xl:leading-[1.2] 1xl:text-[4.5rem] lg:[&>b]:block " dangerouslySetInnerHTML={{__html : item.title}}></h4>
                        <img src={item.thumbnail} alt="Thumbnail" className="block object-cover rounded-[1rem] mt-[1.5rem] 1xl:mt-[3rem] xl:rounded-[2rem]" />
                        <p className="mt-[1.5rem] text-[#636363] xl:text-[2.2rem] xl:mt-[2rem] 1xl:mt-[2.5rem]">{item.description}</p>
                    </div>
                ))}
            </div>
            <div className="md:w-[48%] lg:w-[47%] lg:translate-y-[-19rem] xl:translate-y-[-40rem] 1xl:translate-y-[-42rem]">
                {rightCol.map((item ,index) => (
                    <div key={index} className="mt-[4rem] xl:mt-[6rem]">
                        <h4 className="text-[2rem] text-[#4B4B4B] font-[500] [&>b]:font-[700] [&>b]:font-[urbanist] [&>b]:text-black xl:text-[3.8rem] xl:leading-[1.2] 1xl:text-[4.5rem] lg:[&>b]:block urbanist" dangerouslySetInnerHTML={{__html : item.title}}></h4>
                        <img src={item.thumbnail} alt="Thumbnail" className="block object-cover rounded-[1rem] mt-[1.5rem] 1xl:mt-[3rem] xl:rounded-[2rem]" />
                        <p className="mt-[1.5rem] text-[#636363] xl:text-[2.2rem] xl:mt-[2rem] 1xl:mt-[2.5rem]">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
