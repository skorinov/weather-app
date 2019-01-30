export const ADD_CITY = "ADD_CITY";
export const ADD_CITY_DETAILS = "ADD_CITY_DETAILS";
export const DELETE_CITY = "DELETE_CITY";
export const CHECK_CITY_DETAILS = "CHECK_CITY_DETAILS";
export const CHANGE_LAYOUT = "CHANGE_LAYOUT";

export function addCity(city) {
  return { type: ADD_CITY, city };
}

export function addCityDetails(data) {
  return { type: ADD_CITY_DETAILS, data };
}

export function deleteCity({id}) {
  return { type: DELETE_CITY, id };
}

export function checkCityDetails(cityName) {
  return { type: CHECK_CITY_DETAILS, cityName };
}

export function changeLayout(layout) {
  return { type: CHANGE_LAYOUT, layout };
}
