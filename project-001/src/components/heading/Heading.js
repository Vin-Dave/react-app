import React from "react";
import "./heading.css";

class Heading extends React.Component {
  constructor() {
    super();
    this.state = { link_a: "Home" };
  }
  render() {
    return (
      <div>
        <nav>
          <ul className="navigation">
            <li>{this.state.link_a}</li>
            <li>Page 1</li>
            <li>Page 2</li>
            <li>About Me</li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Heading;
