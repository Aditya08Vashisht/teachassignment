"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

const BackEnd = () => {
  const [influencerType, setInfluencerType] = useState("");
  const [followers, setFollowers] = useState(500000);
  const [products, setProducts] = useState(25);
  const [monthlyEarning, setMonthlyEarning] = useState(0);
  const [yearlyEarning, setYearlyEarning] = useState(0);

  const sliderRef = useRef(null);
  const productSliderRef = useRef(null);

  useEffect(() => {
    calculateEarnings();
  }, [followers, products]);

  const calculateEarnings = () => {
    let monthlyEarning = 0;
    const followersInTenThousands = followers / 10000;
    const productsPerMonth = products;

    if (followersInTenThousands <= 1) {
      monthlyEarning = 1000 * productsPerMonth;
    } else if (followersInTenThousands <= 2) {
      monthlyEarning = 2000 * productsPerMonth;
    } else {
      monthlyEarning = 3000 * productsPerMonth;
    }

    setMonthlyEarning(monthlyEarning);
    setYearlyEarning(monthlyEarning * 12);
  };

  const handleFollowersDrag = (event) => {
    const slider = sliderRef.current;
    const rect = slider.getBoundingClientRect();
    const newValue = Math.min(
      Math.max(
        1,
        Math.round(((event.clientX - rect.left) / rect.width) * 999999 + 1)
      ),
      1000000
    );
    setFollowers(newValue);
  };

  const handleProductsDrag = (event) => {
    const slider = productSliderRef.current;
    const rect = slider.getBoundingClientRect();
    const newValue = Math.min(
      Math.max(
        1,
        Math.round(((event.clientX - rect.left) / rect.width) * 99 + 1)
      ),
      100
    );
    setProducts(newValue);
  };

  const startDrag = (handler) => {
    document.addEventListener("mousemove", handler);
    document.addEventListener("mouseup", () => stopDrag(handler));
  };

  const stopDrag = (handler) => {
    document.removeEventListener("mousemove", handler);
    document.removeEventListener("mouseup", stopDrag);
  };

  const formatValue = (value) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
      return `${(value / 1000).toFixed(0)}k`;
    } else {
      return value.toString();
    }
  };

  return (
    <div className="relative bg-[#E5F0F1] h-[500px] p-6">
      <div className="flex  ">
        {/* Scroll Feature on the Left */}
        <div className="">
          <h1
            className="text-[#003C3C] text-[27px] font-bold mb-6 ml-[30rem]"
            style={{ fontFamily: "Urbanist, sans-serif" }}
          >
            ESTIMATE EARNING POTENTIAL
          </h1>
          <div className="mb-10  ml-[15rem]">
            <label className=" mb-2  ">What kind of influencer are you?</label>
            <select
              className="w-full p-2 border border-gray-300 rounded"
              value={influencerType}
              onChange={(e) => setInfluencerType(e.target.value)}
            >
              <option value="" disabled>
                Select influencer type?
              </option>
              <option value="social-media">Social Media</option>
              <option value="marketing">Marketing</option>
              <option value="all-in-one">All In One</option>
            </select>
          </div>

          <div className="mb-6 ml-[15rem]">
            <label className="block mb-2">
              How many followers do you have?
            </label>
            <div
              ref={sliderRef}
              className="relative h-2 bg-gray-200 rounded cursor-pointer"
              onMouseDown={() => startDrag(handleFollowersDrag)}
            >
              <div
                className="absolute h-2 bg-dark rounded"
                style={{ width: `${((followers - 1) / 999999) * 100}%` }}
              />
              <div
                className="absolute top-0 -mt-2 w-4 h-6 bg-dark rounded cursor-pointer"
                style={{
                  left: `${((followers - 1) / 999999) * 100}%`,
                  transform: "translateX(-50%)",
                }}
              />
            </div>
            <div className="mt-2 text-center bg-white inline-block px-4 py-2 rounded-full  ml-[20rem] justify-center">
              {formatValue(followers)}
            </div>
          </div>

          <div className="ml-[15rem]">
            <label className="block mb-2">
              How many products do you list monthly?
            </label>
            <div
              ref={productSliderRef}
              className="relative h-2 bg-gray-200 rounded cursor-pointer"
              onMouseDown={() => startDrag(handleProductsDrag)}
            >
              <div
                className="absolute h-2 bg-dark rounded"
                style={{ width: `${((products - 1) / 99) * 100}%` }}
              />
              <div
                className="absolute top-0 -mt-2 w-4 h-6 bg-dark rounded cursor-pointer"
                style={{
                  left: `${((products - 1) / 99) * 100}%`,
                  transform: "translateX(-50%)",
                }}
              />
            </div>
            <div className="mt-2 text-center bg-white inline-block px-4 py-2 rounded-full  ml-[20rem] justify-center">
              {products}
            </div>
          </div>
        </div>

        {/* Earnings on the Right */}
        <div className="ml-[10rem] flex flex-col justify-center items-end">
          <div className="text-center mb-6">
            <div className="text-lg font-semibold">Monthly Earning</div>
            <div className="text-2xl font-bold">
              ₹{monthlyEarning.toLocaleString()}
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold">Yearly Earning</div>
            <div className="text-2xl font-bold">
              ₹{yearlyEarning.toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      {/* Calculate Button - Positioned Below */}
      <div className=" mt-15 ml-[35em] bottom-6 left-1/2  t-[-20px] flex ljustify-center">
        <button className="mt-8 px-8 py-3 bg-dark text-white rounded-full text-lg font-semibold">
          Calculate
        </button>
      </div>
    </div>
  );
};

export default BackEnd;
