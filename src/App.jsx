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
        this.deletePhoto = this.deletePhoto.bind(this);
    }
    showAllphoto() {
        return this.setState({ view: 'ShowAllPhoto' });
    };
    componentDidMount() {
        const storage = localStorage.getItem("insta-hack");
        if (storage !== null) {
            return this.setState({ photos: JSON.parse(storage) });
        }
    }
    showSinglephoto() {
        return this.setState({ view: 'ShowSinglePhoto' });
    };
    showUploadPhoto() {
        return this.setState({ view: 'UploadPhoto' });
    };
    showSelectedPhoto(id) {
        console.log('id', id);

        const newState = this.setState({ id });
        this.showSinglephoto();
        return newState;
    }
    uploadPhoto(file, name) {
        const storage = localStorage.getItem("insta-hack");
        const photoInfo = { "username": name, "photoPath": file, "timestamp": new Date() };
        if (storage === null) {
            localStorage.setItem("insta-hack", JSON.stringify([photoInfo]));
        }
        else {
            // convert storage value into array and push new value
            const updatedData = JSON.parse(storage)
            updatedData.push(photoInfo);
            localStorage.setItem("insta-hack", JSON.stringify(updatedData));
        }
        return this.setState({ photos: JSON.parse(storage) });
    }
    deletePhoto(id) {
        const storage = localStorage.getItem("insta-hack");
        const raw = JSON.parse(storage);
        raw.splice(id, 1);
        localStorage.setItem("insta-hack", JSON.stringify(raw));
        this.showAllphoto();
    }
    get currentView() {
        if (this.state.view === "ShowAllPhoto") {
            return (<AllPhoto photos={this.state.photos} showSelectedPhoto={this.showSelectedPhoto} />);
        }
        if (this.state.view === "ShowSinglePhoto") {
            return (<SinglePhoto photo={this.state.photos[this.state.id]} deletePhoto={this.deletePhoto} id={this.state.id} />);
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