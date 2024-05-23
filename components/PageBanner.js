import Link from "next/link";
import TextHoverAnimation from "./TextHoverAnimation";

const PageBanner = ({ pageName }) => {
  return (
    <section
      className="tf__breadcrumb banner"
      style={{ background: "url(images/bg/breadcrumb.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tf__breadcrum_text">
              <h1>{pageName}</h1>
              <ul className="page-breadcrumb">
                <li>
                  <Link href="/" className="text_hover_animaiton">
                    <TextHoverAnimation text={"Home"} />
                  </Link>
                </li>
                <li>
                  <a href="#">{pageName}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PageBanner;
