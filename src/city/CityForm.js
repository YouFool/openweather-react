import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";

class CityForm extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: "",
      countryCode: ""
    };

    this.state = this.initialState;
  }

  handleChange = event => {
    const { id, value } = event.target;

    this.setState({
      [id]: value
    });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { name: cityName, countryCode: code } = this.state;

    return (
      <Form onSubmit={this.onFormSubmit}>
        <Form.Row>
          <Col>
            <Form.Control
              as="input"
              placeholder="City name ex: Blumenau"
              value={cityName}
              id="name"
              onChange={this.handleChange}
            />
          </Col>
          <Col>
            <Form.Control
              as="input"
              placeholder="Country code ex: BR"
              value={code}
              id="countryCode"
              onChange={this.handleChange}
            />
          </Col>
          <Button variant="primary" type="submit">
            Add city
          </Button>
        </Form.Row>
      </Form>
    );
  }
}

export default CityForm;
