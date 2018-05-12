import React, { Component } from "react";
import ReactDOM from "react-dom";

class Title extends Component {
    constructor(props) {
        super(props);
    }
    get uploadButtonSwitch() {
        if (this.props.view === "ShowAllPhoto") {
            return <button onClick={() => this.props.showUploadPhoto()}>UPLOAD</button>;
        }
    }
    render() {
        return (
            <div>
                <button onClick={() => this.props.showAllphoto()}>HOME</button>
                <h1>INSTA-HACK - The Hacky Instagram!</h1>
                {this.uploadButtonSwitch}
            </div>
        );
    }
}
export default Title;