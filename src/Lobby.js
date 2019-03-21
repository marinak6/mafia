import firebase from "./Firebase.js";
import React, { Component } from "react";
import "./Main.css";
import { Button, Form, Input, Radio, message } from "antd";

export default class Newgame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            creatorName: this.props.state.creatorName,
            setting: "",
            gameCode: this.props.state.gameCode
        };
    }


    render() {
        return (
            <div>
                <div className="page-header" style={{ "font-size": "40px" }}> Welcome to the Lobby </div>
                <br />
                <center>
                    <div className="sub-header" style={{ "color": "#ff0000" }}> Game Code: {this.state.gameCode} </div>
                </center>
            </div>
        );
    }
}
