import React from "react";

const experienceContent = [
  {
    year: "   2024 - heute",
    position: " Geschäftsführer / Software-Enwickler",
    compnayName: "twylo B.V.",
    details: ` Entwicklung moderner, sicherer und effizienter Digitallösungen mit Hilfe von Künstlicher Inteligenz und Cloud-Telefonie`,
  },
  {
    year: "2023 - 2024",
    position: " Full-Stack Entwickler",
    compnayName: "Weser Ems Eisenbahn",
    details: `Entwicklung und Design einer Dispositions / CRM Software für Eisenbahnunternehmen`,
  },
  {
    year: "2018 - 2023",
    position: "Vertriebsinnendienst",
    compnayName: "Berding Beton",
    details: `Kundenbetreuung und -Support sowie Auftragsabwicklung`,
  },
  {
    year: "2012 - 2017",
    position: "Vertriebleiter",
    compnayName: "Schmelter LED Technology",
    details: `Kundenberatung und Koordination des Außendienstes sowie Auftragsabwicklung`,
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
