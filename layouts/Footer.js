import TextHoverAnimation from "@/components/TextHoverAnimation";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="pt_120 xs_pt_80 sm_pt_80">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div
                  className="tf__footer_content fade_right"
                  data-trigerid="footer"
                  data-stagger=".25"
                >
                  <div className="icon">
                    <div className="icon-contianer">
                      <img
                        src="svg/map.svg"
                        alt="footer"
                        className="img-fluid w-100 svg"
                      />
                    </div>
                  </div>
                  <div className="text">
                    <h3>Address</h3>
                    <p>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="tf__footer_content fade_right"
                  data-trigerid="footer"
                  data-stagger=".25"
                >
                  <div className="icon">
                    <div className="icon-contianer">
                      <img
                        src="svg/phone.svg"
                        alt="footer"
                        className="img-fluid w-100 svg"
                      />
                    </div>
                  </div>
                  <div className="text">
                    <h3>Lets talk us</h3>
                    <a href="callto:1234567890">(603) 555-0123</a>
                    <a href="callto:1234567890">(603) 555-0123</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="tf__footer_content fade_right"
                  data-trigerid="footer"
                  data-stagger=".25"
                >
                  <div className="icon">
                    <div className="icon-contianer">
                      <img
                        src="svg/envelope.svg"
                        alt="footer"
                        className="img-fluid w-100 svg"
                      />
                    </div>
                  </div>
                  <div className="text">
                    <h3>Send us email</h3>
                    <a href="mailto:example@gmail.com">
                      deanna.curtis@example.com
                    </a>
                    <a href="mailto:example@gmail.com">curtis@example.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="tf__footer_copyright">
                  <p>
                    © CodeeFly {new Date().getFullYear()} | All Rights Reserved
                  </p>
                  <ul>
                    <li>
                      <a href="#" className="text_hover_animaiton">
                        <TextHoverAnimation text={"Trams & Condition"} />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text_hover_animaiton">
                        <TextHoverAnimation text={"Privacy Policy"} />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text_hover_animaiton">
                        <TextHoverAnimation text={"Sitemap"} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

export const Footer2 = () => {
  return (
    <div className="footer_2_copyright_area mt_120 xs_mt_80">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tf__footer_copyright">
              <p>© CodeeFly {new Date().getFullYear()} | All Rights Reserved</p>
              <ul>
                <li>
                  <a href="#" className="text_hover_animaiton">
                    Trams &amp; Condition
                  </a>
                </li>
                <li>
                  <a href="#" className="text_hover_animaiton">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text_hover_animaiton">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
