import React from "react";
import Image from "next/image"; // Import Image from next/image

const SmallBar = () => {
  return (
    <div className="relative flex justify-center mt-4">
      <div className="w-[1200px] h-[300px] bg-white shadow-lg rounded-full"></div>
      <Image
        src="/images/Earthtravel.svg" // Direct path from public directory
        width={155}
        height={190}
        alt="travel"
        className="absolute ml-[-50rem] mt-[1.5rem]"
      />
      <Image
        src="/images/custom.svg" // Direct path from public directory
        width={242}
        height={355}
        alt="cloth"
        className="absolute ml-[-18rem] mt-[1.9rem]"
      />
      <Image
        src="/images/filmy.svg" // Direct path from public directory
        width={155}
        height={190}
        alt="shooting"
        className="absolute ml-[14rem] mt-[1.9rem]"
      />
      <Image
        src="/images/fashion.svg" // Direct path from public directory
        width={170}
        height={220}
        alt="fashion"
        className="absolute ml-[44rem] mt-[2rem]"
      />
    </div>
  );
};

export default SmallBar;
