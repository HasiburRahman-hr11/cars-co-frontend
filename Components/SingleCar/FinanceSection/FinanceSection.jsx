"use client";
import { useEffect, useState } from "react";
import AOS from "aos";

const FinanceSection = () => {
  const [carPrice, setCarPrice] = useState(4900000);
  const [downPaymentAmount, setDownPaymentAmount] = useState(
    Math.round((50 / 100) * 4900000),
  );
  const [downPaymentPercent, setDownPaymentPercent] = useState(50);
  const [annualInterest, setAnnualInterest] = useState(10);
  const [termPeriod, setTermPeriod] = useState(12);
  const [monthlyEmi, setMonthlyEmi] = useState(0);
  const [totalAmountToPay, setTotalAmountToPay] = useState(0);
  const [totalInterestToPay, setTotalInterestToPay] = useState(0);

  const downPaymentPercentChange = (e) => {
    setDownPaymentPercent(e.target.value);
    setDownPaymentAmount(Math.round((e.target.value / 100) * carPrice));
  };
  const annualInterestRateChange = (e) => {
    setAnnualInterest(e.target.value);
  };
  const termPeriodChange = (e) => {
    setTermPeriod(e.target.value);
  };

  //   Calculate EMI
  useEffect(() => {
    const loanAmount = carPrice - downPaymentAmount;
    const monthlyInterestRate = annualInterest / (12 * 100); // Convert annual interest rate to a monthly interest rate
    const emi =
      (loanAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, termPeriod)) /
      (Math.pow(1 + monthlyInterestRate, termPeriod) - 1);
    const totalAmountToPay = emi * termPeriod;
    const totalInterestToPay = totalAmountToPay - loanAmount;
    setMonthlyEmi(emi.toFixed(2));
    setTotalAmountToPay(totalAmountToPay.toFixed(2));
    setTotalInterestToPay(totalInterestToPay.toFixed(2));
  }, [downPaymentAmount, annualInterest, termPeriod]);

  const getTrackBackground = (value, min, max) => {
    const percent = ((value - min) / (max - min)) * 100;
    return {
      background: `linear-gradient(
      to right,
      #ef4444 0%,
      #ef4444 ${percent}%,
      #CBCBCB ${percent}%,
      #CBCBCB 100%
    )`,
    };
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      className="bg-black py-24 lg:py-36 xl:py-[15rem]"
      id="singleEmiCalculator"
    >
      <div className="container">
        <div className="lg:flex lg:flex-row-reverse lg:items-center lg:justify-between max-w-[600px] mx-auto lg:max-w-full">
          <div
            className="bg-[#1D1D1D] px-[2rem] py-[4rem] rounded-[1.5rem] lg:w-[45%] xl:w-[40%] xl:rounded-[3rem] xl:py-[6rem] xl:px-[4rem]"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <div className="text-center text-white">
              <h2 className=" leading-[1.3] text-[2.6rem] [&>br]:hidden md:[&>br]:block xl:text-[4.5rem] xl:leading-[1.2]">
                Get Your Ride <b>Financed Today!</b>
              </h2>
              <p className="mt-[1rem] xl:text-[2.2rem] xl:mt-[2rem]">
                Easy and hassle free Emi options available.
              </p>
            </div>
            <div className="relative text-white  text-center mx-auto px-5 py-8 mt-16 border border-[#ffffff80] rounded-[1rem] max-w-[24rem] lg:w-max lg:rounded-[0.6rem] lg:mt-10 lg:py-5 lg:px-8 xl:mt-12 xl:max-w-[30rem]">
              <p className="absolute w-max bg-[#1D1D1D] px-[1.5rem] left-[50%] top-[-1rem] translate-x-[-50%] text-xl lg:top-[-0.8rem] xl:text-[2rem] before:absolute before:content-[''] before:w-[5px] before:h-[5px] before:rounded-[50%] before:bg-[#ffffff80] before:top-[50%] before:translate-y-[-50%] before:left-0 after:absolute after:content-[''] after:w-[5px] after:h-[5px] after:rounded-[50%] after:bg-[#ffffff80] after:top-[50%] after:translate-y-[-50%] after:right-0 xl:top-[-1.5rem]">
                EMI Starts @
              </p>
              <h5 className="text-[1.5rem] xl:text-[2.1rem] font-medium xl:mt-[2rem]">
                ₹ {monthlyEmi}/-{" "}
                <span className="font-light text-[#888888]">Per Month</span>
              </h5>
            </div>

            {/* Down Payment Slider */}
            <div>
              <div className="flex justify-between flex-wrap items-center text-white mt-20 3xl:mt-24">
                <p className="text-[1.2rem] xl:text-[1.6rem]">
                  Down Payment (Minimum 20%)
                </p>
                <p className="text-[1.2rem] xl:text-[1.6rem]">
                  ₹ {downPaymentAmount}
                </p>
              </div>
              <div className="mt-8">
                <input
                  type="range"
                  name=""
                  id=""
                  min="20"
                  max="80"
                  step="1"
                  className="w-full h-[3px] block emiSlider cursor-pointer"
                  value={downPaymentPercent}
                  onChange={downPaymentPercentChange}
                  style={getTrackBackground(downPaymentPercent, 20, 80)}
                />
                <div className="relative overflow-hidden emiPercentBox h-[3rem] [&>span]:top-[1rem] lg:[&>span]:pt-[0.7rem]">
                  <span className="absolute text-white font-light emiPercent text-[1.2rem] xl:text-[1rem] leftOne left-0 lg:h-[4rem]">
                    10%
                  </span>
                  <span className="absolute text-white font-light emiPercent text-[1.2rem] xl:text-[1rem] leftTwo left-[14%]">
                    20%
                  </span>
                  <span className="absolute text-white font-light emiPercent text-[1.2rem] xl:text-[1rem] leftThree left-[28%]">
                    30%
                  </span>
                  <span className="absolute text-white font-light emiPercent text-[1.2rem] xl:text-[1rem] leftFour left-[41.5%]">
                    40%
                  </span>
                  <span className="absolute text-white font-light emiPercent text-[1.2rem] xl:text-[1rem] leftFive left-[55%] sm:left-[55.7%]">
                    50%
                  </span>
                  <span className="absolute text-white font-light emiPercent text-[1.2rem] xl:text-[1rem] leftSix left-[68.5%] sm:left-[69.5%]">
                    60%
                  </span>
                  <span className="absolute text-white font-light emiPercent text-[1.2rem] xl:text-[1rem] leftSeven left-[82%] sm:left-[83%]">
                    70%
                  </span>
                  <span className="absolute text-white font-light emiPercent text-[1.2rem] xl:text-[1rem] leftEight left-[unset] right-0">
                    80%
                  </span>
                </div>
              </div>
            </div>

            {/* Interest Rate Slider */}
            <div className="mt-10 xl:mt-12">
              <div className="flex justify-between flex-wrap items-center text-white">
                <p className="text-[1.2rem] xl:text-[1.6rem]">
                  Annual Interest Rate (%)
                </p>
                <p className="text-[1.2rem] xl:text-[1.6rem]">
                  {annualInterest}
                </p>
              </div>
              <div className="mt-8 mb-16 lg:mb-0 lg:mt-5">
                <input
                  type="range"
                  name=""
                  id=""
                  min="7"
                  max="15"
                  step="0.1"
                  className="w-full h-[3px] block emiSlider cursor-pointer"
                  value={annualInterest}
                  onChange={annualInterestRateChange}
                  style={getTrackBackground(annualInterest, 7, 15)}
                />
              </div>
            </div>

            {/* Term Period Slider */}
            <div className="mt-10 xl:mt-12">
              <div className="flex justify-between flex-wrap items-center text-white ">
                <p className="text-[1.2rem] xl:text-[1.6rem]">
                  Term/Period (Month)
                </p>
                <p className="text-[1.2rem] xl:text-[1.6rem]">{termPeriod}</p>
              </div>
              <div className="mt-8 mb-16 lg:mb-0 lg:mt-5">
                <input
                  type="range"
                  name=""
                  id=""
                  min="1"
                  max="84"
                  step="1"
                  className="w-full h-[3px] block emiSlider cursor-pointer"
                  value={termPeriod}
                  onChange={termPeriodChange}
                  style={getTrackBackground(termPeriod, 1, 84)}
                />
              </div>
            </div>
          </div>

          <div
            className="block w-full mt-[3rem] lg:mt-0 lg:w-[50%] xl:w-[57%] xl:rounded-[3rem]"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <img
              src="/images/single-car/finance-thumb.webp"
              className="w-full object-cover block rounded-[1rem] xl:h-[65rem] xl:rounded-[3rem]"
              alt="Car Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinanceSection;
