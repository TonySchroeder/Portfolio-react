const Contact = () => {
  return (
    <section id="contact" className="tf__contact_2 pt_95 xs_pt_45">
      <div className="container">
        <div className="row animation">
          <div className="col-xl-4 col-md-6 col-lg-4">
            <div
              className="tf__contact_2_text fade_left"
              data-trigerid="contact"
            >
              <span>
                <img
                  src="svg/voice_phone.svg"
                  alt="contact"
                  className="img-fluid w-100 svg"
                />
              </span>
              <h3>Phone</h3>
              <p>
                Loram ipsum eros justo, posuer oborti viverra laor house of
                street
              </p>
              <a href="callto:12345664746846">123-45664-746846</a>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4">
            <div
              className="tf__contact_2_text fade_left"
              data-trigerid="contact"
            >
              <span>
                <img
                  src="svg/map_issue.svg"
                  alt="contact"
                  className="img-fluid w-100 svg"
                />
              </span>
              <h3>Location</h3>
              <p>
                Dhaka 102, m eros justo, posuer oborti viverra laor house of
                street
              </p>
              <a href="#">View on map</a>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4">
            <div
              className="tf__contact_2_text fade_left"
              data-trigerid="contact"
            >
              <span>
                <img
                  src="svg/send_mail.svg"
                  alt="contact"
                  className="img-fluid w-100 svg"
                />
              </span>
              <h3>Monday - Sunday</h3>
              <p>
                Dhaka 102, m eros justo, posuer oborti viverra laor house of
                street
              </p>
              <a href="mailto:hfavouriteemail@gmail.com">
                hfavouriteemail@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="contact_form_2">
          <form>
            <div className="row">
              <div className="col-lg-6">
                <input type="text" placeholder="Your Name Here" />
              </div>
              <div className="col-lg-6">
                <input type="text" placeholder="Subject" />
              </div>
              <div className="col-lg-12">
                <input type="email" placeholder="Email" />
              </div>
              <div className="col-12">
                <textarea
                  rows={5}
                  placeholder="Your Message Here"
                  defaultValue={""}
                />
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
