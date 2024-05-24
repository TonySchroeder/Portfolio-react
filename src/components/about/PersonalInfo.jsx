import React from "react";
import { calculateYears } from "../../utilities/calculateYears";


const personalInfoContent = [
  { meta: "First name", metaInfo: "Tony" },
  { meta: "Last name", metaInfo: "Schroeder" },
  { meta: "Age", metaInfo: `${calculateYears("1987-04-22")} years` },
  { meta: "Address", metaInfo: "Horneburg" },
  { meta: "Phone", metaInfo: "+49 173 6471 810" },
  { meta: "Nationality", metaInfo: "German" },
  { meta: "Email", metaInfo: "tony.schroeder@gmx.de" },
  { meta: "Languages", metaInfo: "German, English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
