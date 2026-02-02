"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import blogs from "@/public/dummyData/blogs";
import Link from "next/link";

const BlogListing = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-white py-[6rem] xl:py-[13rem]">
      <div className="container">
        <div className="md:flex flex-wrap justify-between sm:max-w-[500px] sm:mx-auto md:max-w-full">
          <p className="text-center font-light text-[#404040] md:w-[50%] md:text-left xl:text-[2.5rem] xl:w-[60%]">
            At Big Boy Toyz the aim has always been to dream big and achieve
            great. Welcome to our workshop.
          </p>
          <div className="flex items-center gap-[8px] mt-[2.5rem] md:w-[40%] md:mt-0 max-w-[27rem] mx-auto md:mr-0">
            <span className="w-max text-[1.4rem] font-medium xl:text-[2rem]">
              Sort By:
            </span>
            <div className="relative flex-[1]">
              <select
                name=""
                id=""
                className="px-[1.5rem] py-[0.8rem] w-full border border-[#D5D5D5] rounded-[0.5rem] appearance-none cursor-pointer text-[1.4rem] font-medium xl:text-[2rem] outline-none xl:py-[1.2rem]"
              >
                <option value="Latest">Latest</option>
                <option value="Oldest">Oldest</option>
                <option value="Title">Title</option>
              </select>
              <img
                src="/images/drop-down-arrow-black.png"
                alt="Arrow"
                className="pointer-events-none absolute right-[8px] top-[1.5rem] w-[1.2rem] xl:w-[1.6rem] xl:top-[2.4rem] xl:right-[2.5rem] object-contain"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-col-1 gap-y-[4rem] mt-[4rem] border-t border-t-[#D5D5D5] pt-[3rem] sm:max-w-[500px] sm:mx-auto md:max-w-full md:grid-cols-2 md:gap-x-[2.5rem] lg:grid-cols-3 xl:gap-x-[3rem] xl:gap-y-[6rem] xl:pt-[5rem]">
          {blogs.map((blog, index) => (
            <Link
              href={`/blogs/${blog._id}`}
              key={index}
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <div className="overflow-hidden rounded-[1rem] group xl:rounded-[2.4rem]">
                <img
                  src={blog.thumbnail}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <div className="mt-[2rem]">
                <h5 className="font-[600] text-[1.6rem] xl:text-[2.5rem]">
                  {blog.title}
                </h5>
                <span className="flex items-center text-[#FE0000] font-medium text-[1.3rem] xl:text-[2rem] mt-[1rem] group xl:mt-[2rem]">
                  Read More{" "}
                  <img
                    src="/images/link-arrow-red.png"
                    alt="Read More Link Arrow"
                    className="object-contain w-[1rem] xl:w-[1.5rem] inline-block ml-[5px] xl:ml-[12px] transition-all duration-300 group-hover:rotate-45"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <ul
          className="flex flex-wrap items-center justify-center gap-[8px] mt-[5rem] xl:mt-[7rem]"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <li>
            <span className={paginationLink}>
              <img
                src="/images/left-arrow-black.png"
                alt="Previous"
                className="object-contain w-[0.8rem] xl:w-[1.1rem] transition-all duration-300 group-hover:invert"
              />
            </span>
          </li>
          <li>
            <span className={paginationLink}>1</span>
          </li>
          <li>
            <span className={paginationLink}>2</span>
          </li>
          <li>
            <span className={paginationLink}>3</span>
          </li>
          <li>
            <span className={paginationLink}>...</span>
          </li>
          <li>
            <span className={paginationLink}>
              <img
                src="/images/right-arrow-black.png"
                alt="Previous"
                className="object-contain w-[0.8rem] xl:w-[1.1rem] transition-all duration-300 group-hover:invert"
              />
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default BlogListing;

const paginationLink =
  "cursor-pointer w-[3rem] h-[3rem] flex items-center justify-center p-[1rm] border border-black rounded-[0.5rem] xl:w-[7rem] xl:h-[7rem] xl:rounded-[1.3rem] text-[1.3rem] xl:text-[2.2rem] transition-all duration-300 hover:bg-black hover:text-white group";
