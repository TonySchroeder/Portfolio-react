"use client";
import { zyanUtils } from "@/utils";
import { useEffect } from "react";
import { Nav, Tab } from "react-bootstrap";

const Skill = () => {
  useEffect(() => {
    zyanUtils.progressBar();
  }, []);

  return (
    <section className="tf__skills pt_115 xs_pt_75 pb_70 xs_pb_30" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-xl-10 col-lg-8 m-auto mb_60">
            <div className="tf__section_heading mb_40">
              <h5 className="has-animation">Education &amp; Skill</h5>
              <h2 className="has-animation">
                Showcasing your talent <br />
                amplifying your impact
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div
              className="tf__single_skills fade_bottom"
              data-trigerid="skills"
              data-stagger=".13"
            >
              <span>2014 - 2018</span>
              <h3>Wordpress and End Developer</h3>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit sed thisnquia consequuntur magni dolores eos qui
                ratione voluptatem
              </p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div
              className="tf__single_skills fade_bottom"
              data-trigerid="skills"
              data-stagger=".25"
            >
              <span>2012 - 2014</span>
              <h3>Python Developer</h3>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit sed thisnquia consequuntur magni dolores eos qui
                ratione voluptatem
              </p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div
              className="tf__single_skills fade_bottom"
              data-trigerid="skills"
              data-stagger=".25"
            >
              <span>2005 - 2009</span>
              <h3>Kent State University</h3>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit sed thisnquia consequuntur magni dolores eos qui
                ratione voluptatem
              </p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div
              className="tf__single_skills fade_bottom"
              data-trigerid="skills"
              data-stagger=".25"
            >
              <span>2009 - 2012</span>
              <h3>User Experience Design</h3>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit sed thisnquia consequuntur magni dolores eos qui
                ratione voluptatem
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div
              className="tf__team_skills_bar_single fade_bottom"
              data-trigerid="skills"
              data-stagger=".25"
            >
              <p>HTML</p>
              <div id="bar1" className="barfiller">
                <div className="tipWrap">
                  <span className="tip" />
                </div>
                <span className="fill" data-percentage={75} />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div
              className="tf__team_skills_bar_single fade_bottom"
              data-trigerid="skills"
              data-stagger=".25"
            >
              <p>Python</p>
              <div id="bar2" className="barfiller">
                <div className="tipWrap">
                  <span className="tip" />
                </div>
                <span className="fill" data-percentage={90} />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div
              className="tf__team_skills_bar_single fade_bottom"
              data-trigerid="skills"
              data-stagger=".25"
            >
              <p>CSS</p>
              <div id="bar3" className="barfiller">
                <div className="tipWrap">
                  <span className="tip" />
                </div>
                <span className="fill" data-percentage={80} />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div
              className="tf__team_skills_bar_single fade_bottom"
              data-trigerid="skills"
              data-stagger=".25"
            >
              <p>Photoshop</p>
              <div id="bar4" className="barfiller">
                <div className="tipWrap">
                  <span className="tip" />
                </div>
                <span className="fill" data-percentage={70} />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div
              className="tf__team_skills_bar_single fade_bottom"
              data-trigerid="skills"
              data-stagger=".25"
            >
              <p>Java Script</p>
              <div id="bar5" className="barfiller">
                <div className="tipWrap">
                  <span className="tip" />
                </div>
                <span className="fill" data-percentage={70} />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div
              className="tf__team_skills_bar_single fade_bottom"
              data-trigerid="skills"
              data-stagger=".25"
            >
              <p>Figma</p>
              <div id="bar6" className="barfiller">
                <div className="tipWrap">
                  <span className="tip" />
                </div>
                <span className="fill" data-percentage={80} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skill;

export const Skill2 = () => {
  useEffect(() => {
    zyanUtils.progressBar();
  }, []);
  return (
    <section
      id="skills"
      className="tf__skills_2 pt_115 xs_pt_75 pb_120 xs_pb_80 mt_165 xs_mt_80"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-9 m-auto">
            <div className="tf__section_heading mb_30">
              <h5 className="has-animation">MY Skills</h5>
              <h2 className="has-animation">
                Crafting Stories through Design and Imagination
              </h2>
            </div>
          </div>
        </div>
        <Tab.Container defaultActiveKey={"download"}>
          <div className="row">
            <div className="col-xxl-8 col-xl-10 m-auto">
              <Nav
                as={"ul"}
                className="nav nav-pills mb_30"
                id="pills-tab"
                role="tablist"
              >
                <Nav.Item as={"ul"}>
                  <Nav.Link as={"button"} eventKey={"download"}>
                    Download Cv <i className="fa-solid fa-arrow-down-to-line" />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as={"ul"}>
                  <Nav.Link eventKey={"Education"} as={"button"}>
                    Education
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as={"ul"}>
                  <Nav.Link eventKey={"Biography"} as={"button"}>
                    Biography
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as={"ul"}>
                  <Nav.Link eventKey={"Experience"} as={"button"}>
                    Experience
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Tab.Content className="tab-content">
                <Tab.Pane eventKey={"download"} className="tab-pane fade">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <div
                        className="tf__single_skill_2 fade_bottom"
                        data-trigerid="skills"
                      >
                        <h3>Creative Agency</h3>
                        <h2>Framer Designer &amp; Developer</h2>
                        <h4>2019 - Present</h4>
                        <p>
                          Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit sed thisnquia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt
                        </p>
                        <div className="tf__team_skills_bar_single">
                          <p>Performence</p>
                          <div id="bar1" className="barfiller">
                            <div className="tipWrap">
                              <span className="tip" />
                            </div>
                            <span className="fill" data-percentage={80} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div
                        className="tf__single_skill_2 fade_bottom"
                        data-trigerid="skills"
                      >
                        <h3>Apple Technology</h3>
                        <h2>Web Application Manager</h2>
                        <h4>2009 - 2012</h4>
                        <p>
                          Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit sed thisnquia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt
                        </p>
                        <div className="tf__team_skills_bar_single">
                          <p>Performence</p>
                          <div id="bar2" className="barfiller">
                            <div className="tipWrap">
                              <span className="tip" />
                            </div>
                            <span className="fill" data-percentage={90} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div
                        className="tf__single_skill_2 fade_bottom"
                        data-trigerid="skills"
                      >
                        <h3>Softech Agency</h3>
                        <h2>Wordpress and End Developer</h2>
                        <h4>2014 - 2018</h4>
                        <p>
                          Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit sed thisnquia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt
                        </p>
                        <div className="tf__team_skills_bar_single">
                          <p>Performence</p>
                          <div id="bar3" className="barfiller">
                            <div className="tipWrap">
                              <span className="tip" />
                            </div>
                            <span className="fill" data-percentage={75} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div
                        className="tf__single_skill_2 fade_bottom"
                        data-trigerid="skills"
                      >
                        <h3>Kent State University</h3>
                        <h2>Master Degree Of information Technology</h2>
                        <h4>2005 - 2009</h4>
                        <p>
                          Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit sed thisnquia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt
                        </p>
                        <div className="tf__team_skills_bar_single">
                          <p>Performence</p>
                          <div id="bar4" className="barfiller">
                            <div className="tipWrap">
                              <span className="tip" />
                            </div>
                            <span className="fill" data-percentage={70} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey={"Education"} className="tab-pane fade">
                  <div className="row education">
                    <div className="col-xl-6 col-lg-6">
                      <div
                        className="tf__single_skill_2 fade_bottom"
                        data-trigerid="skills"
                      >
                        <h3>MBA</h3>
                        <h2>University of Dhaka</h2>
                        <h4>2009 - 2012</h4>
                        <p>
                          Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit sed thisnquia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div
                        className="tf__single_skill_2 fade_bottom"
                        data-trigerid="skills"
                      >
                        <h3>BBA</h3>
                        <h2>University of Dhaka</h2>
                        <h4>2009 - 2012</h4>
                        <p>
                          Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit sed thisnquia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div
                        className="tf__single_skill_2 fade_bottom"
                        data-trigerid="skills"
                      >
                        <h3>HSC</h3>
                        <h2>Govt Bangla College</h2>
                        <h4>2009 - 2012</h4>
                        <p>
                          Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit sed thisnquia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div
                        className="tf__single_skill_2 fade_bottom"
                        data-trigerid="skills"
                      >
                        <h3>SSC</h3>
                        <h2>Govt Bangla College</h2>
                        <h4>2009 - 2012</h4>
                        <p>
                          Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit sed thisnquia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt
                        </p>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey={"Biography"} className="tab-pane fade">
                  <div className="row education">
                    <div className="col-xl-6 col-lg-6">
                      <div
                        className="tf__single_skill_2 fade_bottom"
                        data-trigerid="skills"
                      >
                        <h3>MBA</h3>
                        <h2>University of Dhaka</h2>
                        <h4>2009 - 2012</h4>
                        <p>
                          Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit sed thisnquia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div
                        className="tf__single_skill_2 fade_bottom"
                        data-trigerid="skills"
                      >
                        <h3>BBA</h3>
                        <h2>University of Dhaka</h2>
                        <h4>2009 - 2012</h4>
                        <p>
                          Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit sed thisnquia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div
                        className="tf__single_skill_2 fade_bottom"
                        data-trigerid="skills"
                      >
                        <h3>HSC</h3>
                        <h2>Govt Bangla College</h2>
                        <h4>2009 - 2012</h4>
                        <p>
                          Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit sed thisnquia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div
                        className="tf__single_skill_2 fade_bottom"
                        data-trigerid="skills"
                      >
                        <h3>SSC</h3>
                        <h2>Govt Bangla College</h2>
                        <h4>2009 - 2012</h4>
                        <p>
                          Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit sed thisnquia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt
                        </p>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey={"Experience"} className="tab-pane fade">
                  <div className="row education">
                    <div className="col-xl-6 col-lg-6">
                      <div
                        className="tf__single_skill_2 fade_bottom"
                        data-trigerid="skills"
                      >
                        <h3>MBA</h3>
                        <h2>University of Dhaka</h2>
                        <h4>2009 - 2012</h4>
                        <p>
                          Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit sed thisnquia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div
                        className="tf__single_skill_2 fade_bottom"
                        data-trigerid="skills"
                      >
                        <h3>BBA</h3>
                        <h2>University of Dhaka</h2>
                        <h4>2009 - 2012</h4>
                        <p>
                          Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit sed thisnquia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div
                        className="tf__single_skill_2 fade_bottom"
                        data-trigerid="skills"
                      >
                        <h3>HSC</h3>
                        <h2>Govt Bangla College</h2>
                        <h4>2009 - 2012</h4>
                        <p>
                          Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit sed thisnquia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div
                        className="tf__single_skill_2 fade_bottom"
                        data-trigerid="skills"
                      >
                        <h3>SSC</h3>
                        <h2>Govt Bangla College</h2>
                        <h4>2009 - 2012</h4>
                        <p>
                          Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit sed thisnquia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt
                        </p>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </div>
        </Tab.Container>
      </div>
    </section>
  );
};
