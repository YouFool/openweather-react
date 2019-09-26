import React, { Component } from "react";
import { Table } from "react-bootstrap";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Country</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  const rows = props.cityData.map(city => {
    return (
      // <tr key={city.id} onClick={() => props.getCityWeather(city.id)}>
      <tr key={city.id} onClick={() => props.getCityWeather(city.id)}>
        <td>{city.name}</td>
        <td>{city.countryCode}</td>
        <td>
          <button onClick={() => props.removeCity(city.id)}>Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

class CityTable extends Component {
  render() {
    const { cityData, removeCity } = this.props;

    return (
      <Table hover="true">
        <TableHeader />
        <TableBody cityData={cityData} removeCity={removeCity} />
      </Table>
    );
  }
}

export default CityTable;
