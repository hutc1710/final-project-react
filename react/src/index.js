import { store } from "./store/auth.redux";
import React from "react";
import ReactDOM from "react-dom/client";

import axios from "axios";
import { BrowserRouter } from "react-router-dom";
// add bootstrap to react
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
//react-toastify
import "react-toastify/dist/ReactToastify.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

//axios config
//axios will add this url to each request if the url is not full
axios.defaults.baseURL = "http://localhost:3003";

//axios will add this config to each request
axios.interceptors.request.use((config) => {
  //get token from local storage
  const token = localStorage.getItem("tokenKey");
  //chack if there is token in local storage
  if (token) {
    //add token to headers for secure routes
    config.headers["x-user-token"] = token;
  }
  //data format
  config.headers["Content-Type"] = "application/json";
  return config;
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
