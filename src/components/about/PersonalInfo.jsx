import React from "react";

const personalInfoContent = [
  { meta: "Vorname", metaInfo: "Viktor" },
  { meta: "Nachname", metaInfo: "Grünwald" },
  { meta: "Alter", metaInfo: "42 Jahre" },
  { meta: "Nationalität", metaInfo: "Deutsch" },
  { meta: "Adresse", metaInfo: "Meschede" },
  { meta: "Telefon", metaInfo: "+49171 9796 775" },
  { meta: "Email", metaInfo: "mail@viktor-gruenwald.de" },
  { meta: "Sprachen", metaInfo: "Deutsch, Englisch, Russisch" },
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
