import { sliderProps } from "@/utils/sliderProps";
import Slider from "react-slick";

const Testomonial = () => {
  return (
    <section className="tf__testimonial pt_115 xs_pt_75">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 m-auto mb_30">
            <div className="tf__section_heading">
              <h5 className="has-animation">clients review</h5>
              <h2 className="has-animation">My testomonial</h2>
            </div>
          </div>
        </div>
        <Slider {...sliderProps.testimonial} className="row testi_slider">
          <div className="col-xl-6">
            <div className="tf__single_testimonial">
              <div className="img">
                <img
                  src="images/testimonial/1.jpg"
                  alt="clients"
                  className="img-fluid w-100"
                />
              </div>
              <p className="rating">
                <i className="fa-solid fa-star-sharp" />
                <i className="fa-solid fa-star-sharp" />
                <i className="fa-solid fa-star-sharp" />
                <i className="fa-solid fa-star-sharp" />
                <i className="fa-solid fa-star-sharp" />
              </p>
              <h3>Eleanor pena</h3>
              <h5>Marketing Coordinator</h5>
              <p className="description">
                Financial planners help people to knowledge in about how to
                invest and in save their moneye the most efficient way eve plan
                ners help people tioniio know ledige in about how.
              </p>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="tf__single_testimonial">
              <div className="img">
                <img
                  src="images/testimonial/2.jpg"
                  alt="clients"
                  className="img-fluid w-100"
                />
              </div>
              <p className="rating">
                <i className="fa-solid fa-star-sharp" />
                <i className="fa-solid fa-star-sharp" />
                <i className="fa-solid fa-star-sharp" />
                <i className="fa-solid fa-star-sharp" />
                <i className="fa-solid fa-star-sharp" />
              </p>
              <h3>Eleanor pena</h3>
              <h5>Marketing Coordinator</h5>
              <p className="description">
                Financial planners help people to knowledge in about how to
                invest and in save their moneye the most efficient way eve plan
                ners help people tioniio know ledige in about how.
              </p>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="tf__single_testimonial">
              <div className="img">
                <img
                  src="images/testimonial/1.jpg"
                  alt="clients"
                  className="img-fluid w-100"
                />
              </div>
              <p className="rating">
                <i className="fa-solid fa-star-sharp" />
                <i className="fa-solid fa-star-sharp" />
                <i className="fa-solid fa-star-sharp" />
                <i className="fa-solid fa-star-sharp" />
                <i className="fa-solid fa-star-sharp" />
              </p>
              <h3>Eleanor pena</h3>
              <h5>Marketing Coordinator</h5>
              <p className="description">
                Financial planners help people to knowledge in about how to
                invest and in save their moneye the most efficient way eve plan
                ners help people tioniio know ledige in about how.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};
export default Testomonial;
