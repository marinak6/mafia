import React, { Component } from "react";
import "./Main.css";
import { Button } from "antd";

export default class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
        <div className="app-title">Ultimate Mafia</div>
        <div className="new-game-button">
          <Button
            onClick={() => this.props.updateState("currentPage", "newgame")}
          >
            New Game
          </Button>
        </div>
        <div className="join-game-button">
          <Button
            onClick={() => this.props.updateState("currentPage", "joingame")}
          >
            Join Game
          </Button>
        </div>

        <div className="copyright-text">
          Created by Marina Kun and Noah French
        </div>
      </div>
    );
  }
}
