import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-xing",
    link: "https://www.xing.com/profile/Tony_Schroeder10/web_profiles",
  },
  {
    iconName: "fa fa-linkedin",
    link: "https://www.linkedin.com/in/tony-schroeder-0804b3249/",
  },
  {
    iconName: "fa fa-briefcase",
    link: "https://twylo.net/",
  },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
