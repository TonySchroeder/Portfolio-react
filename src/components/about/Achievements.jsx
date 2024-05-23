import React from "react";

const achievementsContent = [
  { title: "23", subTitle1: "Jahre", subTitle2: "Erfahrung in Kommunikation" },
  {
    title: "10",
    subTitle1: "Software",
    subTitle2: "Projekte in 2 Jahren",
  },
  { title: "300", subTitle1: "glückliche", subTitle2: "Kunden in 6 Branchen" },

  // { title: "53", subTitle1: "awards", subTitle2: "won" },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
