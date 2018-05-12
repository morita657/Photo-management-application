import React, { Component } from "react";
import ReactDOM from "react-dom";
import Title from "./Title.jsx";
import AllPhoto from "./AllPhoto.jsx";
import SinglePhoto from "./SinglePhoto.jsx";
import UploadPhoto from "./UploadPhoto.jsx";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: ["http://via.placeholder.com/350x150", "http://via.placeholder.com/350x150", "http://via.placeholder.com/350x150"],
            selectedPhoto: "",
            id: 0,
            view: "ShowAllPhoto"
        }
        this.showAllphoto = this.showAllphoto.bind(this);
        this.showSinglephoto = this.showSinglephoto.bind(this);
        this.showSelectedPhoto = this.showSelectedPhoto.bind(this);
        this.showUploadPhoto = this.showUploadPhoto.bind(this);
        this.uploadPhoto = this.uploadPhoto.bind(this);
    }
    showAllphoto() {
        return this.setState({ view: 'ShowAllPhoto' });
    };
    showSinglephoto() {
        return this.setState({ view: 'ShowSinglePhoto' });
    };
    showUploadPhoto() {
        return this.setState({ view: 'UploadPhoto' });
    };
    showSelectedPhoto(id) {
        const newState = this.setState({ id });
        this.showSinglephoto();
        return newState;
    }
    uploadPhoto(file, name) {
        const storage = localStorage.getItem("insta-hack");
        const photoInfo = { "username": name, "photoPath": file[0]["name"], "timestamp": new Date() };
        if (storage === null) {
            localStorage.setItem("insta-hack", JSON.stringify([photoInfo]));
        }
        else {
            // convert storage value into array and push new value
            const updatedData = JSON.parse(storage)
            updatedData.push(photoInfo);
            localStorage.setItem("insta-hack", JSON.stringify(updatedData));
        }
    }
    get currentView() {
        if (this.state.view === "ShowAllPhoto") {
            return (<AllPhoto photos={this.state.photos} showSelectedPhoto={this.showSelectedPhoto} />);
        }
        if (this.state.view === "ShowSinglePhoto") {
            return (<SinglePhoto photo={this.state.photos[this.state.id]} />);
        }
        if (this.state.view === "UploadPhoto") {
            return (<UploadPhoto uploadPhoto={this.uploadPhoto} showAllphoto={this.showAllphoto} />);
        }
    }
    render() {
        return (
            <div>
                <Title showAllphoto={this.showAllphoto} uploadPhoto={this.uploadPhoto} showUploadPhoto={this.showUploadPhoto} />
                {this.currentView}
            </div>
        );
    }
}
export default App;