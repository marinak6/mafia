import React, { Component } from "react";
import logo from "./logo.svg";
import "./Main.css";
import Welcome from "./Welcome";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "welcome"
    };
  }

  render() {
    if (this.state.currentPage === "welcome") return <Welcome />;
    else {
      return <div>other stuff</div>;
    }
  }
}
