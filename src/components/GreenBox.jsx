"use client"; // Add this directive at the top if using Next.js

import React from "react";
import Image from "next/image"; // Ensure you import Image from 'next/image'
import Link from "next/link";

const GreenBox = () => {
  const handleJoinClick = () => {
    // Add your desired action here if needed
  };

  return (
    <div className="w-[420px] h-[250px] bg-[#003C3C] rounded-[15px] flex justify-center items-center relative mt-[300px] mb-[20px] ml-[100px]">
      <main>
        <h1 className="text-white text-2xl font-bold">Start Vybing with us!</h1>
        <h2 className="text-white mt-2">
          "We help influencers make money by monetizing their travel plans,
          merchandise, and digital goods and many more."
        </h2>
      </main>
      <div className="absolute bottom-2 left-2">
        <button
          className="flex justify-center items-center"
          onClick={handleJoinClick}
        >
          <Link href="/signup">
            <Image
              src="/images/Join.svg" // Direct path from the public directory
              width={110}
              height={45}
              alt="green button"
              className="object-contain"
            />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default GreenBox;
