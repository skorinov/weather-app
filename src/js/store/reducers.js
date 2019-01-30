import { ADD_CITY, ADD_CITY_DETAILS, CHANGE_LAYOUT, DELETE_CITY, CHECK_CITY_DETAILS } from "./actions";

const initialState = {
  cities: [],
  currentCityData: {
    city: {
      name: ""
    },
    list: []
  },
  cityName: "",
  layout: "List"
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_CITY) {
    return Object.assign({}, state, {
      cities: state.cities.concat(action.city)
    });
  }

  if (action.type === ADD_CITY_DETAILS) {
    return Object.assign({}, state, {
      currentCityData: action.data
    });
  }

  if (action.type === DELETE_CITY) {
    return Object.assign({}, state, {
      cities: state.cities.filter((item) => item.id.toString() !== action.id)
    });
  }

  if (action.type === CHECK_CITY_DETAILS) {
    return Object.assign({}, state, {cityName: action.cityName});
  }
  if (action.type === CHANGE_LAYOUT) {

    return Object.assign({}, state, action.layout);
  }
  return state;
}

export default rootReducer;