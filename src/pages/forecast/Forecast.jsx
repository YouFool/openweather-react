import React, { Component } from "react";
import {
  Container,
  Col,
  Row,
  Accordion,
  Spinner,
  Button
} from "react-bootstrap";
import DayForecast from "./components/DayForecast";
import { GET_CITY_FORECAST } from "./forecastService";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = { forecast: [] };
  }

  componentDidMount() {
    this.getFiveDayForecast();
  }

  getFiveDayForecast = async () => {
    const cityId = this.props.match.params.cityId;
    const result = await GET_CITY_FORECAST(cityId);
    if (result) {
      this.setState({ forecast: result });
    }
  };

  render() {
    const forecasts = this.state.forecast;
    if (forecasts.length === 0) {
      return (
        <Container className={"text-center"}>
          <Spinner animation="border" variant="primary" />
        </Container>
      );
    }

    return (
      <Container fluid={true}>
        <Row>
          <Col>
            <h1>Previsão do tempo</h1>
          </Col>
        </Row>
        <Accordion defaultActiveKey={0}>
          {this.renderDailyForecasts(forecasts)}
        </Accordion>
        <br />
        <Button size={"lg"} variant="outline-primary">
          <Link to="/">Voltar</Link>
        </Button>
      </Container>
    );
  }

  renderDailyForecasts(forecasts) {
    const currentDate = dayjs();

    return forecasts.data.map((forecast, index) => {
      return (
        <DayForecast
          key={index}
          eventKey={index}
          date={currentDate.add(index, "day")}
          forecast={forecast}
        />
      );
    });
  }
}

export default Forecast;
