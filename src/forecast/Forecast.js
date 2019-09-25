import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";

const Forecast = () => {
  //TODO: deals with API data
  return "";
};

class FiveDayForecast extends Component {
  constructor(props) {
    super(props);
    this.state = { forecast: [] };
  }

  componentDidMount() {
    const forecastUrl = ""; //TODO: service URL

    fetch(forecastUrl)
      // .then(result => result.json())
      .then(result => {
        this.setState({
          forecast: result
        });
      });
  }

  render() {
    //TODO: insert a <Forecast> component inside each <Col>
    return (
      <Container>
        <Row>
          <Col xs={3}>hey, i'm a xs-3 column</Col>
          <Col xs={3}>hey, i'm a xs-3 column</Col>
          <Col xs={3}>hey, i'm a xs-3 column</Col>
          <Col xs={3}>hey, i'm a xs-3 column</Col>
          <Col xs={3}>hey, i'm a xs-3 column</Col>
        </Row>
      </Container>
    );
  }
}

export default FiveDayForecast;
