import React, { Component } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

class MainView extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Footer />
      </div>
    );
  }
}

export default MainView;
