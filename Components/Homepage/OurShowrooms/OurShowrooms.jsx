import Link from "next/link";
import React from "react";

const usps = [
  { subtitle: "5000+", title: `Luxury  Cars Sold` },
  { subtitle: "3500+", title: `Happy Customers Served` },
  { subtitle: "98%", title: `Customer Satisfaction Rate` },
];

const OurShowrooms = () => {
  return (
    <section className="bg-[#161616] py-[6rem] text-white xl:py-[13rem]">
      <div className="container">
        <div className="section-header xl:hidden">
          <h6 className="w-max bg-[#202020] px-[3rem] pb-[1rem] pt-[1.3rem] text-[#AEAEAE] text-[1.3rem] uppercase rounded-[4rem] leading-[1.6] mb-[2rem] xl:text-[2rem]">
            Our Showrooms
          </h6>
          <h2 className="text-white leading-[1.4] text-[2.6rem] [&>br]:hidden md:[&>br]:block xl:text-[4.5rem] xl:leading-[1.2]">
            Our remarkable success is best{" "}
            <b>expressed clearly through numbers.</b>
          </h2>
        </div>
        <div className="mt-[4rem] md:flex md:flex-wrap md:justify-between md:flex-row-reverse">
          <div className="md:w-[45%] xl:w-[40%]">
            <img
              src="/images/homepage/hp-showroom-thumb.webp"
              alt="Showroom Image"
              className="w-full block object-cover rounded-[1.5rem]"
            />
          </div>
          <div className="mt-[4rem] md:w-[45%] md:mt-0 xl:w-[55%]">
            <div className="section-header hidden xl:block xl:w-[90%]">
              <h6 className="w-max bg-[#202020] px-[3rem] py-[1.4rem] text-[#AEAEAE] text-[1.3rem] uppercase rounded-[4rem] leading-1 mb-[2rem] xl:text-[2rem] xl:leading-[1] xl:mb-[3rem]">
                Our Showrooms
              </h6>
              <h2 className="text-white leading-[1.4] text-[2.6rem] [&>br]:hidden md:[&>br]:block xl:text-[4.5rem] xl:leading-[1.2]">
                Our remarkable success is best{" "}
                <b>expressed clearly through numbers.</b>
              </h2>
            </div>
            <p className="text-[#818181] xl:text-[2.2rem] xl:mt-[2.5rem] xl:w-[90%]">
              Step into our world of automotive excellence. Get a close look at
              our exceptional fleet and feel the unmatched quality, comfort, and
              performance of a luxury car.
            </p>
            <Link
              href="#"
              className="hidden xl:inline-block bg-[#FE0000] text-white rounded-[5rem] mt-[4rem] text-[2.2rem] py-[1.8rem] px-[6rem] hover:bg-white hover:text-black transition-all duration-500"
            >
              Our Showrooms
            </Link>
            <ul className="mt-[2rem] [&>li]:py-[2rem] [&>li]:border-b [&>li]:border-b-[#434343] [&>li:last-child]:border-b-0 [&>li:last-child]:pb-0 xl:grid xl:grid-cols-3 xl:[&>li]:border-b-0 xl:[&>li:last-child]:border-r xl:[&>li:last-child]:border-r-[#434343] xl:mt-[10rem] xl:[&>li]:py-0">
              {usps.map((usp, index) => (
                <li
                  key={index}
                  className="xl:px-[2.5rem] xl:border-l xl:border-l-[#434343] "
                >
                  <h6
                    className="urbanist font-[600] text-[2.7rem] xl:text-[3.8rem] [&>br]:hidden xl:[&>br]:block"
                    dangerouslySetInnerHTML={{__html : usp.subtitle}}
                  ></h6>
                  <span className="urbanist font-[500] text-[1.6rem] xl:text-[2.2rem]">
                    {usp.title}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="#"
              className="inline-block bg-[#FE0000] text-white text-[1.8rem] px-[3rem] py-[1.3rem] rounded-[4rem] mt-[4rem] xl:hidden"
            >
              Our Showrooms
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurShowrooms;
