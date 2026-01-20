"use client";
import { useState, useMemo, useRef, useEffect } from "react";

export default function EmiCalculator() {
  const carPrice = 1500000;

  const [downPayment, setDownPayment] = useState(carPrice * 0.2);
  const [interestRate, setInterestRate] = useState(12);
  const [tenure, setTenure] = useState(12);

  const downRef = useRef(null);
  const downLabelRef = useRef(null);

  const rateRef = useRef(null);
  const rateLabelRef = useRef(null);

  const tenureRef = useRef(null);
  const tenureLabelRef = useRef(null);

  const updateLabelPosition = (rangeRef, labelRef, value) => {
    if (!rangeRef.current || !labelRef.current) return;

    const range = rangeRef.current;
    const label = labelRef.current;

    const min = Number(range.min);
    const max = Number(range.max);
    const percent = (value - min) / (max - min);

    const rangeWidth = range.offsetWidth;
    const labelWidth = label.offsetWidth;

    // Realistic thumb width for modern browsers
    const thumbWidth = 16;

    // Thumb center position
    const thumbCenter = percent * (rangeWidth - thumbWidth) + thumbWidth / 2;

    // Center label on thumb
    let left = thumbCenter - labelWidth / 2;

    // Clamp so label never overflows
    const minLeft = 0;
    const maxLeft = rangeWidth - labelWidth;

    left = Math.max(minLeft, Math.min(left, maxLeft));

    label.style.left = `${left}px`;
  };

  useEffect(() => {
    updateLabelPosition(downRef, downLabelRef, downPayment);
  }, [downPayment]);

  useEffect(() => {
    updateLabelPosition(rateRef, rateLabelRef, interestRate);
  }, [interestRate]);

  useEffect(() => {
    updateLabelPosition(tenureRef, tenureLabelRef, tenure);
  }, [tenure]);

  const loanAmount = useMemo(() => carPrice - downPayment, [downPayment]);

  const emiData = useMemo(() => {
    const monthlyRate = interestRate / 12 / 100;
    const n = tenure;

    if (monthlyRate === 0) {
      const emi = loanAmount / n;
      return { emi, totalPayable: loanAmount, totalInterest: 0 };
    }

    const emi =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, n)) /
      (Math.pow(1 + monthlyRate, n) - 1);

    const totalPayable = emi * n;
    const totalInterest = totalPayable - loanAmount;

    return { emi, totalPayable, totalInterest };
  }, [loanAmount, interestRate, tenure]);

  const formatCurrency = (value) =>
    `₹${value.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;

  return (
    <section className="bg-white py-[6rem] xl:py-[13rem] overflow-hidden">
      <div className="container">
        <h2 className="text-[#222222] leading-[1.3] text-[2.6rem] [&>br]:hidden md:[&>br]:block xl:text-[4.5rem] xl:leading-[1.2] text-center">
          <b>EMI</b> Calculator
        </h2>
        <div className="max-w-[600px] xl:max-w-[1240px] mx-auto mt-[4rem] xl:mt-[6rem]">
          <div className="relative">
            <select className={dropdownStyle}>
              <option>Select Brand</option>
              <option value="BMW">BMW</option>
              <option value="Audi">Audi</option>
            </select>
            <img
              src="/images/drop-down-arrow-black.png"
              alt="Arrow"
              className="pointer-events-none absolute right-[10px] top-[1.5rem] w-[1.3rem] xl:w-[2.5rem] xl:top-[3.5rem] xl:right-[2.5rem] object-contain"
            />
          </div>

          <div className="relative mt-[1.5rem] xl:mt-[2.5rem]">
            <select className={dropdownStyle}>
              <option>Select Model</option>
              <option value="XM">XM</option>
              <option value="i7">i7</option>
            </select>
            <img
              src="/images/drop-down-arrow-black.png"
              alt="Arrow"
              className="pointer-events-none absolute right-[10px] top-[1.5rem] w-[1.3rem] xl:w-[2.5rem] xl:top-[3.5rem] xl:right-[2.5rem] object-contain"
            />
          </div>
          {/* DOWN PAYMENT */}
          <div className="mt-[4rem] relative pb-[2.5rem] xl:pb-[4.5rem] xl:mt-[6rem]">
            <div
              ref={downLabelRef}
              className={`absolute bottom-0 transition-[left] duration-100 whitespace-nowrap ${labelStyle}`}
            >
              {formatCurrency(downPayment)}
            </div>

            <div className="flex justify-between xl:mb-[1.5rem]">
              <span className={labelStyle}>Down Payment (Minimum 20%)</span>
            </div>

            <input
              ref={downRef}
              type="range"
              min={carPrice * 0.2}
              max={carPrice}
              step={10000}
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className={sliderStyle}
            />
          </div>

          {/* INTEREST RATE */}
          <div className="mt-[3rem] relative pb-[2.5rem] xl:pb-[4.5rem] xl:mt-[5rem]">
            <div
              ref={rateLabelRef}
              className={`absolute bottom-0 transition-[left] duration-100 whitespace-nowrap ${labelStyle}`}
            >
              {interestRate}%
            </div>

            <div className="flex justify-between mb-2 xl:mb-[1.5rem]">
              <span className={labelStyle}>Annual Interest Rate (%)</span>
            </div>

            <input
              ref={rateRef}
              type="range"
              min={2}
              max={20}
              step={0.5}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className={sliderStyle}
            />
          </div>

          {/* TENURE */}
          <div className="mt-[3rem] relative pb-[2.5rem] xl:pb-[4.5rem] xl:mt-[5rem]">
            <div
              ref={tenureLabelRef}
              className={`absolute bottom-0 transition-[left] duration-100 whitespace-nowrap ${labelStyle}`}
            >
              {tenure} M
            </div>

            <div className="flex justify-between mb-2 xl:mb-[1.5rem]">
              <span className={labelStyle}>Term / Period (Months)</span>
            </div>

            <input
              ref={tenureRef}
              type="range"
              min={6}
              max={36}
              step={1}
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className={sliderStyle}
            />
          </div>

          {/* RESULTS */}
          <div className="bg-[#F3F3F3] rounded-[1rem] xl:rounded-[1.5rem] px-[1.5rem] py-[2.5rem] mt-[5rem] xl:px-[5rem] xl:py-[5rem]">
            <div className="w-full xl:w-[80%] xl:max-w-[911px] xl:mx-auto flex flex-col gap-[2rem] xl:gap-[3rem]">
              <div className="flex justify-between gap-x-[1rem] items-center xl:gap-x-[3rem]">
                <span className={labelStyle}>Total Interest Payment</span>
                <span className="flex-[1] inline-block h-[1px] bg-[#9A9A9A]"></span>
                <span className={`${labelStyle} xl:min-w-[17rem]`}>
                  {formatCurrency(emiData.totalInterest)}
                </span>
              </div>

              <div className="flex justify-between gap-x-[1rem] items-center xl:gap-x-[3rem]">
                <span className={labelStyle}>Total Amount to Pay</span>
                <span className="flex-[1] inline-block h-[1px] bg-[#9A9A9A]"></span>
                <span className={`${labelStyle} xl:min-w-[17rem]`}>
                  {formatCurrency(emiData.totalPayable)}
                </span>
              </div>

              <div className="flex justify-between gap-x-[1rem] items-center text-[1.5rem] font-semibold xl:text-[2.8rem] xl:gap-x-[3rem]">
                <span>EMI Monthly Payment</span>
                <span className="flex-[1] inline-block h-[1px] bg-[#9A9A9A]"></span>
                <span className="xl:min-w-[17rem]">
                  {formatCurrency(emiData.emi)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const dropdownStyle =
  "w-full border border-[#C5C5C5] rounded-lg px-4 py-3 text-gray-500 text-[1.4rem] xl:text-[2.8rem] outline-none bg-[#F3F3F3] appearance-none xl:py-[2rem] xl:px-[3rem] xl:rounded-[1.5rem]";
const labelStyle = "text-[1.2rem] font-medium xl:text-[2rem]";
const sliderStyle =
  "w-full accent-red-500 h-[5px] bg-[#CBCBCB] border-0 outline-none shadow-none";
