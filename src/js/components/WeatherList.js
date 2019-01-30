import React from "react";
import { connect } from "react-redux";
import WeatherBlock from "./WeatherBlock.js";

const mapStateToProps = state => {
  return {
    cities: state.cities,
    layout: state.layout,
  };
};

let className;

const List = ({ cities, layout}) => (
    layout === "List" ? className = 'active-list' : className = 'active-grid',
    (<div className={className}>
      {cities.map((city) => (
          <WeatherBlock key={city.id} city={city}/>
      ))}
    </div>)
);

const WeatherList = connect(mapStateToProps)(List);
export default WeatherList;