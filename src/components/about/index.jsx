import React from "react";
import Achievements from "./Achievements";
import Education from "./Education";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";
import cv from "../../assets/Tony-Schroeder-CV.pdf";
import heroImgMobile from "../../assets/img/hero/img-mobile.jpg";

const aboutMe = () => {
  return (
    <section className="main-content ">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-5 col-12">
            <div className="row">
              <div className="col-12">
                <h3 className="text-uppercase custom-title mb-0 ft-wt-600">
                  persönliches
                </h3>
              </div>

              <div className="col-12 d-block d-sm-none">
                <img
                  src={heroImgMobile}
                  className="img-fluid main-img-mobile"
                  alt="about avatar"
                />
              </div>

              <div className="col-12">
                <PersonalInfo />
              </div>

              <div className="col-12 mt-1">
                <a className="button" href={cv} download>
                  <span className="button-text">Lebenslauf herunterladen</span>
                  <span className="button-icon fa fa-download"></span>
                </a>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
            <Achievements />
          </div>
        </div>

        <hr className="separator" />

        <div className="row">
          <div className="col-12">
            <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">
              Fähigkeiten
            </h3>
          </div>
          <Skills />
        </div>

        <hr className="separator mt-1" />

        <div className="row">
          <div className="col-12">
            <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
              Berufserfahrung <span>&</span> Ausbildung
            </h3>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="resume-box">
              <Experience />
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="resume-box">
              <Education />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default aboutMe;
