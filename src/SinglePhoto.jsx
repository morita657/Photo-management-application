import React, { Component } from "react";
import ReactDOM from "react-dom";
import moment from "moment";

class SinglePhoto extends Component {
    constructor(props) {
        super(props);
    }
    get timeConvert() {
        const date = moment(this.props.photo["timestamp"]);
        console.log(this.props.photo["timestamp"]);
        const timeFormat = date.utc().format('YYYY-MM-DD');
        console.log(timeFormat);
        return date.from(moment("2018-05-12"));
    }
    render() {
        return (
            <div>
                <img src={this.props.photo["photoPath"]} />
                <p>username: <span>{this.props.photo["username"]}</span></p>
                <p>{this.timeConvert}</p>
            </div>
        );
    }
}
export default SinglePhoto;