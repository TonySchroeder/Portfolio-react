import React, { useState } from "react";
import Modal from "react-modal";
import heroImgDark from "../../assets/img/hero/TonyDark.jpg";
import heroImgLight from "../../assets/img/hero/TonyLight.jpg";
import heroImgDarkMobile from "../../assets/img/hero/TonyDark_mobile.jpg";
import heroImgLightMobile from "../../assets/img/hero/TonyLight_mobile.jpg";
import cancelImg from "../../assets/img/cancel.svg";
import Index from "../../components/about/index";

const heroContent = {
  heroImageDark: heroImgDark,
  heroImageLight: heroImgLight,
  heroMobileImageDark: heroImgDarkMobile,
  heroMobileImageLight: heroImgLightMobile,
  heroTitleName: "Tony",
  heroDesignation: "Software Developer",
  heroDescriptions:
    "I am a passionate front-end developer with experience in developing modern and responsive web applications. With in-depth knowledge of HTML, CSS and TypeScript as well as frameworks like Next.js and React, I create user-friendly and powerful interfaces. My attention to detail and commitment to clean, maintainable code drives me to develop innovative solutions and to continuously learn. Let's make the really cool stuff happen!",
  aboutMeBtn: "More about me",
};

const Hero = ({ isDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block hero-img"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + (isDark ? heroContent.heroImageLight : heroContent.heroImageDark)
              })`,
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details text-center text-lg-start">
          <div>
            <img
              src={isDark ? heroContent.heroMobileImageLight : heroContent.heroMobileImageDark}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
            />
            <h1 className="text-uppercase poppins-font">
              Ich bin <b className="aqua-shadow">{heroContent.heroTitleName}</b>.
              <span>{heroContent.heroDesignation}</span>
            </h1>
            <p className="open-sans-font">{heroContent.heroDescriptions}</p>
            <button className="button" onClick={toggleModalOne} >
              <span className="button-text">{heroContent.aboutMeBtn}</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button>

          </div>
        </div>
      </div >

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal dark hero"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <img src={cancelImg} alt="close icon" />
          </button>

          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  About <span className="aqua-shadow">me</span>
                </h1>
                <span className="title-bg">Résumé</span>
              </div>
              <Index />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Hero;
