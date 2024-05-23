import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Hero from "../../components/hero/Hero";
import Index from "../../components/about/index";
import Address from "../../components/Address";
import Portfolio from "../../components/portfolio/Portfolio";
import Social from "../../components/Social";
import SwitchDark from "../../components/switch/SwitchDark";

const menuItem = [
  { icon: "fa-home", menuName: "Start" },
  { icon: "fa-user", menuName: "Ich" },
  { icon: "fa-briefcase", menuName: "Portfolio" },
  { icon: "fa-envelope-open", menuName: "Kontakt" },
  // { icon: "fa-comments", menuName: "Blog" },
];

const HomeDark = () => {
  document.querySelector("body").classList.remove("rtl");

  return (
    <div className="yellow">
      <SwitchDark />

      <Tabs>
        <div className="header">
          <TabList className=" icon-menu  revealator-slideup revealator-once revealator-delay1">
            {menuItem.map((item, i) => (
              <Tab className="icon-box" key={i}>
                <i className={`fa ${item.icon}`}></i>
                <h2>{item.menuName}</h2>
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
              <Hero />
            </div>
          </TabPanel>

          <TabPanel className="about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  ÜBER <span>MICH</span>
                </h1>
                <span className="title-bg">Lebenslauf</span>
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
                Mein <span>Portfolio</span>
              </h1>
              <span className="title-bg">Projekte</span>
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
                Kontakt <span>aufnehmen</span>
              </h1>
              <span className="title-bg">Kontakt</span>
            </div>
            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="row justify-content-center">
                <div className="col-12 text-center">
                  <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                    Schreiben Sie mir!
                  </h3>
                  <p className="open-sans-font mb-5">
                    Kontaktieren Sie mich gerne. Ich bin immer offen für
                    interessante neue Projekte oder Möglichkeiten zur
                    Digitalisierung Ihrer Ideen.
                  </p>
                  <div className="mb-5">
                    <a
                      href="mailto:mail@viktor-gruenwald.de"
                      className="button"
                    >
                      <span className="button-text">Email senden</span>
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
        </div>
      </Tabs>
    </div>
  );
};

export default HomeDark;
