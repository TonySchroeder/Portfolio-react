import React, { useState } from "react";
import Modal from "react-modal";
import heroImg from "../../assets/img/hero/Tony.jpg";
import heroImgMobile from "../../assets/img/hero/Tony_mobile.jpg";
import cancelImg from "../../assets/img/cancel.svg";
import Index from "../../components/about/index";

const heroContent = {
  heroImage: heroImg,
  heroMobileImage: heroImgMobile,
  heroTitleName: "viktor grünwald",
  heroDesignation: "software entwickler",
  heroDescriptions:
    "Ich bin ein deutsch- und englischsprachiger Software-Entwickler mit Fokus auf benutzerfreundliches Webdesign. Meine Leidenschaft ist es, modernste Technologien durch intuitive Benutzeroberflächen für alle zugänglich zu machen und sie in ihrer Arbeit oder ihrem Alltag zu bereichern",
  heroBtn: "mehr über mich",
};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + heroContent.heroImage
              })`,
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <img
              src={heroContent.heroMobileImage}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
            />
            <h1 className="text-uppercase poppins-font">
              Ich bin {heroContent.heroTitleName}.
              <span>{heroContent.heroDesignation}</span>
            </h1>
            <p className="open-sans-font">{heroContent.heroDescriptions}</p>
            <button className="button" onClick={toggleModalOne}>
              <span className="button-text">{heroContent.heroBtn}</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button>
          </div>
        </div>
      </div>

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
                  ÜBER <span>MICH</span>
                </h1>
                <span className="title-bg">Lebenslauf</span>
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
