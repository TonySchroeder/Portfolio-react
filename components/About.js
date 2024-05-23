import Counter from "./Counter";

const About = () => {
  return (
    <section className="tf__about pt_140 xs_pt_80" id="about">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xxl-7 col-lg-6 col-xl-6">
            <div className="tf__section_heading pb_80 xs_pb_50">
              <h5 className="has-animation">About Me</h5>
              <h2 className="has-animation">
                Transforming visions into exceptional portfolios
              </h2>
            </div>
            <div className="tf__about_text">
              <p>
                Nemo design enim ipsam voluptatem quim voluptas sit aspernatur
                aut odit auting fugit sed thisnquia consequuntur magni dolores
                eos designer heresm qui ratione
              </p>
              <a className="common_btn" href="#">
                Download Cv <i className="fa-solid fa-arrow-down-to-line" />
              </a>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-6 col-xl-6">
            <div className="tf__about_img fade_right" data-trigerid="about">
              <img
                src="images/about_img.jpg"
                alt="ZYAN"
                className="img-fluid w-100"
              />
              <div className="tf__about_img_text">
                <i className="fas fa-chart-pie-alt" />
                <div className="tf__about_content">
                  <h4>Daily Activity</h4>
                  <p>Loream is ispam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;

export const About2 = () => {
  return (
    <section id="about" className="tf__about_2 pt_130 xs_pt_80">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-9">
            <div className="tf__section_heading mb_40">
              <h5 className="has-animation">ABOUT Me</h5>
              <h2 className="has-animation">
                Crafting stories through design and innovation
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-xl-6 col-lg-6">
            <div className="tf__about_text_2">
              <ul>
                <li>
                  <div className="top fade_bottom" data-trigerid="about">
                    <div className="img">
                      <img
                        src="images/icon/about_1.png"
                        alt="about"
                        className="img-fluid w-100"
                      />
                    </div>
                    <div>
                      <h3>My Ambition</h3>
                      <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit sed thisnquia consequuntur magni
                        dolores eos qui ratione voluptatem sequi nesciunt. Neque
                        porro quisquam est, qui dolorem ipsum quia dolor sit
                        amet
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="top fade_bottom" data-trigerid="about">
                    <div className="img">
                      <img
                        src="images/icon/about_2.png"
                        alt="about"
                        className="img-fluid w-100"
                      />
                    </div>
                    <div>
                      <h3>My Purpose</h3>
                      <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit sed thisnquia consequuntur magni
                        dolores eos qui ratione voluptatem sequi nesciunt. Neque
                        porro quisquam est, qui dolorem ipsum quia dolor sit
                        amet
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="tf__about_img tf__about_img_2">
              <img
                src="images/about_img_2.jpg"
                alt="ZYAN"
                className="img-fluid w-100"
              />
              <div className="tf__about_img_text">
                <i className="fa-sharp fa-solid fa-award" />
                <h4>
                  <Counter end={15} />+ <span>Years Of Experience</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
