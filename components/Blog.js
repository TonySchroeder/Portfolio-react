import Link from "next/link";

const Blog = () => {
  return (
    <section className="tf__blog pt_125 xs_pt_75 pb_40 xs_pb_0" id="blogs">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-9 mb_30">
            <div className="tf__section_heading">
              <h5 className="has-animation">My blog</h5>
              <h2 className="has-animation">
                Unlocking the potential of your personal brand
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-md-6">
            <div className="tf__slingle_blog fade_left" data-trigerid="blogs">
              <Link
                href="blog_details"
                className="tf__blog_img"
                data-cursor="read <br> more"
              >
                <img
                  src="images/blog/1.jpg"
                  alt="blog"
                  className="img-fluid w-100"
                />
              </Link>
              <div className="tf__blog_text">
                <span>31 December,2022</span>
                <ul>
                  <li>
                    <i className="fa-sharp fa-solid fa-circle-user" /> By admin
                  </li>
                  <li>
                    <i className="fa-sharp fa-solid fa-comments" /> Comments
                    (05)
                  </li>
                </ul>
                <Link href="blog_details">
                  The standard personal My portfolio
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="tf__slingle_blog fade_left" data-trigerid="blogs">
              <Link
                href="blog_details"
                className="tf__blog_img"
                data-cursor="read <br> more"
              >
                <img
                  src="images/blog/2.jpg"
                  alt="blog"
                  className="img-fluid w-100"
                />
              </Link>
              <div className="tf__blog_text">
                <span>31 December,2022</span>
                <ul>
                  <li>
                    <i className="fa-sharp fa-solid fa-circle-user" /> By admin
                  </li>
                  <li>
                    <i className="fa-sharp fa-solid fa-comments" /> Comments
                    (05)
                  </li>
                </ul>
                <Link href="blog_details">
                  The standard personal My portfolio
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="tf__slingle_blog fade_left" data-trigerid="blogs">
              <Link
                href="blog_details"
                className="tf__blog_img"
                data-cursor="read <br> more"
              >
                <img
                  src="images/blog/3.jpg"
                  alt="blog"
                  className="img-fluid w-100"
                />
              </Link>
              <div className="tf__blog_text">
                <span>31 December,2022</span>
                <ul>
                  <li>
                    <i className="fa-sharp fa-solid fa-circle-user" /> By admin
                  </li>
                  <li>
                    <i className="fa-sharp fa-solid fa-comments" /> Comments
                    (05)
                  </li>
                </ul>
                <Link href="blog_details">
                  The standard personal My portfolio
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12">
            <Link href="blog_list" className="common_btn">
              More Blog +
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog;

export const Blog2 = () => {
  return (
    <section id="blog" className="tf__blog_2 pt_120 xs_pt_80 pb_120 xs_pb_80">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 m-auto mb_30">
            <div className="tf__section_heading">
              <h5 className="has-animation">all blog</h5>
              <h2 className="has-animation">
                Rafting Unique Experiences Inspiring Connections
              </h2>
            </div>
          </div>
        </div>
        <div className="row animation">
          <div className="col-xl-4 col-md-6">
            <div className="tf__slingle_blog_2 fade_left" data-trigerid="blog">
              <Link
                href="blog_details"
                data-cursor="Read <br> More"
                className="tf__blog_img_2"
              >
                <img
                  src="images/blog/4.jpg"
                  alt="blog"
                  className="img-fluid w-100"
                />
                <span>10 June</span>
              </Link>
              <div className="tf__blog_text_2">
                <ul>
                  <li>
                    <i className="fa-sharp fa-solid fa-circle-user" /> By admin
                  </li>
                  <li>
                    <i className="fa-sharp fa-solid fa-comments" /> Comments
                    (05)
                  </li>
                </ul>
                <Link className="title" href="blog_details">
                  Where Passion and Purpose Collide
                </Link>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and types
                  etting in our company here thisn designers give me more design
                  here […]
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="tf__slingle_blog_2 fade_left" data-trigerid="blog">
              <Link
                href="blog_details"
                data-cursor="Read <br> More"
                className="tf__blog_img_2"
              >
                <img
                  src="images/blog/5.jpg"
                  alt="blog"
                  className="img-fluid w-100"
                />
                <span>10 June</span>
              </Link>
              <div className="tf__blog_text_2">
                <ul>
                  <li>
                    <i className="fa-sharp fa-solid fa-circle-user" /> By admin
                  </li>
                  <li>
                    <i className="fa-sharp fa-solid fa-comments" /> Comments
                    (05)
                  </li>
                </ul>
                <Link className="title" href="blog_details">
                  Where Passion and Purpose Collide
                </Link>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and types
                  etting in our company here thisn designers give me more design
                  here […]
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="tf__slingle_blog_2 fade_left" data-trigerid="blog">
              <Link
                href="blog_details"
                data-cursor="Read <br> More"
                className="tf__blog_img_2"
              >
                <img
                  src="images/blog/6.jpg"
                  alt="blog"
                  className="img-fluid w-100"
                />
                <span>10 June</span>
              </Link>
              <div className="tf__blog_text_2">
                <ul>
                  <li>
                    <i className="fa-sharp fa-solid fa-circle-user" /> By admin
                  </li>
                  <li>
                    <i className="fa-sharp fa-solid fa-comments" /> Comments
                    (05)
                  </li>
                </ul>
                <Link className="title" href="blog_details">
                  Where Passion and Purpose Collide
                </Link>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and types
                  etting in our company here thisn designers give me more design
                  here […]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
