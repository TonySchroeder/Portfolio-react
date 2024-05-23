"use client";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Design from "@/components/Design";
import { Home3 } from "@/components/Home";
import Marquee from "@/components/Marquee";
import Portfolio from "@/components/Portfolio";
import Serivce from "@/components/Serivce";
import Skill from "@/components/Skill";
import Testomonial from "@/components/Testomonial";
import ZyanLayout from "@/layouts/ZyanLayout";
import { useEffect } from "react";

const page = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("home_3");
  }, []);
  return (
    <ZyanLayout>
      <Home3 />
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
