"use client";
import { zyanUtils } from "@/utils";
import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    zyanUtils.customMouse();
  }, []);
  return (
    <div id="magic-cursor">
      <div id="ball" />
    </div>
  );
};
export default Cursor;
