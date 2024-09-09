import React from "react";
import Image from "next/image";
import cloud from "../components/allphotos/Group7501.svg";
import boy from "../components/allphotos/selfieboy.svg";
import arrows from "../components/allphotos/arrows.svg";

const Hero = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f4f4f9] font-sans">
        <main className="w-full max-w-4xl mx-auto relative">
          <div className="cloud-container">
            {[0, 1, 2, 3].map((index) => (
              <Image
                key={index}
                src={cloud}
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
          src={boy}
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
