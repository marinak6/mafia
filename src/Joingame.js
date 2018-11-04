import React, { Component } from "react";
import "./Main.css";
import { Button, Form, Input, Radio, message } from "antd";

export default class Joingame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameCode: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    // Do not let the user advance without entering a game code.
    if (this.state.gameCode === "") {
      message.warning("Please enter a game code.");
    } else {
      return;
    }
  };

  render() {
    return (
      <div>
        <div className="page-header">Join Game</div>
        <div className="joingame-form">
          <Form>
            <Form.Item>
              <Input
                onChange={e => this.setState({ gameCode: e.target.value })}
                placeholder="Game Code"
              />
            </Form.Item>

            <Form.Item className="joingame-buttons">
              <Button
                onClick={e => this.handleSubmit(e)}
                type="primary"
                className="join-game-button"
              >
                Join Game
              </Button>
              <Button
                onClick={() => this.props.updateState("currentPage", "welcome")}
              >
                Back
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
