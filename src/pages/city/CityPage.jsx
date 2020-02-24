import React, {Component} from "react";
import {Container, Row} from "react-bootstrap";
import CityForm from "./components/CityForm";
import CityTable from "./components/CityTable";
import {CREATE_CITY, LIST_CITIES, REMOVE_CITY} from "./cityService";

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
    const result = await LIST_CITIES();
    if (result) {
      this.setState({
        cities: result
      });
    }
  };

  removeCity = async cityId => {
    const { cities: data } = this.state;
    await REMOVE_CITY(cityId);

    this.setState({
      cities: data.filter(city => {
        return city.id !== cityId;
      })
    });
  };

  handleSubmit = async city => {
    const body = {
      name: city.name,
      countryCode: city.countryCode
    };
    const result = await CREATE_CITY(body);

    if (result) {
      this.setState({ cities: [...this.state.cities, result] });
    }
  };

  render() {
    const { cities: data } = this.state;

    return (
      <Container fluid={true}>
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

export default CityPage;
