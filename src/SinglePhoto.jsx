import React, { Component } from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import { connect } from "react-redux";

class SinglePhoto extends Component {
    get timeConvert() {
        const date = moment(this.props.photos[this.props.id]["timestamp"]);
        // console.log(this.props.photo["timestamp"]);
        const timeFormat = date.utc().format('YYYY-MM-DD');
        // console.log(timeFormat);
        return date.from(moment("2018-05-12"));
    }
    render() {
        return (
            <div>
                <img id="single-img" src={this.props.photos[this.props.id]["photoPath"]} />
                <p>username: <span>{this.props.photos[this.props.id]["username"]}</span></p>
                <p>{this.timeConvert}</p>
                <button onClick={() => this.props.deletePhoto(this.props.id)}>DELETE</button>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deletePhoto: (e) => {
            return dispatch({ type: "DeletePhoto", id: e });
        }
    };
};
const mapStateToProps = (state) => {
    console.log('SinglePhoto state', state);
    return ({ view: state.view, photos: state.photos, id: state.id })
};
export default connect(mapStateToProps, mapDispatchToProps)(SinglePhoto);