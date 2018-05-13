import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

class AllPhoto extends Component {
    // get showPhotos() {
    //     const storage = localStorage.getItem("insta-hack");
    //     if (storage !== null) {
    //         // this.setState({ photos: JSON.parse(storage) });
    //         return JSON.parse(storage).map((photo, id) => {
    //             return <img src={photo["photoPath"]} key={id} width="350" height="150" onClick={() => this.props.showSelectedPhoto(id)} />
    //         })
    //     }
    // }
    // showAllphoto() {
    //     const storage = localStorage.getItem("insta-hack");
    //     if (storage !== null) {
    //         this.setState({ photos: JSON.parse(storage) });
    //     }
    //     // return this.setState({ view: 'ShowAllPhoto' });
    // };
    // getPhotos() {
    //     const storage = localStorage.getItem("insta-hack");
    //     // if (storage !== null) {
    //     // return this.setState({ photos: JSON.parse(storage) });
    //     return JSON.parse(storage);
    //     // this.props.photos = JSON.parse(storage);
    //     // }
    // }
    // componentDidMount() {
    //     return this.getPhotos();
    // }
    showSinglephoto() {
        return this.setState({ view: 'ShowSinglePhoto' });
    };
    showSelectedPhoto(id) {
        const newState = this.setState({ id });
        this.showSinglephoto();
        return newState;
    }
    render() {
        return (
            <div>
                {this.props.photos.map((photo, id) => {
                    return <img src={photo["photoPath"]} key={id} width="350" height="150" onClick={() => this.props.showSelectedPhoto(id)} />
                })}
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        showSelectedPhoto: (event) => {
            return dispatch({ type: "ShowSinglePhoto", id: event, });
        },
    };
};
const mapStateToProps = (state) => {
    return ({ view: state.view, photos: state.photos });
};
export default connect(mapStateToProps, mapDispatchToProps)(AllPhoto);