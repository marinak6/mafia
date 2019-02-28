import React, { Component } from "react";
import "./Main.css";
import Welcome from "./Welcome";
import Newgame from "./Newgame";
import Joingame from "./Joingame";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "welcome",
      name: null,
      gameCode: null,
      host: false
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
        return <Welcome state={this.state} updateState={this.updateState} />;
      case "newgame":
        return <Newgame state={this.state} updateState={this.updateState} />;
      case "joingame":
        return <Joingame state={this.state} updateState={this.updateState} />;
    }
  }
}
