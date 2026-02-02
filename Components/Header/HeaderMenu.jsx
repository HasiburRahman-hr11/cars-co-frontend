import Link from "next/link";

const mainMenuLinks = [
  {
    title: "Explore Collections",
    link: "/collections",
  },
  {
    title: "List Cars",
    link: "/list-cars",
  },
  {
    title: "Why Us",
    link: "/why-us",
  },
  {
    title: "About Us",
    link: "/about-us",
  },
  {
    title: "Contact Us",
    link: "/contact",
  },
];

const vehicleTypes = [
  {
    title: "Bike",
    link: "#",
  },
  {
    title: "Convertible",
    link: "#",
  },
  {
    title: "Coupe",
    link: "#",
  },
  {
    title: "Hatchback",
    link: "#",
  },
  {
    title: "MUV-MPV",
    link: "#",
  },
  {
    title: "Sedan",
    link: "#",
  },
  {
    title: "Sports",
    link: "#",
  },
  {
    title: "SUV",
    link: "#",
  },
];

const HeaderMenu = ({ openMenu = false, setOpenMenu }) => {
  return (
    <div
      className={`menu-box fixed w-full h-full transition-all duration-500 ${
        openMenu ? "left-0" : "left-[-120%]"
      } top-0 bg-black min-w-[100vw] min-h-[100vh] text-white z-100 xl:left-[unset] ${
        openMenu ? "xl:right-0" : "xl:right-[-120%]"
      }`}
    >
      <div className="menu-inner relative px-[30px] py-[30px] pt-[80px] xl:px-[50px]">
        <span
          className="close-menu inline-block w-[22px] absolute top-[25px] right-[25px] cursor-pointer xl:right-[50px] xl:top-[50px] xl:w-[25px] group"
          onClick={() => setOpenMenu(false)}
        >
          <img
            src="/images/close-menu-icon.png"
            alt="Close Menu"
            className="w-full object-contain transition-all duration-300 group-hover:scale-[1.2]"
          />
        </span>

        <div className="menu-wrapper h-full overflow-y-auto max-h-[100vh] no-scrollbar pb-[150px]">
          <div className="primary-menu-box xl:pt-[30px]">
            <ul className="primary-menu">
              {mainMenuLinks.map((menuItem, index) => (
                <li
                  key={index}
                  className="my-[5px] transition-all duration-500 hover:pl-[1rem]"
                >
                  <Link
                    href={menuItem.link}
                    className="flex items-center justify-between text-[2.2rem] font-[300] relative py-[10px] xl:text-[4.5rem] group xl:pr-[1rem]"
                    onClick={() => setOpenMenu(false)}
                  >
                    <span>{menuItem.title}</span>
                    <img
                      src="/images//menu-arrow.png"
                      alt=""
                      className="object-contain w-[2.2rem] xl:w-[3.2rem] transition-all duration-300 xl:group-hover:scale-[1.2]"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bottom-menu-box mt-[4rem] pt-[3rem] border-t border-[#333333] lg:pb-[30px] xl:flex xl:justify-between xl:border-[#1A1A1A] xl:mt-0 xl:pt-[100px] xl:items-end">
            <div className="xl:flex xl:w-max">
              <ul className="bottom-menu-1 xl:w-max mr-[80px]">
                {vehicleTypes.slice(0 , 4).map((menuItem, index) => (
                  <li key={index}>
                    <Link
                      href={menuItem.link}
                      className="block py-[5px] text-[#D7D6D4] text-[1.5rem] xl:text-[2rem] transition-all duration-300 xl:hover:text-white xl:hover:translate-x-2"
                      onClick={() => setOpenMenu(false)}
                    >
                      {menuItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="bottom-menu-2 xl:w-max mr-[80px]">
                {vehicleTypes.slice(4 , 8).map((menuItem, index) => (
                  <li key={index}>
                    <Link
                      href={menuItem.link}
                      className="block py-[5px] text-[#D7D6D4] text-[1.5rem] xl:text-[2rem] transition-all duration-300 xl:hover:text-white xl:hover:translate-x-2"
                      onClick={() => setOpenMenu(false)}
                    >
                      {menuItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-[4rem] pt-[3rem] border-t border-[#333333] xl:w-max xl:border-0">
              <ul className="social-links xl:flex xl:items-center xl:justify-end">
                <li className="xl:mr-[15px]">
                  <a
                    href="https://www.instagram.com/cars_co.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-[5px] text-[#7E797D] text-[1.5rem] xl:text-[1.8rem] transition-all duration-300 xl:hover:text-white"
                    onClick={() => setOpenMenu(false)}
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
