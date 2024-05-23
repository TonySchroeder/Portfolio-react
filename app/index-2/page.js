"use client";
import { About2 } from "@/components/About";
import { Blog2 } from "@/components/Blog";
import Contact from "@/components/Contact";
import { Home2 } from "@/components/Home";
import Marquee from "@/components/Marquee";
import { Portfolio2 } from "@/components/Portfolio";
import { Serivce2 } from "@/components/Serivce";
import { Skill2 } from "@/components/Skill";
import EmbedPopup from "@/components/popup/EmbedPopup";
import ImageView from "@/components/popup/ImageView";
import Cursor from "@/layouts/Cursor";
import { Footer2 } from "@/layouts/Footer";
import { OnePageHeader } from "@/layouts/Header";
import { zyanUtils } from "@/utils";
import { Fragment, useEffect } from "react";
const page = () => {
  useEffect(() => {
    zyanUtils.headingRevel();
    zyanUtils.scrollAnimation();
    zyanUtils.imgToSVG();
  }, []);
  useEffect(() => {
    document.querySelector("body").classList.add("home_2");
  }, []);
  return (
    <Fragment>
      <EmbedPopup />
      <ImageView />
      <OnePageHeader />
      <div className="main">
        <div
          data-bs-spy="scroll"
          data-bs-target="#list-example"
          data-bs-smooth-scroll="true"
          className="scrollspy-example"
          tabIndex={0}
        >
          <Home2 />
          <About2 />
          <Serivce2 />
          <Skill2 />
          <Portfolio2 />
          <Marquee />
          <Blog2 />
          <Contact />
          <Footer2 />
          <Cursor />
        </div>
      </div>
    </Fragment>
  );
};
export default page;
