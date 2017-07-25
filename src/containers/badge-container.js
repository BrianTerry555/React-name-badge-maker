import React from "react";
import autoBind from "react-autobind";

import BadgeContainer from "./containers/badge-container.js";



class BadgeContainer extends React.Component {
  constructor() {
    super ();
    this.state = {
      items: [],
      inputValue: ""
    }
    autoBind(this);
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default BadgeContainer;
