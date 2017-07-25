import React from "react";

import autoBind from "react-autobind";

// import components
import Names from "../components/names.js";

class NamesContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      place: "",
      phone: "",
      dietary: "",
      input: {}
    };
    autoBind(this);
  }
  handleInput(key, event) {
    let input = {
      ...this.state.input,
    };
    input[key] = event.target.value;
    this.setState({
      ...this.state,
      input: input
    });
  }
  handleSubmit() {
      this.setState({
        ...this.state,
        firstname: this.state.input.firstname,
        lastname: this.state.input.lastname,
        email: this.state.input.email,
        place: this.state.input.place,
        phone: this.state.input.phone,
        dietary: this.state.input.dietary,
        input: {}
      });
  }

  render() {
    return (
      <div>
        <Names handleSubmit={this.handleSubmit} handleInput={this.handleInput} input={this.state.input} firstname={this.state.firstname} lastname={this.state.lastname} email={this.state.input.email} place={this.state.input.place} phone={this.state.input.phone} dietary={this.state.input.dietary} />
      </div>
    );
  }
}

export default NamesContainer;
