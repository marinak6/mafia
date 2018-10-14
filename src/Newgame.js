import React, { Component } from "react";
import "./Main.css";
import { Button, Form, Input, Icon, RadioGroup, Radio } from "antd";

export default class Newgame extends Component {
  render() {
    return (
      <div>
        <div className="page-header">Create a New Game</div>
        <div className="newgame-form">
          <Form>
            <Form.Item label="Name:">
              <Input
                prefix={
                  <Icon type="smile" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Name"
              />
            </Form.Item>
            <Form.Item label="Setting:">
              <Radio.Group>
                <Radio value="camp-ground">Camp Ground</Radio>
                <Radio value="submarine">Submarine</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item>
              <Button type="primary" className="create-game-button">
                Create Game
              </Button>
              <Button>Back</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
