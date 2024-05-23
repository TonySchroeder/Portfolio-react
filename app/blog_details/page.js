"use client";
import PageBanner from "@/components/PageBanner";
import Sidebar from "@/components/Sidebar";
import ZyanLayout from "@/layouts/ZyanLayout";

const page = () => {
  return (
    <ZyanLayout>
      <PageBanner pageName={"Blog Details"} />
      {/*================================
  BLOG LIST PAGE START
    =================================*/}
      <section
        className="tf__blog_list_page pt_120 xs_pt_80 pb_120 xs_pb_80"
        id="blogs"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <div className="tf__blog_details_area">
                <div className="tf__blog_details_img">
                  <img
                    src="images/blog/thumbnail.jpg"
                    alt="blog"
                    className="img-fluid w-100"
                  />
                </div>
                <ul className="blog_details_header">
                  <li>By Insuzu Litarnit</li>
                  <li>
                    <span>Standard </span>
                  </li>
                </ul>
                <div className="tf__blog_details_text">
                  <h2 className="has-animation">
                    Don’t be beholden to rules in situation.
                  </h2>
                  <p>
                    Aliquam eros justo, posuere loborti viverra laoreet matti
                    ullamcorper posuere viverra Aliquam eros justo, posuere
                    lobortis, viverra laoreet augue mattis fermentum ullamcorper
                    viverra laoreets Aliquam eros justo, posuere loborti viverra
                    laoreet matti ullamcorper posuere viverra .Aliquam eros
                    justo posuere lobortis non designe Aliquam eros
                    justo,posuere loborti viverra laoreet matti ullamcorper
                    posuere viverra
                  </p>
                  <p>
                    Aliquam eros justo, posuere loborti viverra laoreet matti
                    ullamcorper posuere viverra Aliquam eros justo, posuere
                    lobortis, viverra laoreet augue mattis fermentum ullamcorper
                    viverra laoreet Aliquam eros justo, posuere loborti viverra
                    laoreet matti ullamcorper posuere viverra .Aliquam eros
                    justo, posuere lobortis
                  </p>
                  <p>
                    Aliquam eros justo, posuere loborti viverra laoreet matti
                    ullamcorper desi posuere viverra .Aliquam eros justos iom
                    posuere lobortis, viverra laoreet augue mattis fermentum
                    ullamcorper viverra laoreet Aliquam eros justo dposuere
                    loborti viverra laoreet matti ullamcorper posuere viverra
                    .Aliquam eros justo, posuere lobortis designernon desinjei
                    Aliquam eros justo, posuere loborti viverra laoreet matti
                    ullamcorper posuere viverra .Aliquam eros justo, posuere
                    lobortis, viverra laoreet augue mattis fermentum ullamcorper
                    viverra
                  </p>
                  <div className="details_quot_text">
                    <p>
                      ished fact that a reader will be distrol acted bioii
                      the.ished fact that a reader will be distrol acted laoreet
                      Aliquam fact that a reader will be distrol laoreet Aliquam
                      fact that a reader.
                    </p>
                    <h4>By Insuzu Litarnit</h4>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-md-6">
                      <div className="details_center_img">
                        <img
                          src="images/blog/details_big_1.jpg"
                          alt="blig"
                          className="img-fluid w-100"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-md-6">
                      <div className="details_center_img">
                        <img
                          src="images/blog/details_big_2.jpg"
                          alt="blig"
                          className="img-fluid w-100"
                        />
                      </div>
                    </div>
                  </div>
                  <h2>Analyzing financial</h2>
                  <p>
                    Aliquam eros justo, posuere loborti viverra laoreet matti
                    ullamcorper posuere viverra Aliquam eros justo, posuere
                    lobortis, viverra laoreet augue mattis fermentum ullamcorper
                    viverra laoreet Aliquam eros justo posuere loborti viverra
                    laoreet matti ullamcorper posuere viverra .Aliquam eros
                    justo, posuere lobortis non desig sAliquam eros justo,osuere
                    loborti viverra laoreet matti ullamcorper posuere viverra .
                  </p>
                  <p>
                    Aliquam eros justo, posuere loborti viverra laoreet matti
                    ullamcorper posuere viverra .Aliquam eros justo, posuere
                    lobortis, viverra laoreet augue mattis fermentum ullamcorper
                    viverra laoreet Aliquam eros justo, posuere loborti viverra
                    laoreet matti ullamcorper posuere viverra .Aliquam eros
                    justo, posuere lobortis n.
                  </p>
                </div>
                <div className="details_blog_share">
                  <h4>By Stanio lainto</h4>
                  <div className="share_icon">
                    <ul className="social_share d-flex flex-wrap">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-behance" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </li>
                    </ul>
                    <ul className="tags d-flex flex-wrap">
                      <li>
                        <a href="#">Interiour</a>
                      </li>
                      <li>
                        <a href="#">Ux design</a>
                      </li>
                      <li>
                        <a href="#">Graphics</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <ul className="next_prev_button">
                  <li className="previous_post">
                    <a href="#" data-cursor="Previous <br> post">
                      <p>Previous post</p>
                      <h5>Your New Cars Perform ance</h5>
                    </a>
                  </li>
                  <li className="next_post">
                    <a href="#" data-cursor="next <br> post">
                      <p>Next post</p>
                      <h5>worth of standard and like</h5>
                    </a>
                  </li>
                </ul>
                <div className="tf__details_bloger">
                  <h3>Stanio lainto</h3>
                  <span>September 16, 2023</span>
                  <p>
                    ished fact that a reader will be distrol acted bioii
                    the.ished fact that a reader will be distrol acted laoreet
                    Aliquam fact that a reader will be distrol .
                  </p>
                  <a href="#">Reply</a>
                  <div className="img">
                    <img
                      src="images/testimonial/1.jpg"
                      alt="bloger"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
                <div className="tf__input_comment mt_90">
                  <h2 className="has-animation">Leave a comment</h2>
                  <form action="#">
                    <div className="row">
                      <div className="col-xl-6">
                        <input type="text" placeholder="Your Name" />
                      </div>
                      <div className="col-xl-6">
                        <input type="text" placeholder="Your Email" />
                      </div>
                      <div className="col-xl-12">
                        <textarea
                          rows={6}
                          placeholder="Write your Message here"
                          defaultValue={""}
                        />
                        <button className="common_btn" type="submit">
                          Post comment now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <Sidebar />
          </div>
        </div>
      </section>
      {/*================================
  BLOG LIST PAGE END
    =================================*/}
    </ZyanLayout>
  );
};
export default page;
