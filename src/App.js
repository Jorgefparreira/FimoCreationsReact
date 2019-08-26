import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";
import MainView from "./components/main_view";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <MainView />
        </Router>{" "}
      </div>
    );
  }
}

export default App;
