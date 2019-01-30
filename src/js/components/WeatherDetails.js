import React, { Component } from "react";
import axios from 'axios';
import moment from 'moment';
import connect from 'react-redux/es/connect/connect';
import {addCityDetails} from '../store/actions';

const mapStateToProps = state => {
  return {
    cityName: state.cityName,
    currentCityData: state.currentCityData
  };
};

function mapDispatchToProps(dispatch) {
  return {
    addCityDetails: list => dispatch(addCityDetails(list))
  };
}

const apiKey = 'af70830277b3a7cb9a96ccfd2c52c4bf';

class Details extends Component{

  componentDidMount() {

    if(this.props.cityName !== this.props.currentCityData.city.name) {
      axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.props.cityName}&units=metric&appid=${apiKey}`)
          .then(res => {
            const data = res.data;
            this.props.addCityDetails(data);
          })
          .catch((error) => {
            throw error;
          });
    }
  }

  render() {

    const main = (
        <div className="details_main">
          <h1>{this.props.currentCityData.city.name}</h1>
          <p>You can check weather forecast for 5 days with data every 3 hours</p>
        </div>
    );

    const list = this.props.currentCityData.list.map((item, i)=>(
        <div className="details_block" key={i}>
          <div className="details_date">
            <p>{moment(item.dt * 1000).format('LT')}</p>
            <p className="details_date_week">{moment(item.dt * 1000).format('dddd')}</p>
            <p>{moment(item.dt * 1000).format('MMM D')}</p>
          </div>
          <div className="details_temp">
            <div className="hot">
              <span className="owf owf-904 icon"></span>
              <span>{Math.round(item.main.temp_max)}&deg;</span>
            </div>
            <div className="cold">
              <span className="owf owf-903 icon"></span>
              <span>{Math.round(item.main.temp_min)}&deg;</span>
            </div>
          </div>
        </div>
    ));

    return (
        <div>
          {main}
          {list}
        </div>
    )
  }

}

const WeatherDetails = connect(mapStateToProps, mapDispatchToProps)(Details);
export default WeatherDetails;