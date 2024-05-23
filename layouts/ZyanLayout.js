"use client";
import Subscribe from "@/components/Subscribe";
import EmbedPopup from "@/components/popup/EmbedPopup";
import ImageView from "@/components/popup/ImageView";
import { zyanUtils } from "@/utils";
import { Fragment, useEffect } from "react";
import Cursor from "./Cursor";
import Footer from "./Footer";
import Header from "./Header";
const ZyanLayout = ({ children }) => {
  useEffect(() => {
    zyanUtils.headingRevel();
    zyanUtils.scrollAnimation();
    zyanUtils.imgToSVG();
  }, []);
  return (
    <Fragment>
      <EmbedPopup />
      <ImageView />
      <Header />
      {children}
      <Subscribe />
      <Footer />
      <Cursor />
    </Fragment>
  );
};
export default ZyanLayout;
