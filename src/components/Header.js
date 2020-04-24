import React from "react";

import profile from "../img/profile.png";
import backgroundImage from "../img/space.jpg";

// TODO
// Add link to medium profile (update fa)
const Header = () => {
  return (
    <header
      className="main-header"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <div className="row personal-profile">
          <div className="col-md-4 personal-profile__avatar">
            <img className="" src={profile} alt="avatar" />
          </div>
          <div className="col-md-8">
            <p className="personal-profile__name">Valentin Lecommandeur_</p>
            <p className="personal-profile__work">fullstack developer</p>
            <div className="personal-profile__contacts">
              <dl className="contact-list contact-list__opacity-titles">
                <dt>Age:</dt>
                <dd>25</dd>
                <dt>Phone:</dt>
                <dd>
                  <a href="tel:0648393202">+33 6 48 39 32 02</a>
                </dd>
                <dt>Email:</dt>
                <dd>
                  <a href="mailto:valentin.lecommandeur@gmail.com">
                    valentin.lecommandeur@gmail.com
                  </a>
                </dd>
                <dt>Address:</dt>
                <dd>Paris, France</dd>
              </dl>
            </div>
            <p className="personal-profile__social">
              <a
                href="https://github.com/vlecommandeur"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/lecommandeurvalentin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin-square"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
