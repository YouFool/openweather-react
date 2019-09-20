import React, { Component } from "react";
import Table from "./city/Table";
import Form from "./city/Form";
import { Container, Row } from "react-bootstrap";

class App extends Component {
  state = {
    cities: []
  };

  removeCity = id => {
    const { cities: data } = this.state;
    debugger;

    this.setState({
      data: data.filter(city => {
        return city.id !== id;
      })
    });
  };

  handleSubmit = city => {
    this.setState({ cities: [...this.state.cities, city] });
  };

  render() {
    const { cities: data } = this.state;

    return (
      <Container>
        <Row><h1>City List</h1></Row>
        <Row><p>Add a city with a name and country code to the table.</p></Row>
        <Row><h3>Add New</h3></Row>
        <Form handleSubmit={this.handleSubmit} />
        <br></br>
        <Table cityData={data} removeCity={this.removeCity} />
      </Container>
    );
  }
}

export default App;
