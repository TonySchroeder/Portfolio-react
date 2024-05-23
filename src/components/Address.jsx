import React from "react";

const Address = () => {
  return (
    <div className="d-flex" style={{ gap: 50, flexWrap: "wrap" }}>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Address:</span>Horneburg, Deutschland
      </p>

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">Email:</span>{" "}
        <a href="mailto:steve@mail.com">tony.schroeder@gmx.de</a>
      </p>

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">Phone:</span>{" "}
        <a href="Tel: +49171 9796 775">+49 173 6471 810</a>
      </p>
    </div>
  );
};

export default Address;
