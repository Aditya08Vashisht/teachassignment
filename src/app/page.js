import Arrow from "@/components/Arrow";
import Hero from "@/components/Hero";
import SmallBar from "@/components/SmallBar";
import BlueBar from "@/components/BlueBar";
import GreenBox from "@/components/GreenBox";
import Tutorial from "@/components/Tutorial";
import BackEnd from "@/components/BackEnd";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Arrow />
      <SmallBar />
      <BlueBar />
      <GreenBox />
      <Tutorial />
      <BackEnd />
      <Footer />
    </div>
  );
}
