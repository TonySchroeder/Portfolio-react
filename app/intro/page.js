import Cursor from "@/layouts/Cursor";
import Link from "next/link";
import { Fragment } from "react";
const page = () => {
  return (
    <Fragment>
      <div className="intro_page">
        <div className="intro_bg" data-img-url="img/hero/4.jpg" />
        <div className="intro_title">
          <span className="image_logo">
            <img src="images/logo.png" alt="" />
            <span className="version">V 1.0</span>
          </span>
          <span>Modern CV / Resume / Portfolio React NextJS Template</span>
        </div>
        <div className="demo">
          <div className="row justify-content-center">
            <div className="col-sm-6">
              <Link
                href="/"
                target="_blank"
                className="demo-item"
                data-cursor="Multipage <br> Demo"
              >
                <img src="/images/demo/01_home.png" alt="" />
                <h3 className="mini">Multipage Demo</h3>
              </Link>
            </div>
            <div className="col-sm-6">
              <Link
                href="index-2"
                target="_blank"
                className="demo-item"
                data-cursor="Onepage <br> Demo"
              >
                <img src="/images/demo/02_home.png" alt="" />
                <h3 className="mini">Onepage Demo</h3>
              </Link>
            </div>
          </div>
          <div className="coming">
            <h3>More are coming soon...</h3>
          </div>
        </div>
      </div>
      <Cursor />
    </Fragment>
  );
};
export default page;
