import React, { Component } from "react";
import ReactDOM from "react-dom";

class SinglePhoto extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <img src={this.props.photo} />
            </div>
        );
    }
}
export default SinglePhoto;