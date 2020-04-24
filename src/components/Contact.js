import React from "react";
import { Element } from "react-scroll";
import { Waypoint } from "react-waypoint";

import ContactForm from "./ContactForm";
import backgroundImage from "../img/space.jpg";

class Contact extends React.Component {
  state = { headerText: "", hasEntered: false };

  handleWaypointEnter = () => {
    if (!this.state.hasEntered) {
      this.setState({ headerText: "" });
      let headerFinalText = "Get in touch_";

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
      <div
        className="background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div id="contact" className="container section">
          <div className="row">
            <div className="col-md-12">
              <Element name="contactElement">
                <p id="contacts_header" className="section__title">
                  <Waypoint onEnter={this.handleWaypointEnter} />
                  {this.state.headerText}
                </p>
              </Element>
            </div>
          </div>
          <div className="row contacts">
            <div className="col-md-5 col-lg-4">
              <div className="contacts__list">
                <dl className="contact-list">
                  <dt>Phone:</dt>
                  <dd>
                    <a href="tel:33648393202">+33 6 48 39 32 02</a>
                  </dd>
                </dl>
              </div>
              <div className="contacts__social">
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/in/lecommandeurvalentin/">
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/vlecommandeur">GitHub</a>
                  </li>
                  <li>
                    <a href="https://medium.com/@valentin.lecommandeur">
                      Medium
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-7 col-lg-5">
              <div className="contacts__form">
                <p className="contacts__form-title">
                  Or just write me a letter here_
                </p>
                <ContactForm />
              </div>
              <div className="footer">
                <p>this website is open source and built with react.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
