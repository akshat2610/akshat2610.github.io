import React, { useContext } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skillsSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const { isDark } = useContext(StyleContext);
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <h1 className="skills-heading"> Mission </h1>
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            <img
              alt="Values"
              src={require("../../assets/images/SDLCLogo.png")}
            ></img>
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div className="skills-text">
              {skillsSection.skills.map((skills) => {
                return (
                  <p id="subTitleText"
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}