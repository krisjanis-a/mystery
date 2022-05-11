import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import { setUser } from "./store/User/User.action";

const getUser = () => {
    fetch("/collections/user/me")
        .then((response) => response.json())
        .then((data) => {
            store.dispatch(setUser(data));
        });
};

getUser();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("collections-app")
);
