import React, { Component } from "react";
import ReactDOM from "react-dom";

class Title extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <button onClick={() => this.props.showSinglephoto()}>HOME</button>
                <h1>INSTA-HACK - The Hacky Instagram!</h1>
            </div>
        );
    }
}
export default Title;