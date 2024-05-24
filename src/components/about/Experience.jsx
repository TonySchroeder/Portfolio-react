import React from "react";

const experienceContent = [
  {
    year: "05.2024 - Present",
    position: "Software Developer",
    compnayName: "twylo B.V.",
    details: `Development of modern, secure and efficient digital solutions with the help of artificial intelligence and cloud telephony`,
  },
  {
    year: "12.2023 - 04.2024",
    position: "React Developer",
    compnayName: "Weser Ems Eisenbahn",
    details: `Development and design of a scheduling / CRM software for railroad companies`,
  },
  {
    year: "08.2023 - 11.2023",
    position: "React Developer",
    compnayName: "progwise.net",
    details: `Co-development and design of ki supported software and time tracking tool `,
  },
  {
    year: "12.2022 - 07.2023",
    position: "React Developer",
    compnayName: "Kittelberger media solutions",
    details: `Development of various React projects, revision and update of a component library to adapt it to the needs of our development team.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
