import React from "react";

const introUsps = [
    {
        icon : "/images/about-us/intro-usp-icon-1.webp",
        title: "Handpicked luxury cars, verified & certified"
    },
     {
        icon : "/images/about-us/intro-usp-icon-2.webp",
        title: "Seamless experience from test drive to ownership"
    },
     {
        icon : "/images/about-us/intro-usp-icon-3.webp",
        title: "Strong ecosystem of reliable dealers & partners"
    },
     {
        icon : "/images/about-us/intro-usp-icon-4.webp",
        title: "Personalized service and support at every step"
    }
]

const IntroSection = () => {
  return (
    <section className="bg-black py-[6rem] xl:py-[13rem]">
      <div className="container">
        <div className="text-center section-header lg:w-[75%] lg:text-left xl:w-[85%]">
          <h6 className="w-max mx-auto bg-[#202020] px-[3rem] py-[1rem] text-[#AEAEAE] text-[1.3rem] uppercase rounded-[4rem] leading-[1.6] mb-[2rem] xl:text-[2rem] xl:mb-[3rem] lg:ml-0">
            Who we are
          </h6>
          <h2 className="text-white leading-[1.3] text-[2.6rem] [&>br]:hidden md:[&>br]:block xl:text-[4.5rem] xl:leading-[1.2]">
            From the house of Big Boy Toyz, presenting the affordable luxury at
            its peak,{" "}
            <b>
              where elegance, exclusivity, comfort, and sophistication truly
              converge together.
            </b>
          </h2>
        </div>

        <div className="mt-[5rem] max-w-[540px] mx-auto lg:max-w-none lg:flex lg:flex-wrap lg:justify-between xl:mt-[7rem]">
          <div className="lg:w-[46%]">
            <img
              src="/images/about-us/intro-thumb.webp"
              alt="THumbnail"
              width="668"
              height="528"
              className="w-full block"
            />
          </div>
          <div className="mt-[5rem] lg:w-[47%] lg:mt-0">
            <p className="mt-[1rem] text-[#A7A7A7] xl:text-[2.2rem] lg:mt-0">
              Cars.co.in goes beyond buying and selling—it’s about experiences
              blending luxury, trust, and accessibility. As India’s trusted
              destination, we bring premium cars closer with expert guidance,
              curated collections, transparent deals, and seamless transfers,
              ensuring every drive feels effortless, reliable, rewarding, and
              truly luxurious.
            </p>

            <ul className="mt-[4rem] flex flex-wrap justify-between gap-y-[3rem] lg:gap-y-[5rem]">
                {introUsps.map((usp , index) => (
                    <li key={index} className="w-[48%]">
                        <img src={usp.icon} alt="Icon" className="object-contain w-[2.5rem] h-[3rem] xl:w-[3rem] 1xl:w-[4rem] 1xl:h-[4rem]" />
                        <h6 className="text-white font-[500] mt-[1.5rem] text-[1.6rem] xl:text-[2.2rem] 1xl:text-[2.6rem]">{usp.title}</h6>
                    </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
