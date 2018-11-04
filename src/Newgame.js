import firebase from "./Firebase.js";
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
  // submit necessary data onto firebase to create the game
  // create game button
  pushData = () => {
    // get game code
    let code = this.getGameCode();

    let newPostKey = firebase
      .database()
      .ref("games")
      .push().key;
    let game = {
      code: code,
      creator: this.state.creatorName,
      setting: this.state.setting
    };
    let updates = {};
    updates[newPostKey] = game;
    return firebase
      .database()
      .ref("games")
      .update(updates);
  };

  // generate a random code
  getGameCode = () => {
    let exists = true;
    let code = "";
    while (exists) {
      code = (
        Math.random()
          .toString(32)
          .substring(2, 15) +
        Math.random()
          .toString(32)
          .substring(2, 15)
      ).substring(0, 5);
      // make sure code does not exist in firebase
      exists = this.codeExists(code);
    }
    return code;
  };

  // check if code exists in firebase (an active game uses this code)
  codeExists = code => {
    firebase
      .database()
      .ref("games")
      .on("value", snapshot => {
        snapshot.forEach(child => {
          if (child.val() === code) {
            return true;
          }
        });
      });
    return false;
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
                onClick={e => {
                  this.handleSubmit(e);
                  this.pushData();
                }}
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
