import React from "react";

const educationContent = [
  {
    year: "2023",
    degree: "Frontend - Developer",
    institute: "Developer Akademie München",
    details: ` Weiterbildung zum Frontend - Entwickler mit Schwerpunkt auf JavaScript und Angular`,
  },
  {
    year: "2004",
    degree: "Bankkaufmann",
    institute: "Spar- und Darlehenskasse",
    details: `Ausbildung zum Bankkaufmann`,
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
