"use client"; // Add this directive at the top if using Next.js

import React from "react";
import Image from "next/image"; // Import Next.js Image component

const Tutorial = () => {
  return (
    <div className="tutorial-gallery flex p-8 relative">
      {/* New Image Container */}
      <div className="new-image-container mr-[-5rem]">
        <Image
          src="/images/line.svg" // Updated path
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
          <Image
            src="/images/image1.svg" // Updated path
            width={450}
            height={550}
            alt="Image 1"
          />
        </div>
        {/* Image 2 */}
        <div className="image-wrapper">
          <Image
            src="/images/image2.svg" // Updated path
            width={450}
            height={550}
            alt="Image 2"
          />
        </div>
        {/* Image 3 */}
        <div className="image-wrapper">
          <Image
            src="/images/image3.svg" // Updated path
            width={450}
            height={550}
            alt="Image 3"
          />
        </div>
        {/* Image 4 */}
        <div className="image-wrapper">
          <Image
            src="/images/image4.svg" // Updated path
            width={450}
            height={550}
            alt="Image 4"
          />
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
