import React from "react";
import { Element } from "react-scroll";
import { Waypoint } from "react-waypoint";

import ProgressList from "./ProgressList";

class Resume extends React.Component {
  state = { headerText: "", hasEntered: false };

  handleWaypointEnter = () => {
    if (!this.state.hasEntered) {
      this.setState({ headerText: "" });
      let headerFinalText = "Resume_";

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
      <section id="resume" className="container section">
        <div className="row">
          <div className="col-md-10">
            <Element name="resumeElement">
              <h2 id="resume_header" className="section__title">
                <Waypoint onEnter={this.handleWaypointEnter} />
                {this.state.headerText}
              </h2>
            </Element>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 section__resume resume-list">
            <h3 className="resume-list_title">education</h3>
            <div className="resume-list__block">
              <p className="resume-list__block-title">
                University of Science and Technology of Hanoi
              </p>
              <p className="resume-list__block-date">2017 - 2018</p>
              <p>
                Master 2 Information and Communication Technology. Second year
                of master's degree in cooperation with the Master 2 Data course
                of the University of La Rochelle
              </p>
            </div>
            <div className="resume-list__block">
              <p className="resume-list__block-title">South Wales University</p>
              <p className="resume-list__block-date">2016 - 2017</p>
              <p>
                Master 1 Computing and Information Systems. MSc in Computer
                Science in cooperation with the Master Data course of the
                University of La Rochelle
              </p>
            </div>
            <div className="resume-list__block">
              <p className="resume-list__block-title">
                University of La Rochelle
              </p>
              <p className="resume-list__block-date">2015 - 2016</p>
              <p>
                Bachelor's degree in Computer Science. Software Engineering
                specialization
              </p>
            </div>
            <div className="resume-list__block">
              <p className="resume-list__block-title">IUT La Rochelle</p>
              <p className="resume-list__block-date">2013 - 2015</p>
              <p>
                DUT (University Technology Diploma) in Computer Science.
                Embedded Computing specialization
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 section__resume resume-list">
            <h3 className="resume-list_title">employment</h3>
            <div className="resume-list__block">
              <p className="resume-list__block-title">Viveris</p>
              <p className="resume-list__block-date">2018 - 2020</p>
              <p>
                I have been working since late 2018 as a Junior Developer in a
                company based in Paris and have carried out several projects
              </p>
            </div>
            <div className="resume-list__block">
              <p className="resume-list__block-title">Graduation Internships</p>
              <p className="resume-list__block-date">2015 - 2018</p>
              <p>
                Several internships in different companies and countries.
                <br />
                <br />
                Development on microcontroller and assembly of a light flash
                detector with audio warning at the IMaR Technology Gateway
                Research Centre in Ireland
                <br />
                <br /> Development and optimization of a data visualization tool
                with Kibana and integration in the home automation project of a
                company in La Rochelle
                <br />
                <br />
                Development of a Web Application at the ICTLab research
                laboratory in Hanoi
              </p>
            </div>
          </div>
        </div>
        <div className="row section__resume progress-list js-progress-list">
          <div className="col-md-12">
            <h3 className="progress-list__title">general skills</h3>
          </div>
          <div className="col-md-5 mr-auto">
            <ProgressList title="html5" value="90%" />
            <ProgressList title="css3" value="70%" />
            <ProgressList title="javascript" value="90%" />
            <ProgressList title="react" value="75%" />
          </div>
          <div className="col-md-5 mr-auto">
            <ProgressList title="git" value="90%" />
            <ProgressList title="java" value="70%" />
            <ProgressList title="c#" value="70%" />
            <ProgressList title="project management" value="80%" />
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
