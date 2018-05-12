import React, { Component } from "react";
import ReactDOM from "react-dom";

class Title extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <button onClick={() => this.props.showAllphoto()}>HOME</button>
                <h1>INSTA-HACK - The Hacky Instagram!</h1>
                <button onClick={() => this.props.showUploadPhoto()}>UPLOAD</button>
            </div>
        );
    }
}
export default Title;