import React from "react";
import { Waypoint } from "react-waypoint";

class ProgressList extends React.Component {
  state = { width: 0 };

  handleWaypointEnter = (value) => {
    requestAnimationFrame(() => {
      this.setState({ width: value });
    });
  };

  render() {
    return (
      <div className="progress-list__skill">
        <Waypoint onEnter={() => this.handleWaypointEnter(this.props.value)} />
        <p>
          <span className="progress-list__skill-title">{this.props.title}</span>
          <span className="progress-list__skill-value">{this.props.value}</span>
        </p>
        <div className="progress">
          <div
            className="progress-bar"
            style={{
              width: this.state.width,
            }}
          ></div>
        </div>
      </div>
    );
  }
}

export default ProgressList;
