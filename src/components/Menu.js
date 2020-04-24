import React from "react";
import { scroller } from "react-scroll";

class Menu extends React.Component {
  state = { menuClassName: "menu" };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const menuClassName = window.scrollY > 0 ? "menu menu--active" : "menu";
    this.setState({ menuClassName });
  };

  handleClick = (e) => {
    e.preventDefault();

    let elementToScrollTo = "";
    switch (e.target.text) {
      case "Home":
        elementToScrollTo = "homeElement";
        break;
      case "Resume":
        elementToScrollTo = "resumeElement";
        break;
      case "Projects":
        elementToScrollTo = "projectsElement";
        break;
      case "Contact":
        elementToScrollTo = "contactElement";
        break;
      default:
        break;
    }

    scroller.scrollTo(elementToScrollTo, {
      duration: 800,
      delay: 100,
      smooth: true,
      offset: -100,
    });
  };

  handleMobileClick = (e) => {
    e.preventDefault();

    this.props.onClickMobileMenu("true");
  };

  render() {
    return (
      <div className={this.state.menuClassName}>
        <div className="container">
          <div className="row">
            <div className="menu__wrapper d-none d-lg-block col-md-12">
              <nav className="">
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
            <div className="menu__wrapper col-md-12 d-lg-none">
              <button
                type="button"
                className="menu__mobile-button"
                onClick={(e) => this.handleMobileClick(e)}
              >
                <span>
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
