"use client"; // Add this directive at the top if using Next.js

import React from "react";
import Image from "next/image"; // Import Next.js Image component
import Image1 from "../components/allphotos/image1.svg";
import Image2 from "../components/allphotos/image2.svg";
import Image3 from "../components/allphotos/image3.svg";
import Image4 from "../components/allphotos/image4.svg";
import NewImage from "../components/allphotos/line.svg"; // Import your new image

const Tutorial = () => {
  return (
    <div className="tutorial-gallery flex p-8 relative">
      {/* New Image Container */}
      <div className="new-image-container mr-[-5rem]">
        <Image
          src={NewImage}
          width={150}
          height={600}
          alt="New Image"
          className="object-cover"
        />
      </div>

      {/* Container for Existing Images */}
      <div className="images-container flex flex-col space-y-6">
        {/* Image 1 */}
        <div className="image-wrapper">
          <Image src={Image1} width={450} height={550} alt="Image 1" />
        </div>
        {/* Image 2 */}
        <div className="image-wrapper">
          <Image src={Image2} width={450} height={550} alt="Image 2" />
        </div>
        {/* Image 3 */}
        <div className="image-wrapper">
          <Image src={Image3} width={450} height={550} alt="Image 3" />
        </div>
        {/* Image 4 */}
        <div className="image-wrapper">
          <Image src={Image4} width={450} height={550} alt="Image 4" />
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
