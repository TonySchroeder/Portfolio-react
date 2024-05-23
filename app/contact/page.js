import PageBanner from "@/components/PageBanner";
import ZyanLayout from "@/layouts/ZyanLayout";
const page = () => {
  return (
    <ZyanLayout>
      <PageBanner pageName={"Contact"} />
      <section className="tf__contact pt_110 xs_pt_70 pb_120 xs_pb_80">
        <div className="container">
          <div className="tf__section_heading pb_40">
            <h5 className="has-animation">Get In Touch</h5>
            <h2 className="has-animation">
              Let’s discuss <br />
              about an project!
            </h2>
          </div>
          <div className="row">
            <div className="col-xl-7 col-lg-7">
              <div className="tf__contact_form_area">
                <form action="#">
                  <div className="row">
                    <div className="col-xl-6">
                      <input type="text" placeholder="Your Name*" />
                    </div>
                    <div className="col-xl-6">
                      <input type="email" placeholder="Your Email*" />
                    </div>
                    <div className="col-xl-6">
                      <input type="text" placeholder="Phone Number*" />
                    </div>
                    <div className="col-xl-6">
                      <input type="text" placeholder="Your Website*" />
                    </div>
                    <div className="col-xl-12">
                      <textarea
                        rows={7}
                        placeholder="Write Your Message Here*"
                        defaultValue={""}
                      />
                      <button className="common_btn" type="submit">
                        Send Mail
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5">
              <div className="tf__contact_map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7299.9714197014055!2d90.45054656894744!3d23.819107188100446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c884b37fc1a7%3A0x4abc58eea42b43c3!2sBlock%20M%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1692295852649!5m2!1sen!2sbd"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </ZyanLayout>
  );
};
export default page;
