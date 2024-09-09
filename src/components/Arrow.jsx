import React from "react";
import Image from "next/image";
import arrows from "../components/allphotos/arrows.svg";
import girl from "../components/allphotos/happygirl.svg";
import bulb from "../components/allphotos/bulb.svg";
import coin from "../components/allphotos/coins.svg";
import dollar from "../components/allphotos/dollar.svg";
import one from "../components/allphotos/one.svg";
import zero from "../components/allphotos/zero.svg";
import Yay from "../components/allphotos/Yay.svg";

const Arrow = () => {
  return (
    <div className="flex flex-col items-center mt-12">
      {[1, 4, 5].map((index) => (
        <Image
          key={index}
          src={arrows}
          alt={`arrow-${index}`} // Corrected the alt attribute using template literals
          width={400}
          height={520}
          className={`arrow arrow${index}`} // Corrected the className using template literals
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
      <Image src={girl} alt="girl" width={200} height={250} className="girl" />
      <Image src={bulb} alt="bulb" width={90} height={130} className="bulb" />
      <Image src={coin} alt="coin" width={50} height={100} className="coin" />
      <Image
        src={one}
        alt="numberone"
        width={50}
        height={100}
        className="one"
      />
      <Image
        src={zero}
        alt="numberzero"
        width={55}
        height={110}
        className="zero"
      />
      <Image src={Yay} alt="hurrah" width={40} height={80} className="Yay" />
      <Image
        src={dollar}
        alt="dollar"
        width={90}
        height={100}
        className="dollar"
      />
    </div>
  );
};

export default Arrow;
