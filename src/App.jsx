import React, { Component } from "react";
import ReactDOM from "react-dom";
import Title from "./Title.jsx";
import AllPhoto from "./AllPhoto.jsx";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: ["http://via.placeholder.com/350x150", "http://via.placeholder.com/350x150", "http://via.placeholder.com/350x150"],
            selectedPhoto: "",
            id: 0
        }
    }
    showAllphoto() {
        this.currentView = 'ShowAllPhoto'
    };
    render() {
        return (
            <div>
                <Title />
                <AllPhoto photos={this.state.photos} showSelectedPhoto={this.showSelectedPhoto} />
            </div>
        );
    }
}
export default App;