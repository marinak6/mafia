import firebase from "./Firebase.js";
import React, { Component } from "react";
import "./Main.css";
import { Button, Form, Input, Radio, message } from "antd";

export default class Newgame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            creatorName: "",
            setting: "",
            gameCode: ""
        };
    }


    render() {
        return (
            <div>
                This is the lobby B-)
                <br />
                {this.props.state.gameCode}
                {this.props.state.name}
            </div>
        );
    }
}
