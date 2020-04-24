import React from "react";
import { Element } from "react-scroll";
import { Waypoint } from "react-waypoint";

// TODO
// add link to cv
class Home extends React.Component {
  state = { headerText: "", hasEntered: false };

  handleWaypointEnter = () => {
    if (!this.state.hasEntered) {
      this.setState({ headerText: "" });
      let headerFinalText = "Hi_";

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
      <section id="hello" className="container section">
        <div className="row">
          <div className="col-md-10">
            <Element name="homeElement">
              <Waypoint onEnter={this.handleWaypointEnter} />
              <h2 id="hello_header" className="section__title">
                {this.state.headerText}
              </h2>
            </Element>
            <p className="section__description">
              I am a Junior Developer, qualified in many fields thanks to an
              educational path with varied courses. I am presently focusing on
              Web Technologies and JavaScript. We might meet at React meetups if
              you are based in Paris.
            </p>
            <a href="" className="section_btn site-btn">
              <i className="fa fa-download" />
                Download CV
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
