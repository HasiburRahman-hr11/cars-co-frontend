"use client";
import React, { useState } from "react";

const socialLinks = [
  {
    title: "Facebook",
    icon: "/images/contact/fb-icon.webp",
    link: "#",
  },
  {
    title: "X",
    icon: "/images/contact/x-icon.webp",
    link: "#",
  },
  {
    title: "Linked In",
    icon: "/images/contact/linkedin-icon.webp",
    link: "#",
  },
  {
    title: "Instagram",
    icon: "/images/contact/insta-icon.webp",
    link: "#",
  },
  {
    title: "Whatsapp",
    icon: "/images/contact/whatsapp-icon.webp",
    link: "#",
  },
];

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !location) {
      return alert("Please fill the required fields.");
    }
    console.log({ name, email, phone, location, message });
    setName("");
    setEmail("");
    setPhone("");
    setLocation("");
    setMessage("");
  };
  return (
    <section className="bg-black py-[6rem] xl:py-[13rem]">
      <div className="container">
        <div className="flex flex-wrap justify-between max-w-[540px] mx-auto md:max-w-full">
          <div className="w-full md:w-[45%] xl:w-[47%]">
            <h6 className="w-max mx-auto md:ml-0  bg-white px-[3rem] pb-[0.5rem] pt-[0.8rem] text-black text-[1.3rem] uppercase rounded-[4rem] leading-[1.6] mb-[2rem] xl:text-[2rem] font-[500]">
              Connect With Us
            </h6>
            <h2 className="text-white leading-[1.3] text-[2.6rem] [&>br]:hidden md:[&>br]:block xl:text-[4.5rem] xl:leading-[1.2] text-center md:text-left">
              <b>Drop us A message</b> or call us on our direct Number.
            </h2>
            <p className="mt-[2rem] text-white xl:text-[2.2rem] text-center md:text-left">
              Have questions or need assistance? Drop us a message anytime or
              call us directly on our number — we’re here to help you quickly
              and professionally.
            </p>

            <ul className="mt-[5rem] list-none w-max max-w-[100%] mx-auto md:ml-0">
              <li>
                <a
                  href="mailto:sales@cars.co.in.com"
                  className="flex items-center"
                >
                  <span className="icon w-[6rem] h-[6rem] p-[1.2rem] flex items-center justify-center border border-[#555555] rounded-[7px]">
                    <img
                      src="/images/contact/email-icon.webp"
                      alt="Mail Icon"
                      className="object-contain max-h-[3.9rem]"
                    />
                  </span>
                  <div className="font-medium flex-[1] pl-[2rem]">
                    <span className="block text-[#767778] text-[1.8rem] xl:text-[2rem]">
                      Email Us
                    </span>
                    <span className="block text-white text-[2.2rem] xl:text-[2.8rem]">
                      sales@cars.co.in.com
                    </span>
                  </div>
                </a>
              </li>
              <li className="mt-[2.5rem]">
                <a href="tel:+919999999908" className="flex items-center">
                  <span className="icon w-[6rem] h-[6rem] p-[1.2rem] flex items-center justify-center border border-[#555555] rounded-[7px]">
                    <img
                      src="/images/contact/phone-icon.webp"
                      alt="Mail Icon"
                      className="object-contain max-h-[3.9rem]"
                    />
                  </span>
                  <div className="font-medium flex-[1] pl-[2rem]">
                    <span className="block text-[#767778] text-[1.8rem] xl:text-[2rem]">
                      cars.co.in
                    </span>
                    <span className="block text-white text-[2.2rem] xl:text-[2.8rem]">
                      (+91) 9999 9999 08
                    </span>
                  </div>
                </a>
              </li>
            </ul>

            <ul className="social-list list-none flex flex-wrap items-center justify-center md:justify-start mt-[5rem] gap-5 xl:mt-[13rem]">
              {socialLinks.map((item, index) => (
                <li key={index} className="group">
                  <a
                    href={item.link}
                    className="flex items-center w-[5rem] h-[5rem] p-[1.2rem] justify-center border border-[#767778] rounded-[7px] lg:w-[6rem] lg:h-[6rem] transition-all duration-500 group-hover:bg-white group-hover:border-white"
                    target="_blank"
                  >
                    <img
                      src={item.icon}
                      alt={`${item.title} Icon`}
                      className="object-contain max-h-[2.5rem] group-hover:invert transition-all duration-500"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-[50%] mt-[7rem] md:mt-0 xl:w-[45%]">
            <div className="form-wrapper bg-white rounded-[2.5rem] py-[4rem] px-[3rem] lg:py-[6rem] lg:px-[5rem]">
              <h3 className="text-[2.3rem] xl:text-[4.5rem] mb-[3rem] font-medium">
                Send us an email
              </h3>

              <form action="" className="block w-full" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Full Name"
                  className={inputStyle}
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className={inputStyle}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="tel"
                  placeholder="Mobile"
                  required
                  className={inputStyle}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Location"
                  required
                  className={inputStyle}
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <textarea
                  name=""
                  id=""
                  placeholder="Message"
                  className={`${inputStyle} h-[8rem]`}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button
                  type="submit"
                  className="bg-black urbanist w-full px-[3rem] py-[1.4rem] text-white text-[1.8rem] rounded-[4rem] font-medium cursor-pointer md:w-max md:mx-auto md:px-[5rem] md:mt-[1rem] lg:mr-0 xl:text-[2.2rem] xl:px-[7rem] xl:py-[1.9rem] xl:rounded-[8rem] transition-all duration-500 hover:bg-[#FE0000]"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

const inputStyle =
  "w-full block pb-[2rem] mb-[3rem] border-b border-b-[#727272] outline-none xl:text-[1.6rem]";
