import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Hero from "../../components/hero/Hero";
import Index from "../../components/about/index";
import Address from "../../components/Address";
import Portfolio from "../../components/portfolio/Portfolio";
import Social from "../../components/Social";
import SwitchDark from "../../components/switch/SwitchDark";
import Contact from "../../components/Contact";

const menuItem = [
  { icon: "fa-home", menuName: "Start" },
  { icon: "fa-user", menuName: "About me" },
  { icon: "fa-briefcase", menuName: "Portfolio" },
  { icon: "fa-envelope-open", menuName: "Contact" },
];

const HomeDark = () => {
  const [isDark, setIsDark] = useState(false);
  document.querySelector("body").classList.remove("rtl");

  return (
    <div className="yellow">
      <SwitchDark isDark={isDark} setIsDark={setIsDark} />

      <Tabs>
        <div className="header">
          <TabList className=" icon-menu  revealator-slideup revealator-once revealator-delay1">
            {menuItem.map((item, i) => (
              <Tab className="icon-box" key={i}>
                <i className={`fa ${item.icon}`}></i>
                <h2 style={{ whiteSpace: 'nowrap' }}>{item.menuName}</h2>
              </Tab>
            ))}
          </TabList>
        </div>

        <div className="tab-panel_list">
          <TabPanel className="home ">
            <div
              className="container-fluid main-container container-home p-0 "
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="color-block d-none d-lg-block"></div>
              <Hero isDark={isDark} />
            </div>
          </TabPanel>

          <TabPanel className="about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  About <span className="aqua-shadow">me</span>
                </h1>
                <span className="title-bg">Résumé</span>

              </div>

              <Index />
            </div>
          </TabPanel>

          <TabPanel className="portfolio professional">
            <div
              className="title-section text-left text-sm-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                My <span className="aqua-shadow">portfolio</span>
              </h1>
              <span className="title-bg">Projects</span>
            </div>

            <Portfolio />
          </TabPanel>

          <TabPanel className="contact">
            <div
              className="title-section text-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                Get in <span className="aqua-shadow">touch</span>
              </h1>
              <span className="title-bg">Contact</span>
            </div>
            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="row justify-content-center">
                <div className="col-12 text-center mWidth764">
                  <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                    Write to me!
                  </h3>
                  <p className="open-sans-font mb-5">
                    I look forward to hearing from you! Whether you have any questions, would like to discuss a collaboration or just want to say hello, please don't hesitate to contact me. You can reach me using the information below. I will get back to you as soon as possible.
                  </p>
                  <div className="mb-5">
                    <a
                      href="mailto:tony.schroeder@gmx.de"
                      className="button"
                    >
                      <span className="button-text">Send email</span>
                      <span className="button-icon fa fa-send"></span>
                    </a>
                  </div>
                </div>

                <div className="col-12 col-md-10 col-lg-8">
                  <div className="row text-center">
                    <div className="col-12 mb-5">
                      <Address />
                    </div>
                  </div>
                </div>

                <div className="col-12 text-center">
                  <Social />
                </div>
              </div>
            </div>
          </TabPanel>

          {/* <TabPanel className="contact">
            <div
              className="title-section text-left text-sm-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                get in <span className="aqua-shadow">touch</span>
              </h1>
              <span className="title-bg">contact</span>
            </div>
            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="row">
                Left Side Starts
                <div className="col-12 col-lg-4">
                  <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                    Write to me!
                  </h3>
                  <p className="open-sans-font mb-4">
                    I look forward to hearing from you! Whether you have any questions, would like to discuss a collaboration or just want to say hello, please don't hesitate to contact me. You can reach me using the information below. I will get back to you as soon as possible.
                  </p>
                  <Address />
                  <Social />
                </div>
                <div className="col-12 col-lg-8">
                  <Contact />
                </div>
              </div>
            </div>
          </TabPanel > */}
          {/* <TabPanel className="blog">
            <div
              className="title-section text-left text-sm-center "
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                mein <span>blog</span>
              </h1>
              <span className="title-bg">posts</span>
            </div>
            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="row pb-50">
                <Blog />
              </div>
            </div>
          </TabPanel> */}
        </div >
      </Tabs >
    </div >
  );
};

export default HomeDark;


