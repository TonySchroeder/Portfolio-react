"use client";
import TextHoverAnimation from "@/components/TextHoverAnimation";
import { zyanUtils } from "@/utils";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg main_menu">
        <div className="container main_menu_bg">
          <Link className="navbar-brand" href="/">
            <img src="images/logo.png" alt="ZYAN" className="img-fluid w-100" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-sharp fa-regular fa-bars bar_icon" />
            <i className="fa-regular fa-xmark close_icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <a className="nav-link text_hover_animaiton active" href="#">
                  <TextHoverAnimation text={"Home"} />{" "}
                  <i className="far fa-angle-down" />
                </a>
                <ul className="droap_menu">
                  <li>
                    <Link href="/">Home 1</Link>
                  </li>
                  <li>
                    <Link href="index-2">Home 2</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text_hover_animaiton" href="#about">
                  <TextHoverAnimation text={"About us"} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text_hover_animaiton" href="#service">
                  <TextHoverAnimation text={"services"} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text_hover_animaiton" href="#projects">
                  <TextHoverAnimation text={"Projects"} />
                </a>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text_hover_animaiton"
                  href="blog_list"
                >
                  <TextHoverAnimation text={"blog"} />{" "}
                  <i className="far fa-angle-down" />
                </Link>
                <ul className="droap_menu">
                  <li>
                    <Link href="blog_list">Blog List</Link>
                  </li>
                  <li>
                    <Link href="blog_details">Blog Details</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link text_hover_animaiton" href="contact">
                  <TextHoverAnimation text={"contact"} />
                </Link>
              </li>
            </ul>
            <span
              className="toggle_icon c-pointer"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
              onClick={() => setToggle(true)}
            >
              <i className="fa-sharp fa-sharp fa-regular fa-bars bar_icon-staggered" />
            </span>
          </div>
        </div>
      </nav>
      <div
        className={`offcanvas offcanvas-end ${toggle ? "show" : ""}`}
        tabIndex={-1}
        id="offcanvasRight"
      >
        <div className="offcanvas-header">
          <Link className="offcanvas-logo" href="/index-2">
            <img
              src="images/logo2.png"
              alt="ZAYAN"
              className="img-fluid w-100"
            />
          </Link>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={() => setToggle(false)}
          >
            <i className="fa-regular fa-xmark" />
          </button>
        </div>
        <div className="offcanvas-body">
          <div className="tf__design_form offcanvas_form">
            <div className="offcanvas-content-box">
              <h4 className="offcanvas_title">About us</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                tempor incididunt ut labore et magna aliqua. Ut enim ad minim
                veniam laboris.
              </p>
            </div>
            <div className="offcanvas_contact_form">
              <h4 className="offcanvas_title">Get In Touch</h4>
              <form action="#">
                <input
                  type="text"
                  placeholder="Your Name"
                  aria-autocomplete="list"
                />
                <input type="email" placeholder="Your Email" />
                <textarea rows={4} placeholder="Message" defaultValue={""} />
                <button type="submit" className="common_btn">
                  submit now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {toggle ? (
        <div
          className={`offcanvas-backdrop fade ${toggle ? "show" : ""}`}
          onClick={() => setToggle(false)}
        />
      ) : (
        ""
      )}
    </Fragment>
  );
};
export default Header;

export const OnePageHeader = () => {
  useEffect(() => {
    zyanUtils.scrollToActiveNav();
  }, []);

  return (
    <nav className="main_menu_2">
      <span className="menu_2_icon">
        <i className="fa-light fa-bars bar_icon-staggered bar_icon" />
        <i className="fa-light fa-xmark close_icon" />
      </span>
      <Link className="logo_2" href="/index-2">
        <img src="images/logo2.png" alt="ZAYAN" className="img-fluid w-100" />
      </Link>
      <ul id="list-example" className="list-group">
        <li className="active">
          <a
            className="list-group-item list-group-item-action text_hover_animaiton"
            href="#banner"
          >
            <span>
              <img
                src="svg/home-2.svg"
                alt="icon"
                className="img-fluid w-100 svg"
              />
            </span>
            <TextHoverAnimation text={"Home"} />
          </a>
        </li>
        <li>
          <a
            className="list-group-item list-group-item-action text_hover_animaiton"
            href="#about"
          >
            <span>
              <img
                src="svg/clipboard.svg"
                alt="icon"
                className="img-fluid w-100 svg"
              />
            </span>
            <TextHoverAnimation text={"About Me"} />
          </a>
        </li>
        <li>
          <a
            className="list-group-item list-group-item-action text_hover_animaiton"
            href="#service"
          >
            <span>
              <img
                src="svg/briefcase.svg"
                alt="icon"
                className="img-fluid w-100 svg"
              />
            </span>
            <TextHoverAnimation text={"Service"} />
          </a>
        </li>
        <li>
          <a
            className="list-group-item list-group-item-action text_hover_animaiton"
            href="#skills"
          >
            <span>
              <img
                src="svg/path.svg"
                alt="icon"
                className="img-fluid w-100 svg"
              />
            </span>
            <TextHoverAnimation text={"skills"} />
          </a>
        </li>
        <li>
          <a
            className="list-group-item list-group-item-action text_hover_animaiton"
            href="#portfolio"
          >
            <span>
              <img
                src="svg/messages-1.svg"
                alt="icon"
                className="img-fluid w-100 svg"
              />
            </span>
            <TextHoverAnimation text={"portfolio"} />
          </a>
        </li>
        <li>
          <a
            className="list-group-item list-group-item-action text_hover_animaiton"
            href="#blog"
          >
            <span>
              <img
                src="svg/quote-down-square.svg"
                alt="icon"
                className="img-fluid w-100 svg"
              />
            </span>
            <TextHoverAnimation text={"blog"} />
          </a>
        </li>
        <li>
          <a
            className="list-group-item list-group-item-action text_hover_animaiton"
            href="#contact"
          >
            <span>
              <img
                src="svg/user-square.svg"
                alt="icon"
                className="img-fluid w-100 svg"
              />
            </span>
            <TextHoverAnimation text={"Contact"} />
          </a>
        </li>
      </ul>
    </nav>
  );
};
