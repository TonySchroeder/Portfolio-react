import Counter from "./Counter";

const Design = () => {
  return (
    <section
      className="tf__design mt_135 xs_mt_40 mb_120 xs_mb_80"
      id="counter"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="tf__design_text">
              <h2>
                Design <span>and Innovation</span>
              </h2>
              <p className="">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                auting fugit sed thisnquia consequuntur magni dolores eos
                designer heresm qui ratione voluptatem sequi nesciuNeque porro
                quisquam est, oursqui dolorem ipsum quia dolor sit amet
                consectetur, adipisci velit, sed quia non numquam
              </p>
            </div>
            <div className="row">
              <div className="col-xl-6 col-md-6">
                <div
                  className="tf__design_counter fade_left"
                  data-trigerid="counter"
                >
                  <span className="icon">
                    <img
                      src="svg/complete-project.svg"
                      alt="counter"
                      className="svg img-fluid w-100"
                    />
                  </span>
                  <h3>
                    <span className="counter">
                      <Counter end={10} />
                    </span>
                    k+
                  </h3>
                  <p>Complete project</p>
                </div>
              </div>
              <div className="col-xl-6 col-md-6">
                <div
                  className="tf__design_counter fade_left"
                  data-trigerid="counter"
                >
                  <span className="icon">
                    <img
                      src="svg/client-review.svg"
                      alt="counter"
                      className="img-fluid w-100 svg"
                    />
                  </span>
                  <h3>
                    <span className="counter">
                      <Counter end={800} />
                    </span>
                    +
                  </h3>
                  <p>Client review</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="tf__design_form">
              <h2 className="has-animation">GET TOUCH ME?</h2>
              <p className="">
                For your car we will do everything advice design in us repairs
                and maintenance We are the some preferred.
              </p>
              <form action="#">
                <input className="" type="text" placeholder="Your Name" />
                <input className="" type="email" placeholder="Your Email" />
                <input className="" type="text" placeholder="Phone Number" />
                <textarea
                  className=""
                  rows={4}
                  placeholder="Message"
                  defaultValue={""}
                />
                <button type="submit" className="common_btn">
                  submit now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Design;
