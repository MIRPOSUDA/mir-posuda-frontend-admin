import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./custom-toastify.css";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import "./i18n";

const theme = localStorage.getItem("flowbite-theme-mode");

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <ToastContainer theme={theme ? theme : "light"} stacked />
  </Provider>,
);
