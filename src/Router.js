import React, { Component } from "react";
import logo from "./logo.svg";
import "./Main.css";
import Welcome from "./Welcome";
import Newgame from "./Newgame";
import Joingame from "./Joingame";

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
    switch (this.state.currentPage) {
      case "welcome":
        return <Welcome updateState={this.updateState} />;
      case "newgame":
        return <Newgame updateState={this.updateState} />;
      case "joingame":
        return <Joingame updateState={this.updateState} />;
    }
  }
}
