import React from "react";
import FadeIn from "react-fade-in";

import ProjectModal from "./ProjectModal";

class ProjectCard extends React.Component {
  renderList(techs) {
    return techs.map((tech) => {
      return <li key={techs.indexOf(tech)}>{tech}</li>;
    });
  }

  render() {
    return (
      <FadeIn>
        <div
          className="row project-card"
          data-toggle="modal"
          data-target={`#${this.props.target}`}
        >
          <div className="col-md-6 col-lg-5 project-card__img">
            <img className="" src={this.props.imgSrc} alt="project-img" />
          </div>
          <div className="col-md-6 col-lg-7 project-card__info">
            <h3 className="project-card__title">{this.props.title}</h3>
            <p className="project-card__description">
              {this.props.description}
            </p>
            <p className="project-card__stack">Used stack:</p>
            <ul className="tags">{this.renderList(this.props.stack)}</ul>
            <a href={this.props.link} className="project-card__link">
              {this.props.link}
            </a>
          </div>
          <ProjectModal
            id={this.props.target}
            title={this.props.title}
            imgSrc={this.props.imgSrc}
            description={this.props.detailedDescription}
            link={this.props.link}
            stack={this.renderList(this.props.stack)}
          />
        </div>
      </FadeIn>
    );
  }
}

export default ProjectCard;
