import React from "react";
import { Accordion, Button, Card, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";

const DayForecast = props => {
  const temperatureStats = props.forecast.stats;
  const weather = props.forecast.weather[0];

  return (
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey={props.eventKey}>
          {props.date.format("DD/MM/YYYY") +
            " - " +
            weather.main +
            ": " +
            weather.description}
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={props.eventKey}>
        <Card.Body>
          <Row>
            <Col>
              <p>Temperature: {temperatureStats.temperature}</p>
              <p>Min temperature: {temperatureStats.minimumTemperature}</p>
              <p>Max temperature: {temperatureStats.maximumTemperature}</p>
            </Col>
          </Row>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

DayForecast.propTypes = {
  eventKey: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  forecast: PropTypes.array.isRequired
};

export default DayForecast;
