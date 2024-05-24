import React from "react";

const skillsContent = [
  { skillClass: "p70", skillPercent: "70", skillName: "UI/UX" },
  { skillClass: "p80", skillPercent: "80", skillName: "REACT" },
  { skillClass: "p85", skillPercent: "85", skillName: "TYPESCRIPT" },
  { skillClass: "p65", skillPercent: "65", skillName: "GRAPHQL" },
  { skillClass: "p80", skillPercent: "80", skillName: "NEXTJS" },
  { skillClass: "p80", skillPercent: "80", skillName: "RESTAPI" },
  { skillClass: "p65", skillPercent: "65", skillName: "ANGULAR" },
  { skillClass: "p85", skillPercent: "85", skillName: "TAILWIND CSS" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 aqua ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
