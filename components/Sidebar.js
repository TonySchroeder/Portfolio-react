import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="col-xl-4 col-lg-4">
      <div className="tf__sidebar">
        <div className="tf__sidebar_item tf__sidebar_search">
          <h3>Search</h3>
          <form action="#">
            <input type="text" placeholder="Search your blog" />
            <button type="submit">
              <i className="fa-regular fa-magnifying-glass" />
            </button>
          </form>
        </div>
        <div className="tf__sidebar_item tf__sidebar_category mt_30">
          <h3>Category</h3>
          <ul>
            <li>
              <Link href="blog_details">
                Business Advice <span>(02)</span>
              </Link>
            </li>
            <li>
              <Link href="blog_details">
                Web design <span>(05)</span>
              </Link>
            </li>
            <li>
              <Link href="blog_details">
                devolopment <span>(10)</span>
              </Link>
            </li>
            <li>
              <Link href="blog_details">
                Video promotion <span>(03)</span>
              </Link>
            </li>
            <li>
              <Link href="blog_details">
                Reabervede <span>(10)</span>
              </Link>
            </li>
            <li>
              <Link href="blog_details">
                Ui/Ux design <span>(03)</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="tf__sidebar_item tf__sidebar_comments mt_30">
          <h3>Comments</h3>
          <ul>
            <li>
              <div className="img">
                <img
                  src="images/blog/comment_1.jpg"
                  alt="comment"
                  className="img-fluid w-100"
                />
              </div>
              <div className="text">
                <Link href="blog_details">
                  Aliquam Eros Justo Posuere Loborti Per
                </Link>
                <p>By Arham saklia</p>
              </div>
            </li>
            <li>
              <div className="img">
                <img
                  src="images/blog/comment_2.jpg"
                  alt="comment"
                  className="img-fluid w-100"
                />
              </div>
              <div className="text">
                <Link href="blog_details">
                  Aliquam Eros Justo Posuere Loborti Per
                </Link>
                <p>By Arham saklia</p>
              </div>
            </li>
            <li>
              <div className="img">
                <img
                  src="images/blog/comment_3.jpg"
                  alt="comment"
                  className="img-fluid w-100"
                />
              </div>
              <div className="text">
                <Link href="blog_details">
                  Aliquam Eros Justo Posuere Loborti Per
                </Link>
                <p>By Arham saklia</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="tf__sidebar_item tf__sidebar_gallery mt_30 gallery_popup">
          <h3>Photo gallery</h3>
          <ul>
            <li>
              <a href="images/sidebar/1.jpg">
                <img
                  src="images/sidebar/1.jpg"
                  alt="gallery1"
                  className="img-fluid w-100"
                />
                <div className="gal_img_overlay">
                  <i className="fa-sharp fa-solid fa-eye" />
                </div>
              </a>
            </li>
            <li>
              <a href="images/sidebar/2.jpg">
                <img
                  src="images/sidebar/2.jpg"
                  alt="gallery1"
                  className="img-fluid w-100"
                />
                <div className="gal_img_overlay">
                  <i className="fa-sharp fa-solid fa-eye" />
                </div>
              </a>
            </li>
            <li>
              <a href="images/sidebar/3.jpg">
                <img
                  src="images/sidebar/3.jpg"
                  alt="gallery1"
                  className="img-fluid w-100"
                />
                <div className="gal_img_overlay">
                  <i className="fa-sharp fa-solid fa-eye" />
                </div>
              </a>
            </li>
            <li>
              <a href="images/sidebar/4.jpg">
                <img
                  src="images/sidebar/4.jpg"
                  alt="gallery1"
                  className="img-fluid w-100"
                />
                <div className="gal_img_overlay">
                  <i className="fa-sharp fa-solid fa-eye" />
                </div>
              </a>
            </li>
            <li>
              <a href="images/sidebar/5.jpg">
                <img
                  src="images/sidebar/5.jpg"
                  alt="gallery1"
                  className="img-fluid w-100"
                />
                <div className="gal_img_overlay">
                  <i className="fa-sharp fa-solid fa-eye" />
                </div>
              </a>
            </li>
            <li>
              <a href="images/sidebar/6.jpg">
                <img
                  src="images/sidebar/6.jpg"
                  alt="gallery1"
                  className="img-fluid w-100"
                />
                <div className="gal_img_overlay">
                  <i className="fa-sharp fa-solid fa-eye" />
                </div>
              </a>
            </li>
            <li>
              <a href="images/sidebar/7.jpg">
                <img
                  src="images/sidebar/7.jpg"
                  alt="gallery1"
                  className="img-fluid w-100"
                />
                <div className="gal_img_overlay">
                  <i className="fa-sharp fa-solid fa-eye" />
                </div>
              </a>
            </li>
            <li>
              <a href="images/sidebar/8.jpg">
                <img
                  src="images/sidebar/8.jpg"
                  alt="gallery1"
                  className="img-fluid w-100"
                />
                <div className="gal_img_overlay">
                  <i className="fa-sharp fa-solid fa-eye" />
                </div>
              </a>
            </li>
            <li>
              <a href="images/sidebar/9.jpg">
                <img
                  src="images/sidebar/9.jpg"
                  alt="gallery1"
                  className="img-fluid w-100"
                />
                <div className="gal_img_overlay">
                  <i className="fa-sharp fa-solid fa-eye" />
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="tf__sidebar_item tf__sidebar_tags mt_30">
          <h3>Tags</h3>
          <ul>
            <li>
              <a href="#">Web design</a>
            </li>
            <li>
              <a href="#">Architecher</a>
            </li>
            <li>
              <a href="#">House</a>
            </li>
            <li>
              <a href="#">Interiour</a>
            </li>
            <li>
              <a href="#">Graphics</a>
            </li>
            <li>
              <a href="#">shidtarx</a>
            </li>
            <li>
              <a href="#">Start shape</a>
            </li>
            <li>
              <a href="#">UI/UX</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
