import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class MerchInfo extends Component {
  renderMerch({ merch }) {
    if (merch) {
      return (
        <Card>
          <CardImg alt={merch.name} />
          <CardBody>
            <CardTitle>{merch.name}</CardTitle>
            <CardText>
              {merch.price}
              <br />
              {merch.description}
            </CardText>
          </CardBody>
        </Card>
      );
    }
    return <div />;
  }

  render() {
    return <renderMerch />;
  }
}

export default MerchInfo;
