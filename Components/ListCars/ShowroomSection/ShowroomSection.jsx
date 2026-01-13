"use client";
import { useState } from "react";

const showrooms = [
  {
    title: "Delhi/NCR",
    isHeadQuarter: true,
    address:
      "Plot No. 134, Sector 37, Pace City 1, Gurgaon Haryana, 122001, India",
    googleMapLink: "https://maps.app.goo.gl/zNfwAGKLbfkhQrpTA",
  },
  {
    title: "Hydrebad",
    isHeadQuarter: false,
    address:
      "Road no 2, Banjara Hills, Shangrila Plaza, Opp.KBR Park, Hyderabad, Telangana - 500034",
    googleMapLink: "https://maps.app.goo.gl/F8v6BMzK2USVz7cS7",
  },
  {
    title: "Mumbai",
    isHeadQuarter: false,
    address:
      "7, Hubtown Sunmist, Opposite Hubtown Solaris, Telli Galli, Andheri East, N S Phadke Marg, Mumbai - 400053",
    googleMapLink: "https://maps.app.goo.gl/hH1jvrxkL89TPR6u9",
  },
  {
    title: "Ahmedabad",
    isHeadQuarter: false,
    address:
      "Cama Motors, Rustom Cama Marg, Old City, Lal Darwaja, Ahmedabad, Gujarat 380001",
    googleMapLink: "https://maps.app.goo.gl/CYhXfh1RNMzWRmMp9",
  },
  {
    title: "Bengaluru",
    isHeadQuarter: false,
    address:
      "140, Residency Road, Shanthala Nagar, Richmond Town, Bengaluru, Karnataka - 560025",
    googleMapLink: "https://maps.app.goo.gl/PLdXNLZFW4SgDqaG9",
  },
];

const ShowroomSection = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [carName, setCarName] = useState("");
  const [cityName, setCityName] = useState("");
  return (
    <section className="bg-white py-[6rem] xl:py-[13rem]">
      <div className="container">
        <div className="flex flex-wrap max-w-[540px] mx-auto lg:max-w-full lg:justify-between">
          <div className="w-full text-center lg:w-[40%] lg:text-left">
            <h6 className="w-max mx-auto bg-white border border-[#333333] px-[3rem] pb-[0.5rem] pt-[0.8rem] text-[#333333] text-[1.3rem] uppercase rounded-[4rem] leading-[1.6] mb-[2rem] xl:text-[2rem] xl:mb-[3rem] font-medium lg:ml-0">
              VISIT SHOWROOM
            </h6>
            <h2 className="text-[#222222] leading-[1.3] text-[2.6rem] [&>br]:hidden md:[&>br]:block xl:text-[4.5rem] xl:leading-[1.2]">
              You Can Also <br />
              <b>Visit Our Showroom.</b>
            </h2>
            <div className="grid grid-cols-2 gap-[1rem] mt-[4rem] xl:mt-[10rem]">
              <div className="flex flex-col gap-[1rem] items-end">
                <img
                  src="/images/list-cars/showroom-img-1.webp"
                  alt="Showroom"
                  className="block w-full"
                />
                <img
                  src="/images/list-cars/showroom-img-3.webp"
                  alt="Showroom"
                  className="block w-[75%]"
                />
              </div>
              <div className="flex flex-col gap-[1rem] items-start">
                <img
                  src="/images/list-cars/showroom-img-2.webp"
                  alt="Showroom"
                  className="block w-[50%]"
                />
                <img
                  src="/images/list-cars/showroom-img-4.webp"
                  alt="Showroom"
                  className="block w-full"
                />
              </div>
            </div>
          </div>

          <div className="w-full mt-[5rem] lg:w-[55%] lg:mt-0 xl:w-[52%]">
            <ul className="showrooms flex flex-wrap justify-between">
              {showrooms.map((showroom, index) => (
                <li
                  key={index}
                  className="border-t border-t-[#CDCDCD] w-[48%] last:w-full last:border-b last:border-b-[#CDCDCD]"
                >
                  <a
                    href={showroom.googleMapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-[3rem] flex flex-col justify-between h-full w-full xl:py-[2rem]"
                  >
                    <div>
                      <h6 className="flex items-center text-[14px] 2xl:text-[14px] font-[600] text-black">
                        {showroom.title}
                        {showroom.isHeadQuarter && (
                          <span className="text-white text-[11px] bg-[#FE0000] inline-block px-[8px] py-[3px] leading-[1] font-[700] rounded-[3rem] ml-[5px]">
                            HQ
                          </span>
                        )}
                      </h6>
                      <p className="mt-[1.5rem] text-[#737373] text-[13px] font-medium lg:text-[12px] 2xl:text-[13px]">
                        {showroom.address}
                      </p>
                    </div>
                    <img
                      src="/images/link-arrow-black.webp"
                      alt="Arrow"
                      className="object-contain w-[12px] 2xl:w-[13px] mt-[2rem]"
                    />
                  </a>
                </li>
              ))}
            </ul>

            <form
              action=""
              className="block w-full bg-[#F3F3F3] p-[2.5rem] rounded-[1rem] mt-[4rem] xl:p-[4rem]"
            >
              <h4 className="text-[2rem] xl:text-[3rem] font-medium mb-[2rem]">
                Get A Call Back Today.
              </h4>
              <div className="lg:grid grid-cols-2 gap-x-[1.5rem]">
                <input
                  type="text"
                  name="firstName"
                  required
                  placeholder="First Name"
                  className={inputStyle}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  name="lastName"
                  required
                  placeholder="Last Name"
                  className={inputStyle}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  className={inputStyle}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="tel"
                  name="phone"
                  id=""
                  placeholder="Mobile Number"
                  className={inputStyle}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <input
                type="text"
                name="carName"
                placeholder="Type Your Car Name"
                className={inputStyle}
                value={carName}
                onChange={(e) => setCarName(e.target.value)}
              />
              <input
                type="text"
                name="cityName"
                placeholder="Type Your City Name"
                className={inputStyle}
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
              />
              <button type="submit" className="bg-black font-medium text-white w-full text-[1.6rem] xl:text-[1.9rem] rounded-[0.5rem] py-[1.2rem] xl:h-[6.8rem] hover:bg-[#FE0000] transition-all duration-500 cursor-pointer">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowroomSection;

const inputStyle =
  "w-full border border-[#7F7F7F] font-medium rounded-[0.5rem] p-[1rem] text-[1.4rem] text-black mb-[1.5rem] xl:text-[1.7rem] outline-none xl:h-[6.8rem] xl:pl-[2rem] xl:rounded-[0.5rem]";
