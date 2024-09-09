"use client"; // Add this directive at the top if using Next.js

import React from "react";
import Image from "next/image"; // Ensure you import Image from 'next/image'
import Join from "../components/allphotos/Join.svg"; // Import your SVG file
import Link from "next/link";

const GreenBox = () => {
  const handleJoinClick = () => {
    // Add your desired action here if needed
  };

  return (
    <div
      className="green-bar"
      style={{
        width: "420px", // Adjust the width as needed
        height: "250px", // Adjust the height as needed
        backgroundColor: "rgba(0, 60, 60, 1)", // Updated color
        borderRadius: "15px", // Curve the vertices
        display: "flex", // Flexbox to center content, if needed
        justifyContent: "center",
        alignItems: "center",
        position: "relative", // Set position relative for absolute positioning of children
        marginTop: "300px", // Increase margin-top to move it down
        marginBottom: "20px", // Adjust bottom margin if needed
        marginLeft: "100px",
      }}
    >
      <main>
        <h1 className="Headingbar">Start Vybing with us!</h1>
        <h2 className="Subheading">
          "We help influencers make money by monetizing their travel
          plans,merchandise, and digital goods and many more."
        </h2>
      </main>
      <div
        style={{
          position: "absolute", // Absolute positioning
          bottom: "11px", // Adjust distance from the bottom
          left: "10px", // Adjust distance from the left
        }}
      >
        <button
          className="Join"
          onClick={handleJoinClick}
          style={{
            display: "flex", // Align the button correctly within the positioned div
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link href="/signup">
            <Image
              src={Join}
              width={110}
              height={45}
              alt="greenbutton"
              className="Joining"
            />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default GreenBox;
