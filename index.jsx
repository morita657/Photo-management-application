import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App.jsx";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer, initialState } from "./src/redux.js";

// Provider is given the store as a prop
const store = createStore(reducer, initialState);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
