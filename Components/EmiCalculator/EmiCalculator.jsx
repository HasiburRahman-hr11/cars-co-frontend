"use client"
import { useState, useMemo } from "react";

export default function EmiCalculator() {
  const carPrice = 1500000; // example car price ₹15,00,000

  const [downPayment, setDownPayment] = useState(carPrice * 0.2);
  const [interestRate, setInterestRate] = useState(12);
  const [tenure, setTenure] = useState(12);

  const loanAmount = useMemo(() => {
    return carPrice - downPayment;
  }, [downPayment]);

  const emiData = useMemo(() => {
    const monthlyRate = interestRate / 12 / 100;
    const n = tenure;

    if (monthlyRate === 0) {
      const emi = loanAmount / n;
      return {
        emi,
        totalPayable: loanAmount,
        totalInterest: 0,
      };
    }

    const emi =
      (loanAmount *
        monthlyRate *
        Math.pow(1 + monthlyRate, n)) /
      (Math.pow(1 + monthlyRate, n) - 1);

    const totalPayable = emi * n;
    const totalInterest = totalPayable - loanAmount;

    return {
      emi,
      totalPayable,
      totalInterest,
    };
  }, [loanAmount, interestRate, tenure]);

  const formatCurrency = (value) =>
    `₹${value.toLocaleString("en-IN", {
      maximumFractionDigits: 2,
    })}`;

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold text-center mb-10">
        EMI Calculator
      </h2>

      <div className="space-y-6">
        <select className="w-full border rounded-lg px-4 py-3 text-gray-500">
          <option>Select Brand</option>
        </select>

        <select className="w-full border rounded-lg px-4 py-3 text-gray-500">
          <option>Select Model</option>
        </select>

        <div>
          <div className="flex justify-between mb-2 text-sm">
            <span>Down Payment (Minimum 20%)</span>
            <span className="font-medium">
              {formatCurrency(downPayment)}
            </span>
          </div>
          <input
            type="range"
            min={carPrice * 0.2}
            max={carPrice}
            step={10000}
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value))}
            className="w-full accent-red-500"
          />
        </div>

        <div>
          <div className="flex justify-between mb-2 text-sm">
            <span>Annual Interest Rate (%)</span>
            <span className="font-medium">{interestRate}%</span>
          </div>
          <input
            type="range"
            min={5}
            max={20}
            step={0.5}
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full accent-red-500"
          />
        </div>

        <div>
          <div className="flex justify-between mb-2 text-sm">
            <span>Term / Period (Months)</span>
            <span className="font-medium">{tenure}</span>
          </div>
          <input
            type="range"
            min={6}
            max={84}
            step={6}
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
            className="w-full accent-red-500"
          />
        </div>

        <div className="bg-gray-100 rounded-xl p-6 mt-8 space-y-4">
          <div className="flex justify-between text-sm">
            <span>Total Interest Payment</span>
            <span className="font-medium">
              {formatCurrency(emiData.totalInterest)}
            </span>
          </div>

          <div className="flex justify-between text-sm">
            <span>Total Amount to Pay</span>
            <span className="font-medium">
              {formatCurrency(emiData.totalPayable)}
            </span>
          </div>

          <div className="flex justify-between text-lg font-semibold pt-3 border-t">
            <span>EMI Monthly Payment</span>
            <span>
              {formatCurrency(emiData.emi)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
