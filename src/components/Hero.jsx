import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f4f4f9] font-sans">
        <main className="w-full max-w-4xl mx-auto relative">
          <div className="cloud-container">
            {[0, 1, 2, 3].map((index) => (
              <Image
                key={index}
                src={`/images/Group7501.svg`} // Direct path from public directory
                alt={`cloud-${index}`} // Corrected the alt attribute template literal
                width={400}
                height={520}
                className={`cloud cloud${index}`} // Corrected the className template literal
              />
            ))}
          </div>
        </main>
      </div>
      <div>
        <Image
          src={`/images/selfieboy.svg`} // Direct path from public directory
          width={450} // Adjusted width to make the boy image smaller
          height={420} // Adjusted height to maintain aspect ratio
          alt="hero-boy"
          className="absolute ml-[27.5rem] mt-[-13.2rem]"
        />
      </div>
    </>
  );
};

export default Hero;
