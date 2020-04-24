import React from "react";

import "./theme.css";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import Header from "./Header";
import Home from "./Home";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";

class App extends React.Component {
  state = { isMobileMenuClicked: "false" };

  onClickMobileMenu = (isMobileMenuClicked) => {
    this.setState({ isMobileMenuClicked });
  };

  render() {
    return (
      <>
        <Menu onClickMobileMenu={this.onClickMobileMenu} />
        <MobileMenu
          onClickMobileMenu={this.onClickMobileMenu}
          isMobileMenuClicked={this.state.isMobileMenuClicked}
        />
        <Header />
        <Home />
        <hr />
        <Resume />
        <hr />
        <Projects />
        <Contact />
      </>
    );
  }
}

export default App;
