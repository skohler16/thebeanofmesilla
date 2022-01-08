import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Directory from "./components/DirectoryComponent";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="danger">
          <div className="container">
            <NavbarBrand href="/">The Bean Cafe</NavbarBrand>
          </div>
        </Navbar>
        <Directory />
      </div>
    );
  }
}

export default App;
