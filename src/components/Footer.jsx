// Footer.jsx

"use client"; // Add this directive at the top

import React from "react";
import Image from "next/image";
import icon from "../components/allphotos/icon.svg";

const Footer = () => {
  return (
    <footer
      className="footer-container"
      style={{
        background: "#f4f4f9",
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px", // Adjust padding as needed
      }}
    >
      <h2
        className="footer-heading"
        style={{
          fontSize: "2rem", // Adjust size as needed
          fontWeight: "bold",
          fontFamily: "Urbanist, sans-serif",
          color: "#003C3C", // Background color
          // color: "#FFFFFF", // Text color to ensure contrast
          padding: "10px 20px", // Padding for better spacing
          borderRadius: "8px", // Optional: Rounded corners for the heading
          marginBottom: "10px", // Spacing between heading and subheading
        }}
      >
        FREQUENTLY ASKED QUESTIONS
      </h2>
      <p
        className="footer-subheading"
        style={{
          fontSize: "1rem", // Adjust size as needed
          fontFamily: "Urbanist, sans-serif",
          textAlign: "center",
          size: "18px",
          maxWidth: "800px", // Adjust width as needed
          marginBottom: "30px", // Spacing between subheading and bar
        }}
      >
        Quick answers to questions you may have. Can't find what you're looking
        for? <br /> Check out our full documentation.
      </p>
      {/* Small Bars */}
      {[
        "How much does it cost to set up a store?",
        "What kind of digital products can I sell?",
        "Do I need technical skills to use the platform?",
        "Is there a limit to the number of products I can list?",
        "How do I receive payments for my sales?",
        "Can I sell internationally on this marketplace?",
        "What support and resources are available for sellers?",
        "Is there a review process for uploaded products?",
      ].map((text, index) => (
        <div
          key={index}
          className={`footer-bar${index + 1}`}
          style={{
            width: "730px",
            height: "48px",
            background: "#E5F0F1",
            padding: "14px 20px",
            marginBottom: "20px", // Adjust gap between bar and bottom content
            borderRadius: "16px", // Border radius added
            position: "relative", // Positioning for the icon
            display: "flex",
            alignItems: "center",
          }}
        >
          {text}
          <button>
            <Image
              src={icon}
              alt="icon"
              style={{
                position: "absolute",
                right: "20px", // Adjust distance from the right edge
                width: "24px", // Adjust size as needed
                height: "24px", // Adjust size as needed
                top: "15px",
              }}
            />
          </button>
        </div>
      ))}
      {/* Button Placeholder */}
      {/* <button>
        <img src="your-image-source" alt="Button" />
      </button> */}
    </footer>
  );
};

export default Footer;
