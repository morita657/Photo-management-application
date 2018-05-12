import React, { Component } from "react";
import ReactDOM from "react-dom";

class AllPhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0
        }
    }
    render() {
        return (
            <div>
                {this.props.photos.map((photo, id) => {
                    return <img src={photo.photoPath} key={id} width="350" height="150" onClick={() => this.props.showSelectedPhoto(id)} />
                })}
            </div>
        );
    }
}
export default AllPhoto;