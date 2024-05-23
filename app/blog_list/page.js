"use client";
import PageBanner from "@/components/PageBanner";
import Sidebar from "@/components/Sidebar";
import ZyanLayout from "@/layouts/ZyanLayout";
import Link from "next/link";

const page = () => {
  return (
    <ZyanLayout>
      <PageBanner pageName={"Blog List"} />
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
              <div className="row">
                <div className="col-xl-12">
                  <div className="tf__blog_list_item">
                    <Link
                      href="blog_details"
                      data-cursor="Read <br> More"
                      className="tf__blog_list_img"
                    >
                      <img
                        src="images/blog/list_1.jpg"
                        alt="blog list"
                        className="img-fluid w-100"
                      />
                      <span>
                        <b>28</b> june
                      </span>
                    </Link>
                    <div className="tf__blog_list_text">
                      <Link href="blog_details">
                        Empowering your business with innovative solutions
                        Revolutionizing your solutions
                      </Link>
                      <p>
                        Voluptate ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat […]
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="tf__blog_list_item">
                    <Link
                      href="blog_details"
                      data-cursor="Read <br> More"
                      className="tf__blog_list_img"
                    >
                      <img
                        src="images/blog/list_2.jpg"
                        alt="blog list"
                        className="img-fluid w-100"
                      />
                      <span>
                        <b>28</b> june
                      </span>
                    </Link>
                    <div className="tf__blog_list_text">
                      <Link href="blog_details">
                        Empowering your business with innovative solutions
                        Revolutionizing your solutions
                      </Link>
                      <p>
                        Voluptate ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat […]
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="tf__blog_list_item">
                    <Link
                      href="blog_details"
                      data-cursor="Read <br> More"
                      className="tf__blog_list_img"
                    >
                      <img
                        src="images/blog/list_3.jpg"
                        alt="blog list"
                        className="img-fluid w-100"
                      />
                      <span>
                        <b>28</b> june
                      </span>
                    </Link>
                    <div className="tf__blog_list_text">
                      <Link href="blog_details">
                        Empowering your business with innovative solutions
                        Revolutionizing your solutions
                      </Link>
                      <p>
                        Voluptate ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat […]
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tf__pagination">
                <div className="row">
                  <div className="col-12">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination">
                        <li className="page-item">
                          <a
                            className="page-link"
                            href="#"
                            aria-label="Previous"
                          >
                            <i className="fa-regular fa-angle-left" />
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link active" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Next">
                            <i className="fa-regular fa-angle-right" />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
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
