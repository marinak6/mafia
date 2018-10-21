import React, { Component } from "react";
import logo from "./logo.svg";
import "./Main.css";
import Welcome from "./Welcome";
import Newgame from "./Newgame";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "welcome"
    };
  }
  updateState = (field, newValue) => {
    this.setState({
      [field]: newValue
    });
  };

  render() {
    if (this.state.currentPage === "welcome")
      return <Welcome updateState={this.updateState} />;
    else if (this.state.currentPage === "newgame") {
      return <Newgame updateState={this.updateState} />;
    }
  }
}
