import BottomBanner from "@/Components/BlogDetail/BottomBanner/BottomBanner";
import RelatedBlogs from "@/Components/BlogDetail/RelatedBlogs/RelatedBlogs";
import React from "react";

const SingleBlogPage = () => {
  return (
    <>
      <section className="bg-white py-[6rem] xl:py-[13rem]">
        <div className="container">
          <p className="text-center text-[#7A7A7A] xl:text-[2rem] font-medium uppercase">
            Published on November 15, 2021
          </p>
          {/* Blog Title */}
          <h1 className="text-center text-[3rem] xl:text-[6rem] mt-[1.5rem] font-medium leading-[1.2] xl:w-[85%] xl:mx-auto">
            Mercedes-Benz is a brand that dives into the best driving
            experiences
          </h1>
          {/* Blog Thumbnail */}
          <div className="mt-[3rem] xl:mt-[5rem]">
            <img
              src="/images/blog/blog-detail-banner.webp"
              alt="Thumbnail"
              className="block object-cover rounded-[1rem] xl:rounded-[2.8rem]"
            />
          </div>

          {/* Blog COntent */}
          <div className="blog-detail-content mt-[4rem] xl:mt-[6rem]">
            <p>
              The Mercedes-Benz is no more expensive, buy used Mercedes-Benz
              within a comfortable budget and unleash the luxurious experience.
              Germany is the hometown of many luxury automakers and
              Mercedes-Benz is one out of it. Models built by Mercedes-Benz are
              built with the motive of ‘The Best Or Nothing.’ It is a fact that
              Mercedes-Benz is the most sold premium car across the world in
              2018. In India, Mercedes-Benz has huge demand, where buyers like
              you wait for the right moment. The Mercedes-Benz is not only a
              transport vehicle but art that automakers and its drivers can feel
              into. 
            </p>
            <p>
              Mercedes-Benz has all the fancy dream cars you can ask for. Take
              the S-Class model, which is formerly known as SonderKlasse
              (Special Class). The product line of the S-Class consists of
              full-size luxury sedans, limousines, and armored sedans. Hence,
              You get a wide range of options such as rear-wheel and all-wheel
              drive with 449hp 4.7-liter twin-turbo V8 engine and 523hp
              6.0-liter twin-turbo V12 for both. It offers diesel and 3 petrol
              engines with plug-in Hybrid. The mileage varies based on the model
              and fuel type, also you get an automatic transmission. The body of
              the S-class looks stylish and big for a comfortable room inside. 
            </p>
            <p>
              Moreover, the A-Class started in 1997 with a hatchback and is now
              in its fourth generation. It is the first time that the A-Class
              has been offered as a hatchback and sedan. Also, it is a
              subcompact executive range of cars with a front-mounted engine and
              front-wheel drive. The design is very detailed and it has a
              diamond grille on the front which makes it look aesthetic. You get
              dual variants of petrol and diesel with decent mileage. The
              A-Class is the complete family luxury, and best suitable for long
              drives. You know you want a Mercedes right by you right now, isn’t
              it? 
            </p>
            <h2>
              When you are rich in your phantom for cars, <b>Mercedes-Benz is right
              for your exposure </b>
            </h2>
            <p>
              What is Hot and Cool at the same time, possess the divine power of
              beauty and luxury, and hold the depth of the philosophy of
              technology? The right answer, The Mercedes-Benz which is now
              available as Used Mercedes-Benz with us will make you feel light
              in your pocket. It is said that miracles happen across the world,
              be it a big country or a small island you never heard of. And one
              miracle will happen here when you will treat yourself to this
              miraculously designed car. There is no more up-to-date or
              luxurious way of embodying the design idiom: breathtaking
              proportions and a luxurious haute-couture interior. Amazingly
              done. 
            </p>
            <p>
              And as a matter of fact, if you are buying it I assure you that
              all our cars are well-maintained and under certified dealers. They
              are fully verified and authorized before handing over to our road
              enthusiasts. We make sure that nothing shall hold you back from
              making a miracle or rather a history in the map of car purchasing.
              For an amazing and ultimate luxury that combines the DNA of an SUV
              or Sedan or any supercar, you will be coming forward for the
              luxury saloon to form an ultramodern SUV in a timeless three-box
              design. 
            </p>
            <h2>
              When you are dreaming the ultimate, <b>buy your Used Mercedes at Big
              Boy Toyz </b>
            </h2>
            <p>
              BIG BOY TOYZ needs no separate introduction to the country car
              enthusiasts and now Hyderabad is on the map of car worshippers and
              road lovers. We are here with all your favorite and eye-ravishing
              car options along with amazing deals and affordable prices. We
              also offer EMIs and Loans for all the amazing cars. Hence, there
              are no more excuses for the Universe to not let you take one piece
              of art home. Hide all the clocks and watches because we ain’t
              seeing the time. Real-time has arrived where you get yourself a
              second-hand and that is the moment when the time will stop. The
              car comes with a multi-function steering wheel with elite features
              like a touch screen, fog lights, alloy wheels, and an amazing
              power-adjustable exterior rearview mirror. So, is it you who just
              reached our showrooms? Welcome aboard! 
            </p>
            <h1>
              Example of <b> H1.</b>
            </h1>
            <h2>
              Example of <strong> H2.</strong>
            </h2>
            <h3>
              Example of <b> H3.</b>
            </h3>
            <h4>
              Example of <b> H4</b>.
            </h4>
            <h5>
              Example of <b> H5.</b>
            </h5>
            <h6>
              Example of <b> H6.</b>
            </h6>

            <ul>
              <li>List Item</li>
              <li>List Item</li>
              <li>List Item</li>
              <li>List Item</li>
            </ul>

            <img src="/images/blog/blog-1.webp" alt="" />

            <ol>
              <li>List Item</li>
              <li>List Item</li>
              <li>List Item</li>
              <li>List Item</li>
            </ol>
          </div>
        </div>
      </section>
      
      <RelatedBlogs />

      <BottomBanner />
    </>
  );
};

export default SingleBlogPage;
