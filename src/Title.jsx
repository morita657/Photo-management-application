import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

class Title extends Component {
    get uploadButtonSwitch() {
        if (this.props.view === "ShowAllPhoto") {
            return <li id="upload" onClick={() => this.props.showUploadPhoto()}>UPLOAD</li>;
        }
    }
    // get getPhotos() {
    //     const storage = localStorage.getItem("insta-hack");
    //     if (storage !== null) {
    //         return JSON.parse(storage);
    //     }
    // }
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
const mapDispatchToProps = (dispatch) => {
    const storage = localStorage.getItem("insta-hack");
    return {
        showAllphoto: (e) => {
            return dispatch({ type: "ShowAllPhoto" })
        },
        showUploadPhoto: () => {
            return dispatch({ type: "UploadPhoto" })
        }
    };
};
const mapStateToProps = (state) => {
    return ({ view: state.view })
};
export default connect(mapStateToProps, mapDispatchToProps)(Title);