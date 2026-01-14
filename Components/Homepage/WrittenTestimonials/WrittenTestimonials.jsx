"use client";
import Slider from "react-slick";

const usps = [
  {
    title: "3.5 Lakh",
    subtitle: `Luxury Cars Sold`,
  },
  {
    title: "5.7 Lakh",
    subtitle: "Esteemed Happy Clients",
  },
];

const testimonials = [
  {
    name: "Vishal Kukreja",
    designation: "BMW i7, Founder of a Startup",
    avatar: "/images/homepage/hp-quote-avatar.webp",
    thumbnail: "/images/homepage/hp-written-testimonial-thumb-1.webp",
    heading:
      "Smooth listing great buyers transparent process delivered beyond expectations",
    reviewText:
      "“From inspection to final transfer, every step was handled professionally, smoothly, & completely stress free.”",
  },
  {
    name: "Vishal Kukreja",
    designation: "BMW i7, Founder of a Startup",
    avatar: "/images/homepage/hp-quote-avatar.webp",
    thumbnail: "/images/homepage/hp-written-testimonial-thumb-2.webp",
    heading:
      "Smooth listing great buyers transparent process delivered beyond expectations",
    reviewText:
      "“From inspection to final transfer, every step was handled professionally, smoothly, & completely stress free.”",
  },
  {
    name: "Vishal Kukreja",
    designation: "BMW i7, Founder of a Startup",
    avatar: "/images/homepage/hp-quote-avatar.webp",
    thumbnail: "/images/homepage/hp-written-testimonial-thumb-1.webp",
    heading:
      "Smooth listing great buyers transparent process delivered beyond expectations",
    reviewText:
      "“From inspection to final transfer, every step was handled professionally, smoothly, & completely stress free.”",
  },
  {
    name: "Vishal Kukreja",
    designation: "BMW i7, Founder of a Startup",
    avatar: "/images/homepage/hp-quote-avatar.webp",
    thumbnail: "/images/homepage/hp-written-testimonial-thumb-2.webp",
    heading:
      "Smooth listing great buyers transparent process delivered beyond expectations",
    reviewText:
      "“From inspection to final transfer, every step was handled professionally, smoothly, & completely stress free.”",
  },
];

function NextArrow(props) {
  const { onClick, className } = props;
  return (
    <div
      className={`bg-[#303030] w-[7.5rem] h-[7.5rem] rounded-[50%] inline-flex justify-center items-center ${className}`}
      onClick={onClick}
    >
      <img src="/images/slider-arrow-next-white.webp" alt="Next Slide" />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick, className } = props;
  return (
    <div
      className={`bg-[#303030] w-[7.5rem] h-[7.5rem] rounded-[50%] inline-flex justify-center items-center ${className}`}
      onClick={onClick}
    >
      <img src="/images/slider-arrow-prev-white.webp" alt="Previous Slide" />
    </div>
  );
}

const TestimonialItem = ({ testimonial }) => {
  return (
    <div className="bg-[#1C1C1C] flex flex-wrap justify-center px-[2rem] py-[4rem] rounded-[2rem] md:justify-between md:items-center xl:px-[2.5rem]">
      <div className="thumbnail w-full flex items-center justify-center md:w-[36%]">
        <img
          src={testimonial.thumbnail}
          alt="Thumbnail"
          className="object-cover w-full max-w-[250px] aspect-square rounded-[0.5rem] xl:rounded-[1rem] xl:max-w-full xl:min-h-[34rem]"
        />
      </div>
      <div className="mt-[2rem] md:w-[59%] md:mt-0">
        <div className="text-center md:text-left">
          <h5 className="text-white text-[1.6rem] xl:text-[2.6rem] xl:tracking-tight">
            {testimonial?.heading}
          </h5>
          <p className="text-[#BABABA] mt-[1rem] xl:text-[2.2rem] xl:mt-[2rem] xl:tracking-tight">
            {testimonial.reviewText}
          </p>
        </div>
        <div className="flex items-center mt-[3rem] pt-[2rem] border-t border-t-[#4E4E4E] lg:pt-[3rem] xl:mt-[4rem] xl:pt-0 xl:border-t-0 justify-center">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="object-cover w-[3.7rem] h-[3.7rem] lg:w-[7rem] lg:h-[7rem] rounded-[0.7rem] xl:rounded-[1.3rem] xl:w-[7.5rem] xl:h-[7.5rem]"
          />
          <div className="w-max md:flex-[1] md:w-auto pl-[2rem] xl:pl-[3rem]">
            <h6 className="text-white font-medium text-[1.4rem] xl:text-[2.4rem]">
              {testimonial.name}
            </h6>
            <span className="text-[#dddddd] text-[1.1rem] xl:text-[1.5rem]">
              {testimonial.designation}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

let sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false,
  pauseOnFocus: false,
};

let sliderSettingsDesk = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  autoplay: false,
  autoplaySpeed: 3000,
  variableWidth: false,
  pauseOnHover: false,
  pauseOnFocus: false,
};

const WrittenTestimonials = () => {
  return (
    <section className="bg-[#0D0D0D] py-[6rem] overflow-hidden xl:py-[13rem]">
      <div className="container">
        <div className="flex flex-wrap justify-between max-w-[380px] mx-auto xl:max-w-full">
          <div className="w-full text-center xl:w-[62%] xl:text-left">
            <h6 className="w-max mx-auto bg-[#202020] px-[3rem] pb-[0.5rem] pt-[0.8rem] text-[#AEAEAE] text-[1.3rem] uppercase rounded-[4rem] leading-[1.6] mb-[2rem] xl:text-[2rem] xl:mb-[3rem] xl:ml-0">
              Stories which we love
            </h6>
            <h2 className="text-white leading-[1.3] text-[2.6rem] [&>br]:hidden md:[&>br]:block xl:text-[4.5rem] xl:leading-[1.2]">
              Seller Stories From <b>Our Customers</b>
            </h2>
            <p className="mt-[1rem] text-[#818181] xl:text-[2.2rem] xl:mt-[2rem]">
              Real experiences shared by sellers who listed their cars and
              achieved great results
            </p>
          </div>
          <ul className="w-full list-none grid grid-cols-2 border-r border-r-[#5D5D5D] mt-[4rem] xl:w-[35%]">
            {usps.map((usp, index) => (
              <li
                key={index}
                className="text-white px-[3rem] border-l border-l-[#5D5D5D] py-[1rem]"
              >
                <h6 className="text-[2.3rem] xl:text-[3.8rem] font-medium">
                  {usp.title}
                </h6>
                <p className="xl:text-[2.2rem] mt-[1rem]">{usp.subtitle}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative hidden xl:block hp-testimonial-slider hp-written-testimonials mx-[-2rem] mt-[8rem]">
          <Slider {...sliderSettingsDesk}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="h-full w-full ">
                <TestimonialItem testimonial={testimonial} />
              </div>
            ))}
          </Slider>
        </div>

        <div className="text-white relative hp-testimonial-slider hp-written-testimonials mt-[5rem] pb-[7rem] xl:hidden max-w-[500px] mx-auto">
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="h-full  ">
                <TestimonialItem testimonial={testimonial} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default WrittenTestimonials;
