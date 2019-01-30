import React, { Component } from "react";
import {connect} from 'react-redux';
import { Link} from "react-router-dom";
import {deleteCity, checkCityDetails} from '../store/actions';

function mapDispatchToProps(dispatch) {
  return {
    deleteCity: id => dispatch(deleteCity(id)),
    checkCityDetails: name => dispatch(checkCityDetails(name))
  };
}

class CityBlock extends Component {
  constructor() {
    super();

    this.deleteBlock = this.deleteBlock.bind(this);
    this.openCurrentCity = this.openCurrentCity.bind(this);

    this.blockColor = random_color();

    function random_color() {
      const color = "#" + Math.random().toString(16).slice(2, 8).toUpperCase();
      return color;
    }
  }

  deleteBlock(event) {
    event.preventDefault();

    const id = event.currentTarget.dataset.id;

    if(id) {
      this.props.deleteCity({id});
    }
  }

  openCurrentCity(event) {
    const name = event.currentTarget.dataset.name;

    if(name) {
      this.props.checkCityDetails(name);
    }
  }

  render() {
    return (
        <div className="city-block">
          <Link to={`/${this.props.city.name.toLowerCase()}`} onClick={this.openCurrentCity} data-name={this.props.city.name} className="city-card"
               style={{borderColor: this.blockColor, boxShadow: `0 10px 25px ${this.blockColor}`}}>
            <div className="name" style={{color: this.blockColor}}>
              <span>{this.props.city.name}</span>
            </div>
            <div className="weather">
                <span className={`owf owf-${this.props.city.weather.id} icon`}></span>
                <span>{this.props.city.weather.main}</span>
            </div>
            <div>
              <div className="weather">
                <span className="owf owf-904"></span>
                <span>{Math.round(this.props.city.temp.temp_max)}&deg;</span>
              </div>
              <div className="weather">
                <span className="owf owf-903"></span>
                <span>{Math.round(this.props.city.temp.temp_min)}&deg;</span>
              </div>
            </div>
            <div className="date">
              <p>{this.props.city.date.format('LT')}</p>
              <p>{this.props.city.date.format('MMM D')}</p>
            </div>

            <div onClick={this.deleteBlock} data-id={this.props.city.id} className="close-icon">
              <img src="./src/assets/img/icon_close.svg" alt=""/>
            </div>

            <div className="arrow-icon">
              <img src="./src/assets/img/icon_arrow.png" alt=""/>
            </div>

          </Link>
        </div>
    );
  }
}

const WeatherBlock = connect(null, mapDispatchToProps)(CityBlock);
export default WeatherBlock;