import React, { Component } from "react";
import ReactDOM from "react-dom";
import Title from "./Title.jsx";
import AllPhoto from "./AllPhoto.jsx";
import SinglePhoto from "./SinglePhoto.jsx";
import UploadPhoto from "./UploadPhoto.jsx";
import { connect } from "react-redux";
class App extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.getPhotos = this.getPhotos.bind(this);
    //     // this.showAllphoto = this.showAllphoto.bind(this);
    //     // this.showSinglephoto = this.showSinglephoto.bind(this);
    //     // this.showSelectedPhoto = this.showSelectedPhoto.bind(this);
    //     // this.showUploadPhoto = this.showUploadPhoto.bind(this);
    //     // this.uploadPhoto = this.uploadPhoto.bind(this);
    //     // this.deletePhoto = this.deletePhoto.bind(this);
    // }

    // showUploadPhoto() {
    //     return this.setState({ view: 'UploadPhoto' });
    // };
    // uploadPhoto(file, name) {
    //     const storage = localStorage.getItem("insta-hack");
    //     const photoInfo = { "username": name, "photoPath": file, "timestamp": new Date() };
    //     if (storage === null) {
    //         localStorage.setItem("insta-hack", JSON.stringify([photoInfo]));
    //     }
    //     else {
    //         // convert storage value into array and push new value
    //         const updatedData = JSON.parse(storage)
    //         updatedData.push(photoInfo);
    //         localStorage.setItem("insta-hack", JSON.stringify(updatedData));
    //     }
    //     return this.setState({ photos: JSON.parse(storage) });
    // }
    // deletePhoto(id) {
    //     const storage = localStorage.getItem("insta-hack");
    //     const raw = JSON.parse(storage);
    //     raw.splice(id, 1);
    //     localStorage.setItem("insta-hack", JSON.stringify(raw));
    //     this.showAllphoto();
    // }
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
    return ({ view: state.view, });
};
export default connect(mapStateToProps, )(App);