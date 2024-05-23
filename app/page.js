"use client";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Design from "@/components/Design";
import Home1 from "@/components/Home";
import Marquee from "@/components/Marquee";
import Portfolio from "@/components/Portfolio";
import Serivce from "@/components/Serivce";
import Skill from "@/components/Skill";
import Testomonial from "@/components/Testomonial";
import ZyanLayout from "@/layouts/ZyanLayout";

const page = () => {
  return (
    <ZyanLayout>
      <Home1 />
      <Serivce />
      <About />
      <Design />
      <Skill />
      <Portfolio />
      <Testomonial />
      <Marquee />
      <Blog />
    </ZyanLayout>
  );
};
export default page;
