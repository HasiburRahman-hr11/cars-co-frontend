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
    <section className="bg-white py-[6rem]">
      <div className="container">
        <div className="text-center section-header">
          <h6 className="w-max mx-auto bg-white border border-[#4D4D4D] px-[3rem] py-[1.4rem] text-[#4D4D4D] text-[1.3rem] uppercase rounded-[4rem] leading-1 mb-[2rem] xl:text-[2rem] xl:leading-[1] xl:mb-[3rem] font-medium">
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
        </div>
        <div className="max-w-[600px] mx-auto">
            <div>
                {leftCol.map((item ,index) => (
                    <div key={index} className="mt-[4rem]">
                        <h4 className="text-[2rem] text-[#4B4B4B] font-[500] [&>b]:font-[600] [&>b]:text-black xl:text-[4.5rem]" dangerouslySetInnerHTML={{__html : item.title}}></h4>
                        <img src={item.thumbnail} alt="Thumbnail" className="block object-cover rounded-[1rem] mt-[1.5rem]" />
                        <p className="mt-[1.5rem] text-[#636363] xl:text-[2.2rem] xl:mt-[2rem]">{item.description}</p>
                    </div>
                ))}
            </div>
            <div>
                {rightCol.map((item ,index) => (
                    <div key={index} className="mt-[4rem]">
                        <h4 className="text-[2rem] text-[#4B4B4B] font-[500] [&>b]:font-[600] [&>b]:text-black xl:text-[4.5rem]" dangerouslySetInnerHTML={{__html : item.title}}></h4>
                        <img src={item.thumbnail} alt="Thumbnail" className="block object-cover rounded-[1rem] mt-[1.5rem]" />
                        <p className="mt-[1.5rem] text-[#636363] xl:text-[2.2rem] xl:mt-[2rem]">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
