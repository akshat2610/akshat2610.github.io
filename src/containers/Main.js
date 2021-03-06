import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Contact from "./contact/Contact";
import Footer from "../components/footer/Footer";
import Education from "./education/Education";
import Project from "./projects/Project";
import Top from "./topbutton/Top";
import { StyleProvider } from "../contexts/StyleContext";
import "./Main.css";
import { educationInfo } from "../portfolio";
import { projects } from "../portfolio";
import { liveProjects } from "../portfolio";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: false,
    };
  }

  componentDidMount() {
    const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
    document.title = "Akshat Bansal";
    this.setState({ isDark: darkPref.matches });
  }
  changeTheme = () => {
    this.setState({ isDark: !this.state.isDark });
  };

  render() {
    return (
      <div className={this.state.isDark ? "dark-mode" : null}>
        <StyleProvider
          value={{ isDark: this.state.isDark, changeTheme: this.changeTheme }}
        >
          <Header />
          <Greeting />
          <Skills />
          <StackProgress />
          <Education />
          <WorkExperience />
          <Project projects={projects} label={"My work"}/>
          <Project projects={liveProjects} />
          <Project projects={liveProjects} />
          <Contact />
          <Top />
        </StyleProvider>
      </div>
    );
  }
}
