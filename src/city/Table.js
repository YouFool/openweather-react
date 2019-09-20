import React, { Component } from "react";

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
      <tr key={city.id}>
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

class Table extends Component {
  render() {
    const { cityData, removeCity } = this.props;

    return (
      <table>
        <TableHeader />
        <TableBody cityData={cityData} removeCity={removeCity} />
      </table>
    );
  }
}

export default Table;
