const Portfolio = () => {
  return (
    <section className="tf__portfolio mt_120 xs_mt_80" id="projects">
      <div className="container">
        <div className="row">
          <div className="col-xl-10 col-lg-9 mb_30">
            <div className="tf__section_heading">
              <h5 className="has-animation">my recent Portfolio</h5>
              <h2 className="has-animation">
                Elevate your brand to new <br />
                heights with our portfolio expertise
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-8 col-md-6">
            <a
              href="https://www.youtube.com/watch?v=B-ytMSuwbf8"
              className="tf__portfolio_item play_btn"
              data-cursor="Watch <br> video"
            >
              <img
                src="images/portfolio/1.jpg"
                alt="portfolio"
                className="img-fluid w-100"
              />
              <div className="text">
                <h4>sheet metal bending</h4>
                <p>youtube</p>
              </div>
            </a>
          </div>
          <div className="col-xl-4 col-md-6">
            <a
              className="tf__portfolio_item play_btn"
              href="https://vimeo.com/132528823"
              data-cursor="Watch <br> video"
            >
              <img
                src="images/portfolio/2.jpg"
                alt="portfolio"
                className="img-fluid w-100"
              />
              <div className="text">
                <h4>sheet metal bending</h4>
                <p>Vimeo</p>
              </div>
            </a>
          </div>
          <div className="col-xl-6 col-md-6">
            <a
              href="https://w.soundcloud.com/player/?visual=true&url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F159967086&show_artwork=true&maxwidth=1020&maxheight=1000&auto_play=1"
              className="tf__portfolio_item play_btn"
              data-cursor="Audio <br> sound"
            >
              <img
                src="images/portfolio/3.jpg"
                alt="portfolio"
                className="img-fluid w-100"
              />
              <div className="text">
                <h4>sheet metal bending</h4>
                <p>soundcloud</p>
              </div>
            </a>
          </div>
          <div className="col-xl-6 col-md-6">
            <a
              href="images/portfolio/4.jpg"
              className="tf__portfolio_item image_popup"
              data-cursor="View <br> Image"
            >
              <img
                src="images/portfolio/4.jpg"
                alt="portfolio"
                className="img-fluid w-100"
              />
              <div className="text">
                <h4>sheet metal bending</h4>
                <p>Image</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;

export const Portfolio2 = () => {
  return (
    <section
      id="portfolio"
      className="tf__portfolio tf__portfolio_2 mt_120 xs_mt_80"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-10 col-lg-9 mb_30">
            <div className="tf__section_heading">
              <h5 className="has-animation">my recent Portfolio</h5>
              <h2 className="has-animation">
                Elevate your brand to new heights with our portfolio expertise
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-sm-6">
            <a
              href="https://www.youtube.com/watch?v=B-ytMSuwbf8"
              className="tf__portfolio_item play_btn"
              data-cursor="Watch <br> video"
            >
              <img
                src="images/portfolio/5.png"
                alt="portfolio"
                className="img-fluid w-100"
              />
              <div className="text">
                <h4>sheet metal bending</h4>
                <p>youtube</p>
              </div>
            </a>
          </div>
          <div className="col-xl-6 col-sm-6">
            <a
              className="tf__portfolio_item play_btn"
              href="https://vimeo.com/132528823"
              data-cursor="Watch <br> video"
            >
              <img
                src="images/portfolio/6.png"
                alt="portfolio"
                className="img-fluid w-100"
              />
              <div className="text">
                <h4>sheet metal bending</h4>
                <p>Vimeo</p>
              </div>
            </a>
          </div>
          <div className="col-xl-4 col-sm-6">
            <a
              href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              className="tf__portfolio_item play_btn"
              data-cursor="Audio <br> sound"
            >
              <img
                src="images/portfolio/7.png"
                alt="portfolio"
                className="img-fluid w-100"
              />
              <div className="text">
                <h4>sheet metal bending</h4>
                <p>soundcloud</p>
              </div>
            </a>
          </div>
          <div className="col-xl-4 col-sm-6">
            <a
              href="images/portfolio/8.png"
              className="tf__portfolio_item image_popup"
              data-cursor="View <br> Image"
            >
              <img
                src="images/portfolio/8.png"
                alt="portfolio"
                className="img-fluid w-100"
              />
              <div className="text">
                <h4>sheet metal bending</h4>
                <p>Image</p>
              </div>
            </a>
          </div>
          <div className="col-xl-4 col-sm-6">
            <a
              href="#details-popup"
              className="tf__portfolio_item details"
              data-cursor="Details <br> View"
            >
              <img
                src="images/portfolio/9.png"
                alt="portfolio"
                className="img-fluid w-100"
              />
              <div className="text">
                <h4>sheet metal bending</h4>
                <p>Modalbox</p>
              </div>
            </a>
            <div className="mfp-fade mfp-hide" id="details-popup">
              <div className="content">
                <div className="img">
                  <img src="images/portfolio/9.png" alt="" />
                </div>
                <div className="des">
                  <span className="category">Modalbox</span>
                  <h4 className="popup_title">Mobile Application</h4>
                  <p>
                    We live in a world where we need to move quickly and iterate
                    on our ideas as flexibly as possible. Building mockups
                    strikes the ideal balance between true-life representation
                    of the end product and ease of modification.
                  </p>
                  <div className="details_quot_text">
                    <p>
                      ished fact that a reader will be distrol acted bioii
                      the.ished fact that a reader .
                    </p>
                    <h4>By Insuzu Litarnit</h4>
                  </div>
                  <p>
                    Mockups are useful both for the creative phase of the
                    project - for instance when you're trying to figure out your
                    user flows or the proper visual hierarchy - and the
                    production phase when they will represent the target
                    product. Making mockups a part of your creative and
                    development process allows you to quickly and easily ideate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
