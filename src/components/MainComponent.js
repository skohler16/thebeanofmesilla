import React, { Component } from "react";
import Directory from "./DirectoryComponent";
import { LOCATIONS } from "../shared/locations";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: LOCATIONS,
      selectedLocation: null,
    };
  }
  onLocationSelect(location) {
    this.setState({ selectedLocation: location });
  }

  render() {
    return (
      <div>
        <Header />
        <Directory locations={this.state.locations} />
        {/* <MerchInfo merch={this.state.selectedMerch} /> */}
        <Footer />
      </div>
    );
  }
}

export default Main;
