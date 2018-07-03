import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

class AllPhoto extends Component {
  constructor(props) {
    super(props);
  }
  showSinglephoto() {
    const newState = this.setState({ view: "ShowSinglePhoto" });
    return newState;
  }
  showSelectedPhoto(id) {
    const newState = this.setState({ id });
    this.showSinglephoto();
    return newState;
  }
  render() {
    return (
      <div>
        {this.props.photos.map((photo, id) => {
          return (
            <img
              src={photo["photoPath"]}
              key={id}
              width="350"
              height="150"
              onClick={() => this.props.showSelectedPhoto(id)}
            />
          );
        })}
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    showSelectedPhoto: (event) => {
      return dispatch({ type: "ShowSinglePhoto", id: event });
    },
    getPhotos: () => {
      console.log(this.state.photos);

      return dispatch({ photos: this.state.photos });
    }
  };
};
// After dispatching, still not working...
// const mapDispatchToProps = (dispatch) => {
//     return {
//         getPhotos: () => {
//             return dispatch({ photos: this.state.photos });
//     }
//     // };
// };
const mapStateToProps = (state) => {
  return { view: state.view, photos: state.photos };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPhoto);
