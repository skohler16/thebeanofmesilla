import React, { Component } from "react";
import Header from "./HeaderComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default Main;
