import React from "react";
import { calculateYears } from "../../utils/calculateYears";

const yearsSinceBeginning = calculateYears("2022-03-01")

const achievementsContent = [
  {
    title: `${yearsSinceBeginning * 6}`,
    subTitle1: "Projects",
    subTitle2: `in ${yearsSinceBeginning} years`,
  },
  { title: `${yearsSinceBeginning * 1000}`, subTitle1: "hours", subTitle2: "of front-end development" },
  { title: "50", subTitle1: "custom", subTitle2: "React components" },
  { title: "\u221e", subTitle1: "willingness", subTitle2: "to learn" },

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
