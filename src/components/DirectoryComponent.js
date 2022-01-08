import React, { Component } from "react";

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [
        {
          id: 0,
          name: "The Bean Coffee House Of Mesilla",
          images: "/assets/images/TheBeanStoreFront.jpeg",
          featured: true,
          address: "2011 Avenida de Mesilla, Las Cruces, NM 88005",
        },
        {
          id: 1,
          name: "The Bean Cafe at the old gate",
          images: "/assets/images/josefinaOldGate.jpeg",
          features: false,
          address: "2261 Calle De Guadalupe, Mesilla, NM 88046",
        },
      ],
    };
  }
  render() {
    const directory = this.state.locations.map((location) => {
      return (
        <div key={location.id} className="col mt-5">
          <img src={location.images} />
          <h2>{location.name}</h2>
          <p>{location.address}</p>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{directory}</div>
      </div>
    );
  }
}

export default Directory;
