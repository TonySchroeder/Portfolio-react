import React from "react";

const educationContent = [
  {
    year: "03.2022 - 09.2022",
    degree: "Frontend Developer",
    institute: "Developer Akademie München",
    details: `Weiterbildung zum Frontend Entwickler mit Schwerpunkt auf JavaScript und Angular`,
  },
  {
    year: "08.2004 - 01.2008",
    degree: "Vehicle painter`",
    institute: "Lackiercenter Schwerin",
    details: `Training to become a vehicle painter`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
