import React from "react";
import { Accordion, Button, Card } from "react-bootstrap";

const DayForecast = props => {
  return (
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey={props.eventKey}>
          {props.date.format("DD/MM/YYYY")}
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={props.eventKey}>
        <Card.Body>
            Previsão
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default DayForecast;
