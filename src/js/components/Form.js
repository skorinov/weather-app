import React, { Component } from "react";
import axios from 'axios';
import moment from 'moment';
import { connect } from "react-redux";
import { addCity, changeLayout } from "../store/actions";

const mapStateToProps = state => {
  return {
    layout: state.layout,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    addCity: city => dispatch(addCity(city)),
    changeLayout: layout => dispatch(changeLayout(layout))
  };
}

const apiKey = 'af70830277b3a7cb9a96ccfd2c52c4bf';

class CityForm extends Component {
  constructor() {
    super();
    this.state = {
      cityName: "",
      error: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.activateLayoutState = this.activateLayoutState.bind(this);
  }
  handleChange(event) {
    this.setState({ cityName: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();

    this.setState({ error: "" });
    const { cityName } = this.state;

    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`)
        .then(res => {
          const data = res.data;
          const cityInfo = {
            id: data.id,
            name: data.name,
            date: moment(data.dt * 1000),
            temp: data.main,
            weather: data.weather[0]
          };
          this.props.addCity(cityInfo);
        })
        .catch((error) => {
          if(error.response && error.response.data.message) {
            this.setState({ error: error.response.data.message });
          }else {
            throw error;
          }
        });

    this.setState({ cityName: "" });
  }

  activateLayoutState(event) {

    event.preventDefault();

    const layout = event.currentTarget.dataset.layout;

    if(layout) {
      this.props.changeLayout({layout});
    }
  }

  render() {
    const { cityName, error } = this.state;

    return (
        <div className="form-container">
          <div>
            <h3 className="form-title">Find your city</h3>
            <form className="form" onSubmit={this.handleSubmit}>
              <input
                  type="text"
                  value={cityName}
                  onChange={this.handleChange}
              />
              <button type="submit">
                Add
              </button>
            </form>
            <p className="error">{error}</p>
          </div>
          <div className="layout">
            <h3 className="form-title">Layout</h3>
            <div>
              <a className={this.props.layout === 'List' ? 'button-list' : ''} onClick={this.activateLayoutState} data-layout="List">List</a>
              <a className={this.props.layout === 'Grid' ? 'button-grid' : ''} onClick={this.activateLayoutState} data-layout="Grid">Grid</a>
            </div>
          </div>
        </div>
    );
  }
}
const Form = connect(mapStateToProps, mapDispatchToProps)(CityForm);
export default Form;