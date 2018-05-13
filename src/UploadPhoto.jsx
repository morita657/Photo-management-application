import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

class UploadPhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            url: "",
        }
    }
    getUsername(username) {
        return this.setState({ username })
    }
    getUrl(url) {
        return this.setState({ url })
    }
    render() {
        return (
            <div>
                <label htmlFor="username">USERNAME: </label>
                <input type="text" id="usrename" onChange={(e) => this.getUsername(e.target.value)} />
                <label htmlFor="url">Photo URL: </label>
                <input type="text" name="" id="url" placeholder="Input photo url" onChange={(e) => this.getUrl(e.target.value)} />
                <button onClick={() => this.props.uploadPhotoF(this.state.username, this.state.url)} >Submit</button>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        showAllphoto: () => {
            return dispatch({ type: "ShowAllPhoto" });
        },
        uploadPhotoF: (username, url) => {
            return dispatch({ type: "UploadPhoto", username, url });
        }
    };
};
const mapStateToProps = (state) => {
    return ({ view: state.view, photos: state.photos })
};
export default connect(mapStateToProps, mapDispatchToProps)(UploadPhoto);
