import React from "react";
import { calculateYears } from "../../utils/calculateYears";

const achievementsContent = [
  { title: "23", subTitle1: "Jahre", subTitle2: "Erfahrung in Kommunikation" },
  {
    title: `${calculateYears("2022-03-01") * 5}`,
    subTitle1: "Projects",
    subTitle2: `in ${calculateYears("2022-03-01")} years`,
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
