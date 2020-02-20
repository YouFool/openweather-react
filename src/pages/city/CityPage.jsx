import React, { Component } from "react";
import { Container, Row, Toast } from "react-bootstrap";
import CityForm from "./components/CityForm";
import CityTable from "./components/CityTable";
import { get, remove, post } from "../../common/apiService";

class CityPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      weatherData: []
    };
  }

  componentDidMount() {
    this.listCities();
  }

  listCities = async () => {
    const result = await get("http://localhost:8086/city");
    if (result) {
      this.setState({
        cities: result
      });
    }
  };

  getCityWeather = async cityId => {
    const weatherData = await get(
      "http://localhost:8086/weather/city/" + cityId
    );
    return (
      <Toast>
        <Toast.Header>
          <p>Temperature is</p>
        </Toast.Header>
        <Toast.Body>
          <p>
            Temperature: {this.toCelsius(weatherData.cityStats.temperature)}
          </p>
          <p>
            Maximum temperature:{" "}
            {this.toCelsius(weatherData.cityStats.maximumTemperature)}
          </p>
          <p>
            Minimum temperature:{" "}
            {this.toCelsius(weatherData.cityStats.minimumTemperature)}
          </p>
        </Toast.Body>
      </Toast>
    );
  };

  toCelsius = number => {
    return number + "°C";
  };

  removeCity = async id => {
    const { cities: data } = this.state;
    await remove("http://localhost:8086/city/" + id);

    this.setState({
      cities: data.filter(city => {
        return city.id !== id;
      })
    });
  };

  handleSubmit = async city => {
    const body = {
      name: city.name,
      countryCode: city.countryCode
    };
    const result = await post("http://localhost:8086/city", body);

    if (result) {
      this.setState({ cities: [...this.state.cities, result] });
    }
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
        <CityTable
          cityData={data}
          removeCity={this.removeCity}
          onClick={this.getCityWeather}
        />
      </Container>
    );
  }
}

export default CityPage;
