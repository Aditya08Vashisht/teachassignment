import React from "react";
import Image from "next/image"; // Import Image from next/image
import earth from "../components/allphotos/Earthtravel.svg";
import custom from "../components/allphotos/custom.svg";
import filmy from "../components/allphotos/filmy.svg";
import fashion from "../components/allphotos/fashion.svg";

const SmallBar = () => {
  return (
    <div className="small-bar-container flex justify-center mt-4">
      <div className="w-[1200px] h-[300px] bg-white shadow-lg rounded-full"></div>
      <Image
        src={earth}
        width={155}
        height={190}
        alt="travel"
        className="absolute ml-[-50rem] mt-[1.5rem]"
      />
      <Image
        src={custom}
        width={242}
        height={355}
        alt="cloth"
        className="absolute ml-[-18rem] mt-[1.9rem]"
      />
      <Image
        src={filmy}
        width={155}
        height={190}
        alt="shooting"
        className="absolute ml-[14rem] mt-[1.9rem]"
      />
      <Image
        src={fashion}
        width={170}
        height={220}
        alt="shooting"
        className="absolute ml-[44rem] mt-[2rem]"
      />
    </div>
  );
};

export default SmallBar;
