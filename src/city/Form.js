import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: "",
      countryCode: ""
    };

    this.state = this.initialState;
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
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
      <form onSubmit={this.onFormSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={cityName}
          onChange={this.handleChange}
        />
        <label>Country</label>
        <input
          type="text"
          name="countryCode"
          value={code}
          onChange={this.handleChange}
        />
        <button type="submit">Add city</button>
      </form>
    );
  }
}

export default Form;
