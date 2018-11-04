import React, { Component } from "react";
import "./Main.css";
import { Button, Form, Input, Radio, message } from "antd";

export default class Newgame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creatorName: "",
      setting: ""
    };
  }

  pushGameCode = () => {
    // get the current codes
    let currentCodes = [];
    firebase
      .database()
      .ref("games")
      .on("value", snapshot => {
        snapshot.forEach(child => {
          currentCodes.push(child.val());
        });
      });

    // get the code
    let code = this.getGameCode();
    while (currentCodes.includes(code)) {
      code = this.getGameCode;
    }
    console.log(code);
    // add the code to firebase
    firebase
      .database()
      .ref("games")
      .update(code);
  };

  getGameCode = () => {
    return;
    Math.random()
      .toString(36)
      .substring(2, 15) +
      Math.random()
        .toString(36)
        .substring(2, 15);
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.creatorName === "") {
      message.warning("Please enter your name.");
    } else if (this.state.setting === "") {
      message.warning("Please choose a setting.");
    } else {
      return;
    }
  };

  render() {
    const radioStyle = {
      display: "block",
      height: "30px",
      lineHeight: "30px"
    };

    return (
      <div>
        <div className="page-header">Create a New Game</div>
        <div className="newgame-form">
          <Form>
            <Form.Item>
              <Input
                onChange={e => this.setState({ creatorName: e.target.value })}
                placeholder="Your Name"
              />
            </Form.Item>

            <div className="sub-header">Setting:</div>
            <Form.Item>
              <Radio.Group
                onChange={e => this.setState({ setting: e.target.value })}
              >
                <Radio style={radioStyle} value="camp-ground">
                  Camp Ground
                </Radio>
                <Radio style={radioStyle} value="submarine">
                  Submarine
                </Radio>
                <Radio style={radioStyle} value="arctic">
                  Arctic Research Laboratory
                </Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item className="newgame-buttons">
              <Button
                type="primary"
                className="create-game-button"
                onClick={e => this.handleSubmit(e)}
              >
                Create Game
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
