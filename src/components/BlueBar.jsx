"use client";

import React from "react";
import Image from "next/image";
import Itinerary from "../components/allphotos/Itinerary.svg";
import button from "../components/allphotos/button.svg";
import Indiagate from "../components/allphotos/Indiagate.svg";
import rightarrow from "../components/allphotos/rightarrow.svg";
import leftarrow from "../components/allphotos/leftarrow.svg";
import pricing from "../components/allphotos/pricing.svg";
import More from "../components/allphotos/More.svg";

const BlueBar = () => {
  const handleItineraryClick = () => {};
  const handleButtonClick = () => {};
  const handleRightArrowClick = () => {};
  const handleLeftArrowClick = () => {};
  const handlePricingClick = () => {};
  const handleMoreClick = () => {};

  return (
    <div className="flex justify-center h-[700px] mt-10 relative">
      <div className="bg-[#E5F0F1] w-full max-w-7xl p-6 relative rounded-lg">
        {/* Products Title */}
        <h1 className="text-5xl font-bold absolute top-5 left-5 font-urbanist">
          Products
        </h1>

        {/* Itinerary and Button Images on the Top Right */}
        <div className="flex space-x-4 absolute top-5 right-5">
          <button onClick={handleItineraryClick}>
            <Image
              src={Itinerary}
              width={155}
              height={190}
              alt="box"
              className="object-contain"
            />
          </button>
          <button onClick={handleButtonClick}>
            <Image
              src={button}
              width={155}
              height={190}
              alt="demo"
              className="object-contain"
            />
          </button>
        </div>

        {/* Center Section: Delhi Itinerary Text and Image */}
        <div className="absolute top-[220px] left-10 flex flex-col items-start">
          {/* Delhi Itinerary Title */}
          <h2 className="text-4xl font-bold font-urbanist7 ml-[7rem] ">
            Delhi Itinerary
          </h2>

          {/* Paragraph aligned right to the title */}
          <p className="font-urbanist max-w-lg ml-[7rem] mt-2">
            Delhi, India's capital territory, is a massive metropolitan area in
            the country's north. In Old Delhi, a neighborhood dating to the
            1600s, stands the imposing Mughal-era Red Fort, a symbol of India,
            and the sprawling Jama Masjid mosque, whose courtyard accommodates
            25,000 people.
          </p>

          {/* India Gate Image */}
        </div>

        <div className="ml-auto">
          <Image
            src={Indiagate}
            width={340}
            height={240}
            alt="monu"
            className="object-contain ml-[45rem] mt-[10rem]"
          />
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={handleRightArrowClick}
          className="absolute top-[250px] right-5"
        >
          <Image
            src={rightarrow}
            width={100}
            height={75}
            alt="right arrow"
            className="object-contain"
          />
        </button>

        {/* Left Arrow Button with Rotation */}
        <button
          onClick={handleLeftArrowClick}
          className="absolute top-[250px] left-5  transform rotate-180"
        >
          <Image
            src={leftarrow}
            width={100}
            height={75}
            alt="left arrow"
            className="object-contain"
          />
        </button>

        {/* Bottom Left: Pricing and More Images */}
        <div className="absolute flex space-x-4 bottom-5 ml-[7rem] mb-[10rem] left-5">
          <button onClick={handlePricingClick}>
            <Image
              src={pricing}
              width={95}
              height={52}
              alt="pricing"
              className="object-contain"
            />
          </button>
          <button onClick={handleMoreClick}>
            <Image
              src={More}
              width={85}
              height={45}
              alt="more"
              className="object-contain"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlueBar;
