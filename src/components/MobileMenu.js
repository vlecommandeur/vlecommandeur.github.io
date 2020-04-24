import React from "react";
import { scroller } from "react-scroll";

class MobileMenu extends React.Component {
  state = {
    mobileMenuClassName: "mobile-menu d-lg-none",
    isMobileMenuClicked: "false",
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate() {
    let mobileMenuClassName = this.state.mobileMenuClassName;
    if (
      this.props.isMobileMenuClicked === "true" &&
      this.state.isMobileMenuClicked === "false"
    ) {
      mobileMenuClassName += " active";
      this.setState({ mobileMenuClassName, isMobileMenuClicked: "true" });
    }
  }

  handleScroll = () => {
    if (this.state.isMobileMenuClicked === "false") {
      const mobileMenuClassName =
        window.scrollY > 0
          ? "mobile-menu d-lg-none mobile-menu--active"
          : "mobile-menu d-lg-none";
      this.setState({ mobileMenuClassName });
    }

    if (this.state.isMobileMenuClicked === "true") {
      const mobileMenuClassName =
        window.scrollY > 0
          ? "mobile-menu d-lg-none mobile-menu--active active"
          : "mobile-menu d-lg-none active";
      this.setState({ mobileMenuClassName });
    }
  };

  handleClick = (e) => {
    e.preventDefault();

    let elementToScrollTo = "";
    switch (e.target.text) {
      case "Home":
        elementToScrollTo = "homeElement";
        this.handleClose();
        break;
      case "Resume":
        elementToScrollTo = "resumeElement";
        this.handleClose();
        break;
      case "Projects":
        elementToScrollTo = "projectsElement";
        this.handleClose();
        break;
      case "Contact":
        elementToScrollTo = "contactElement";
        this.handleClose();
        break;
      default:
        break;
    }

    scroller.scrollTo(elementToScrollTo, {
      duration: 800,
      delay: 100,
      smooth: true,
      offset: -120,
    });
  };

  handleClose = () => {
    let mobileMenuClassName = this.state.mobileMenuClassName;
    mobileMenuClassName = mobileMenuClassName.substr(
      0,
      mobileMenuClassName.length - 7
    );

    this.props.onClickMobileMenu("false");
    this.setState({ mobileMenuClassName, isMobileMenuClicked: "false" });
  };

  render() {
    return (
      <div className={this.state.mobileMenuClassName}>
        <div className="container">
          <div
            className="mobile-menu__close"
            onClick={() => this.handleClose()}
          >
            <span>
              <i className="mdi mdi-close" aria-hidden="true"></i>
            </span>
          </div>
          <nav className="mobile-menu__wrapper">
            <ul>
              <li>
                <a href="#hello" onClick={(e) => this.handleClick(e)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#resume" onClick={(e) => this.handleClick(e)}>
                  Resume
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={(e) => this.handleClick(e)}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => this.handleClick(e)}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default MobileMenu;
