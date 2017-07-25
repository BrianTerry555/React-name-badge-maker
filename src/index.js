import React from "react";
import ReactDOM from "react-dom";


//import css
import "./css/index.css";


//import components
import Header from "./components/header.js";
import NamesContainer from "./containers/names-container.js";
import Badge from "./components/badge.js"

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          <NamesContainer />
          <Badge />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector("#root"));
