import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { GithubContextProvider } from "./context/githubContext";
import { AlertContextProvider } from "./context/alertContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GithubContextProvider>
      <AlertContextProvider>
        <Router>
          <App />
        </Router>
      </AlertContextProvider>
    </GithubContextProvider>
  </React.StrictMode>
);
