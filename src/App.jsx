import React, { Component } from "react";
import ReactDOM from "react-dom";
import Title from "./Title.jsx";
import AllPhoto from "./AllPhoto.jsx";
import SinglePhoto from "./SinglePhoto.jsx";

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

    }
    showAllphoto() {
        return this.setState({ view: 'ShowAllPhoto' });
    };
    showSinglephoto() {
        console.log('hi');
        // return;
        return this.setState({ view: 'ShowSinglePhoto' });
    };
    showSelectedPhoto(id) {
        const newState = this.setState({ id });
        return newState;
    }
    get currentView() {
        if (this.state.view === "ShowAllPhoto") {
            return (<AllPhoto photos={this.state.photos} showSelectedPhoto={this.showSelectedPhoto} />);
        }
        if (this.state.view === "ShowSinglePhoto") {
            return (<SinglePhoto />);
        }
    }
    render() {
        return (
            <div>
                <Title showSinglephoto={this.showSinglephoto} />
                {this.currentView}
                {/* <AllPhoto photos={this.state.photos} showSelectedPhoto={this.showSelectedPhoto} /> */}
            </div>
        );
    }
}
export default App;