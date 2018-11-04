import React, { Component } from "react";
import "./Main.css";
import firebase from "./Firebase.js";
import { Button, Form, Input, Icon, RadioGroup, Radio } from "antd";

export default class Newgame extends Component {
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
              <Input placeholder="Your Name" />
            </Form.Item>

            <div className="sub-header">Setting:</div>
            <Form.Item>
              <Radio.Group>
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
                onClick={() => this.pushGameCode()}
                className="create-game-button"
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
