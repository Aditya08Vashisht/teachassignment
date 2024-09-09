import React from "react";
import Image from "next/image";

const Arrow = () => {
  return (
    <div className="flex flex-col items-center mt-12">
      {[1, 4, 5].map((index) => (
        <Image
          key={index}
          src={`/images/arrows.svg`} // Direct path from public directory
          alt={`arrow-${index}`}
          width={400}
          height={520}
          className={`arrow arrow${index}`}
        />
      ))}
      <p className="first justify-center">
        What is <br /> VYB Store?
      </p>
      <div className="second justify-center ">
        <div className="India">India's</div>
        <div className="partofsecond"> first marketplace for</div>
        <div className="Influencers">Influencers</div>
      </div>
      <p className="third justify-center">
        Earn via listing your <br /> products
      </p>
      <p className="fourth justify-center">
        Commission <br />
        & <br />
        On-boarding Fee
      </p>
      <Image
        src={`/images/happygirl.svg`} // Direct path from public directory
        alt="girl"
        width={200}
        height={250}
        className="girl"
      />
      <Image
        src={`/images/bulb.svg`} // Direct path from public directory
        alt="bulb"
        width={90}
        height={130}
        className="bulb"
      />
      <Image
        src={`/images/coins.svg`} // Direct path from public directory
        alt="coin"
        width={50}
        height={100}
        className="coin"
      />
      <Image
        src={`/images/one.svg`} // Direct path from public directory
        alt="numberone"
        width={50}
        height={100}
        className="one"
      />
      <Image
        src={`/images/zero.svg`} // Direct path from public directory
        alt="numberzero"
        width={55}
        height={110}
        className="zero"
      />
      <Image
        src={`/images/Yay.svg`} // Direct path from public directory
        alt="hurrah"
        width={40}
        height={80}
        className="Yay"
      />
      <Image
        src={`/images/dollar.svg`} // Direct path from public directory
        alt="dollar"
        width={90}
        height={100}
        className="dollar"
      />
    </div>
  );
};

export default Arrow;
