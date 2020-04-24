import React from "react";
import { Element } from "react-scroll";
import { Waypoint } from "react-waypoint";

import ProjectCard from "./ProjectCard";
import luteceImg from "../img/luteceImg.PNG";
import cooptationImg from "../img/cooptationImg.jpg";
import androidImg from "../img/androidImg.jpg";
import pacmanImg from "../img/pacmanImg.jpg";

class Projects extends React.Component {
  state = { headerText: "", hasEntered: false, selectedMenu: "all" };

  handleClick = (menuTitle, e) => {
    e.preventDefault();
    this.setState({ selectedMenu: menuTitle });
  };

  handleWaypointEnter = () => {
    if (!this.state.hasEntered) {
      this.setState({ headerText: "" });
      let headerFinalText = "Projects_";

      let nextAnimationStep = () => {
        if (headerFinalText.length > 0) {
          let text = this.state.headerText + headerFinalText.substr(0, 1);
          this.setState({
            headerText: text,
          });
          headerFinalText = headerFinalText.substr(1);
          setTimeout(nextAnimationStep, 100);
        }
      };

      nextAnimationStep();

      this.setState({ hasEntered: true });
    }
  };

  render() {
    return (
      <section id="portfolio" className="container section">
        <div className="row">
          <div className="col-md-12">
            <Element name="projectsElement">
              <h2 id="portfolio_header" className="section__title">
                <Waypoint onEnter={this.handleWaypointEnter} />
                {this.state.headerText}
              </h2>
            </Element>
          </div>
        </div>
        <div className="row portfolio-menu">
          <div className="col-md-12">
            <nav>
              <ul>
                <li>
                  <a
                    href=""
                    data-portfolio-target-tag="all"
                    onClick={(e) => {
                      this.handleClick("all", e);
                    }}
                  >
                    all
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    data-portfolio-target-tag="web apps"
                    onClick={(e) => {
                      this.handleClick("web apps", e);
                    }}
                  >
                    web apps
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    data-portfolio-target-tag="mobile apps"
                    onClick={(e) => {
                      this.handleClick("mobile apps", e);
                    }}
                  >
                    mobile apps
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    data-portfolio-target-tag="other"
                    onClick={(e) => {
                      this.handleClick("other", e);
                    }}
                  >
                    other
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="portfolio-cards">
          {(() => {
            if (
              this.state.selectedMenu === "all" ||
              this.state.selectedMenu === "web apps"
            ) {
              return (
                <>
                  <ProjectCard
                    target="luteceModal"
                    imgSrc={luteceImg}
                    title="Web App for the Paris City Hall"
                    description="Development of a web application following the agile methodology. It is a management site of artists studios for the Paris City Hall."
                    stack={["java 8", "spring", "javascript", "mysql", "git"]}
                    link="https://atelier-artiste.paris.fr/ateliersartistes/"
                    detailedDescription="I worked with a team of six people to develop from scratch a web application for the Paris City Hall. This
                  application is used by artists looking for workshops in the city of Paris, and allows to better manage the different award procedures. We implemented a real working methodology, with agile development,
                  participation in scrum ceremonies, analysis of specifications, etc. To create the application, we
                  were required to use the Java Content Management Framework called Lutece."
                  ></ProjectCard>

                  <ProjectCard
                    target="cooptationModal"
                    imgSrc={cooptationImg}
                    title="Web App for Viveris"
                    description="Development of an internal co-option management application."
                    stack={["react", "redux", ".NET Core", "git"]}
                    link=""
                    detailedDescription="I have been working for a few months on an in-house application to facilitate the co-opting process, both for recruitment officers and employees. It's also an opportunity to develop skills in technologies such as the react framework."
                  ></ProjectCard>
                </>
              );
            }
          })()}

          {(() => {
            if (
              this.state.selectedMenu === "all" ||
              this.state.selectedMenu === "mobile apps"
            ) {
              return (
                <ProjectCard
                  target="androidModal"
                  imgSrc={androidImg}
                  title="Android App Coursework"
                  description="This project is a mobile application for Android developed in Java. "
                  stack={["android", "java"]}
                  link=""
                  detailedDescription="The application allows the user to follow courses and then answer quizzes. A scoring system is set up with a summary and evolution graphs for each subject."
                ></ProjectCard>
              );
            }
          })()}

          {(() => {
            if (
              this.state.selectedMenu === "all" ||
              this.state.selectedMenu === "other"
            ) {
              return (
                <ProjectCard
                  target="pacmanModal"
                  imgSrc={pacmanImg}
                  title="Pacman Coursework"
                  description="This project consisted in developing a version of the famous Pacman game for an embedded system without an operating system (STMicroelectronics STM32F10x microcontroller)."
                  stack={["c", "embedded"]}
                  link=""
                  detailedDescription="The game is developed in C and uses the standard library developed by STMicroelectronics to control the system's peripherals. The Keil IDE μVision is used for the configuration and compilation of the project."
                ></ProjectCard>
              );
            }
          })()}
        </div>
      </section>
    );
  }
}

export default Projects;
