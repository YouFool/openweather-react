import React, { Component } from 'react';
import Table from './city/Table'
import Form from './city/Form';

class App extends Component {
    state = {
        cities: []
    };

    removeCity = id => {
        const { cities: data } = this.state;
        debugger;
    
        this.setState({
            data: data.filter((city) => { 
                return city.id !== id;
            })
        });
    }

    handleSubmit = city => {
        this.setState({cities: [...this.state.cities, city]});
    }

    render() {
        const { cities: data } = this.state;
        
        return (
            <div className="container">
                <h1>City List</h1>
                <p>Add a city with a name and country code to the table.</p>
                <Table
                    cityData={data}
                    removeCity={this.removeCity}
                />
                <h3>Add New</h3>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default App;