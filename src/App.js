import React, { Component } from "react";
import CityTable from "./city/CityTable";
import CityForm from "./city/CityForm";
import { Container, Row } from "react-bootstrap";

class App extends Component {
  state = {
    cities: []
  };

  componentDidMount() {
    fetch("http://localhost:8086/city")
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

    fetch("http://localhost:8086/city/" + id, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(apply => {
        this.setState({
          cities: data.filter(city => {
            return city.id !== id;
          })
        });
      })
      .catch(console.log);
  };

  handleSubmit = city => {
    fetch("http://localhost:8086/city", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: city.name,
        countryCode: city.countryCode
      })
    })
      .then(result => result.json())
      .then(resultCity => {
        this.setState({ cities: [...this.state.cities, resultCity] });
      })
      .catch(console.log);
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
