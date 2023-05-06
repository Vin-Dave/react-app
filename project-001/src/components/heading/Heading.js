import React from "react";
import "./heading.css";

class Heading extends React.Component {
  constructor() {
    super();
    this.state = { link_a: "Home" };
    this.state = { link_b: "Home2" };
  }
  render() {
    return (
      <div>
        <nav>
          <ul className="navigation">
            <li>{this.state.link_a}</li>
            <li>Page 1</li>
            <li>Page </li>
            <li>About Me</li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Heading;
