import React, { Component } from "react";
import CityTable from "./city/CityTable";
import CityForm from "./city/CityForm";
import { Container, Row } from "react-bootstrap";

class App extends Component {
  state = {
    cities: []
  };

  componentDidMount() {
    const cityListUrl = "http://localhost:8086/city";

    fetch(cityListUrl)
      .then(result => result.json())
      .then(result => {
        this.setState({
          cities: result
        });
      })
      .catch(console.log);
  }

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
        <Row>
          <h1>City List</h1>
        </Row>
        <Row>
          <p>Add a city with a name and country code to the table.</p>
        </Row>
        <CityForm handleSubmit={this.handleSubmit} />
        <br />
        <CityTable cityData={data} removeCity={this.removeCity} />
      </Container>
    );
  }
}

export default App;
