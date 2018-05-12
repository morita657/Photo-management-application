import React, { Component } from "react";
import ReactDOM from "react-dom";

class Title extends Component {
    constructor(props) {
        super(props);
    }
    get uploadButtonSwitch() {
        if (this.props.view === "ShowAllPhoto") {
            return <li id="upload" onClick={() => this.props.showUploadPhoto()}>UPLOAD</li>;
        }
    }
    render() {
        return (
            <div className="title-bar">
                <ul>
                    <li id="home" onClick={() => this.props.showAllphoto()}>HOME</li>
                    <li id="title">INSTA-HACK - The Hacky Instagram!</li>
                    {this.uploadButtonSwitch}
                </ul>
            </div>
        );
    }
}
export default Title;