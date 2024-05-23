import React from "react";
import { Link } from "react-router-dom";
import image404 from "../assets/img/404.jpg";

const NotFound = () => {
  return (
    <div className="error_page">
      <div
        className="hero bg-image"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + image404})`,
        }}
      >
        <div className="content">
          <h1 data-aos="fade-up" data-aos-duration="1200">
            404!
          </h1>
          <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="50">
            Die Seite, die sie suchen existiert leider nicht!
          </p>

          <div
            className="button"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <Link to="/">ZURÜCK ZUR STARTSEITE</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
