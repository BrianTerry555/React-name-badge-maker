import React from "react";

import bootstrap from "react-bootstrap";

class Badge extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{this.props.firstname} {this.props.lastname}</h1>
              <h3></h3>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>{this.props.email}</h3>
              <h3>{this.props.place}</h3>
            </div>
            <div className="col-md-6">
              <h3>{this.props.phone}</h3>
              <h3>{this.props.dietary}</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Badge;
