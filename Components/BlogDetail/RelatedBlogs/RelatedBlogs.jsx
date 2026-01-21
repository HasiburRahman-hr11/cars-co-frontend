import React from "react";
import blogs from "@/public/dummyData/blogs";
import Link from "next/link";

const RelatedBlogs = () => {
  return (
    <section className="bg-black py-[6rem] xl:py-[13rem]">
      <div className="container">
        <h2 className="relative text-center text-white leading-[1.3] text-[2.6rem] md:text-left md:flex md:items-center md:justify-between [&>br]:hidden md:[&>br]:block xl:text-[4.5rem] xl:leading-[1.2]">
          <span>
            Other <b>Related Blogs</b>{" "}
          </span>
          <span className="hidden md:block md:h-[1px] md:bg-white md:ml-[2rem] md:flex-[1] xl:ml-[4rem]"></span>
        </h2>

        <div className="grid grid-col-1 gap-y-[4rem] mt-[4rem] sm:max-w-[500px] sm:mx-auto md:max-w-full md:grid-cols-2 md:gap-x-[2.5rem] lg:grid-cols-3 xl:gap-x-[3rem] xl:gap-y-[6rem] xl:mt-[7rem]">
          {blogs.slice(0, 3).map((blog, index) => (
            <Link href={`/blogs/${blog._id}`} key={index}>
              <div className="overflow-hidden rounded-[1rem] group xl:rounded-[2.4rem]">
                <img
                  src={blog.thumbnail}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <div className="mt-[2rem]">
                <h5 className="font-[600] text-white text-[1.6rem] xl:text-[2.5rem]">
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
      </div>
    </section>
  );
};

export default RelatedBlogs;
