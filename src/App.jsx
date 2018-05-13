import React, { Component } from "react";
import ReactDOM from "react-dom";
import Title from "./Title.jsx";
import AllPhoto from "./AllPhoto.jsx";
import SinglePhoto from "./SinglePhoto.jsx";
import UploadPhoto from "./UploadPhoto.jsx";
import { connect } from "react-redux";
class App extends Component {
    get currentView() {
        if (this.props.view === "ShowAllPhoto") {
            return (<AllPhoto />);
        }
        if (this.props.view === "ShowSinglePhoto") {
            return (<SinglePhoto />);
        }
        if (this.props.view === "UploadPhoto") {
            return (<UploadPhoto />);
        }
    }
    render() {
        return (
            <div>
                <Title />
                {this.currentView}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return ({ view: state.view });
};
export default connect(mapStateToProps)(App);