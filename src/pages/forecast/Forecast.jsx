import React, { Component } from "react";
import {
  Container,
  Col,
  Row,
  Accordion,
  Spinner
} from "react-bootstrap";
import DayForecast from "./components/DayForecast";
import { GET_CITY_FORECAST } from "./forecastService";
import dayjs from "dayjs";

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
      console.log("result", result);
      this.setState({ forecast: result });
    }
  };

  render() {
    if (this.state.forecast.length === 0) {
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
        <Accordion defaultActiveKey="0">{this.renderDayForecasts()}</Accordion>
      </Container>
    );
  }

  renderDayForecasts() {
    const currentDate = dayjs();

    return Array.from(Array(5)).map((_, i) => {
      return <DayForecast eventKey={i} date={currentDate.add(i, "day")} />;
    });
  }
}

export default Forecast;
