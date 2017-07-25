import React from "react";

import bootstrap from "react-bootstrap";

class Name extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h4>Input your Information</h4>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <input onChange={(event)=>{this.props.handleInput("firstname", event);}} type="text" className="form-control" value={this.props.input.firstname} placeholder="Firstname"/>
              <input onChange={(event)=>{this.props.handleInput("email", event);}} type="text" className="form-control" value={this.props.input.email} placeholder="Email"/>
              <input onChange={(event)=>{this.props.handleInput("phone", event);}} type="text" className="form-control" value={this.props.input.phone} placeholder="Phone"/>
            </div>
            <div className="col-md-6">
              <input onChange={(event)=>{this.props.handleInput("lastname", event);}} type="text" className="form-control" value={this.props.input.lastname} placeholder="Lastname"/>
              <input onChange={(event)=>{this.props.handleInput("place", event);}} type="text" className="form-control" value={this.props.input.place} placeholder="Place you are from"/>
              <input onChange={(event)=>{this.props.handleInput("dietary", event);}} type="text" className="form-control" value={this.props.input.dietary} placeholder="Dietary needs"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Name;
