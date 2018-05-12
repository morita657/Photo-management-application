import React, { Component } from "react";
import ReactDOM from "react-dom";

class UploadPhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        }
        this.getUsername = this.getUsername.bind(this);
    }
    getUsername(username) {
        return this.setState({ username })
    }
    render() {
        return (
            <div>
                <label htmlFor="username">USERNAME: </label>
                <input type="text" id="usrename" onChange={(e) => this.getUsername(e.target.value)} />
                <input type="file" name="" id="" onChange={(e) => this.props.uploadPhoto(e.target.files, this.state.username)} />
                <button onClick={() => this.props.showAllphoto()} >Submit</button>
            </div>
        );
    }
}
export default UploadPhoto;

