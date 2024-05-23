import React, { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import AllRoutes from "./router/AllRoutes";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedCursor from "react-animated-cursor";
import { ToastContainer } from "react-toastify";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <>
      <AnimatedCursor
        innerSize={25}
        outerSize={44}
        color="82, 33, 230"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
      ><img src="/TSlogo.png" style={{ height: '25px' }} /></AnimatedCursor>
      <ScrollToTop />
      <AllRoutes />
      <ToastContainer />
    </>
  );
};

export default App;
