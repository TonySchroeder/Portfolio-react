"use client";
import HeadingAnimation from "./HeadingAnimation";

const HomeText = () => {
  return (
    <div className="tf__banner_text">
      <h1>
        <b>Hi, I'm ZYAN! Creative </b>
        {/* Zoom, push, rotate-1, loading-bar, slide, letters rotate-3, letters rotate-3, letters scale*/}
        <HeadingAnimation animationType={"letters scale"} />
      </h1>
      <p>
        I'm a passionate UI/UX designer with a mission to create delightful and
        intuitive digital experiences. With a strong foundation in design
        principles and a keen eye for detail, I specialize in translating
        complex ideas into user-friendly interfaces that captivate and engage.
      </p>
      <ul>
        <li>
          <a className="common_btn" href="#">
            Download Cv <i className="fa-solid fa-arrow-down-to-line" />
          </a>
        </li>
        <li>
          <a
            className="banner_video_btn play_btn text_hover_animaiton"
            href="https://www.youtube.com/watch?v=B-ytMSuwbf8"
          >
            <i className="fa-sharp fa-solid fa-circle-play" /> Watch the Video
          </a>
        </li>
      </ul>
    </div>
  );
};

const Home1 = () => {
  return (
    <section
      className="tf__banner banner"
      style={{ background: "url(images/bg/banner.jpg)" }}
    >
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-6 col-lg-8">
            <HomeText />
          </div>
          <div className="col-xl-5 col-lg-4">
            <div className="tf__banner_img">
              <div className="img">
                <img
                  src="images/banner_img_1.png"
                  alt="ZYAN"
                  className="img-fluid w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home1;

export const Home2 = () => {
  return (
    <section
      id="banner"
      className="tf__banner_2 banner"
      style={{ background: "url(images/bg/banner_bg2.png)" }}
    >
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xxl-6 col-md-9 col-lg-7">
            <HomeText />
          </div>
        </div>
      </div>
    </section>
  );
};
export const Home3 = () => {
  return (
    <section
      className="tf__banner banner"
      style={{
        background: "url(images/bg/banner.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container">
        <div className="tf__banner_text text-center">
          <h1>
            <b>
              Hello, I'm a<br />
            </b>
            {/* zoom, push, rotate-1, loading-bar, slide, letters rotate-3, letters rotate-3, letters scale*/}
            <HeadingAnimation animationType={"zoom"} />
          </h1>
          <p>based in Los Angeles, California.</p>
          <ul className="justify-content-center">
            <li>
              <a className="common_btn" href="#">
                Download Cv <i className="fa-solid fa-arrow-down-to-line" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
