import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class Directory extends Component {
  onLocationSelect(location) {
    if (location) {
      <Card>
        <CardBody>
          <CardTitle>{location.name}</CardTitle>
          <CardText>{location.address}</CardText>
        </CardBody>
      </Card>;

      return <div />;
    }
  }
  render() {
    const directory = this.props.locations.map((location) => {
      return (
        <div key={location.id} className="col mt-5 md-5">
          <Card onClick={() => this.onLocationSelect(location)}>
            <CardImg width="100%" src={location.images} alt={location.name} />
            <CardImgOverlay>
              <CardTitle>{location.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          {directory}
          <div className="col">
            <div className="col-md-5 m-1">
              {/* {this.render.selectedLocation(this.state.selectedLocation)} */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Directory;
