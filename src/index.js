import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import GlobalStyles from "/src/assets/styles/GlobalStyles";
// import Typography from "/src/assets/styles/Typography";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <GlobalStyles />

    <App />
  </Router>,
  document.getElementById("root")
);
