import Image1 from "../../assets/img/portfolio/slock-clane.png";
import Image2 from "../../assets/img/portfolio/ringoffire.png";
import Image3 from "../../assets/img/portfolio/braveninja.png";
import Image4 from "../../assets/img/portfolio/join.png";
import Image5 from "../../assets/img/portfolio/twylo_rail.png";
import Image6 from "../../assets/img/portfolio/weehome.png";
import Image7 from "../../assets/img/portfolio/humanai2.png";
import Image8 from "../../assets/img/portfolio/sl2024.png";
// import Image9 from "../../assets/img/portfolio/project-9.jpg";

const PortfolioData = [
  {
    id: 1,
    type: "Business Messenger",
    image: Image1,
    tag: ["mockup"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Business Messenger",
        client: "Developer Akademie",
        language: "Angular, TypeScript",
        preview: "Projekt ansehen",
        link: "https://www.viktor-gruenwald.de/slack/",
      },
    ],
  },
  {
    id: 2,
    type: "Ring of Fire",
    image: Image2,
    tag: ["mockup", "javascript"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Online Kartenspiel",
        client: "Developer Akademie",
        language: "Firebase, JavaScript",
        preview: "Projekt ansehen",
        link: "https://ring-of-fire-e30cc.web.app/",
      },
    ],
  },
  {
    id: 3,
    type: "Brave Ninja",
    image: Image3,
    tag: ["Mockup"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Jump & Run Spiel",
        client: "Developer Akademie",
        language: "Angular, TypeScript",
        preview: "Projekt ansehen",
        link: "https://www.viktor-gruenwald.de/ninja/index.html",
      },
    ],
  },
  {
    id: 4,
    type: "Join - Kanban",
    image: Image4,
    tag: ["Mockup", "javascript"],
    delayAnimation: "300",
    modalDetails: [
      {
        project: "Kanban System",
        client: "Developer Akademie",
        language: "JavaScript",
        preview: "Projekt ansehen",
        link: "https://www.viktor-gruenwald.de/join/index.html",
      },
    ],
  },
  {
    id: 5,
    type: "twylo rail",
    image: Image5,
    tag: ["react"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Saas / CRM System",
        client: "WEE GmbH",
        language: "React, NextJS, MySQL",
        preview: "Projekt ansehen",
        link: "https://wee.twylo.app",
      },
    ],
  },
  {
    id: 6,
    type: "WEE Website",
    image: Image6,
    tag: ["website", "javascript", "react"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "WEE Homepage",
        client: "WEE GmbH",
        language: "React, Javascript",
        preview: "Seite ansehen",
        link: "https://www.wee.gmbh",
      },
    ],
  },
  {
    id: 7,
    type: "twylo Website",
    image: Image7,
    tag: ["website", "javascript", "react"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "twylo Homepage",
        client: "twylo B.V.",
        language: "React, NextJS, Javascript",
        preview: "Seite ansehen",
        link: "https://twylo.net",
      },
    ],
  },
  {
    id: 8,
    type: "Schmeckt Lecker",
    image: Image8,
    tag: ["website"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Restaurant Website",
        client: "Schmeckt Lecker",
        language: "HTML, CSS, Javascript",
        preview: "Seite ansehen",
        link: "https://schmeckt-lecker.net",
      },
    ],
  },
  // {
  //   id: 9,
  //   type: "behence project",
  //   image: Image9,
  //   tag: ["graphic design", "mockup"],
  //   delayAnimation: "200",
  //   modalDetails: [
  //     {
  //       project: "Website",
  //       client: "Behance",
  //       language: "HTML, CSS, Javascript",
  //       preview: "www.behance.com",
  //       link: "https://www.behance.net/ib-themes",
  //     },
  //   ],
  // },
];

export default PortfolioData;
