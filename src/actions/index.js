import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

export const CHANGE_RANGE = 'CHANGE_RANGE';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const TOGGLE_NAV = 'TOGGLE_NAV';
export const CLOSE_NAV = 'CLOSE_NAV';
export const GET_FORECAST_REQUEST = 'GET_FORECAST_REQUEST';
export const GET_FORECAST_SUCCESS = 'GET_FORECAST_SUCCESS';
export const GET_FORECAST_FAILURE = 'GET_FORECAST_FAILURE';

export const changeRange = (values) => ({type: CHANGE_RANGE, payload: {values}});

export const removeItem = (category, id) => ({type: REMOVE_ITEM, payload: {category, id}});

export const addItem = (category, item) => ({type: ADD_ITEM, payload: {category, item}});

export const toggleNav = (e) => ({type: TOGGLE_NAV, payload: {e}});

export const closeNav = () => ({type: CLOSE_NAV, payload: {}});

export const toggleModal = (modalState) => ({type: TOGGLE_MODAL, payload: {modalState}});

export const getForecast = (name, lat, lon) => (dispatch) => {
  dispatch({ type: GET_FORECAST_REQUEST });
  
  axios({
      url: `https://api.darksky.net/forecast/82dd8519eb0941abad295fda7a5ed88e/${lat},${lon}?lang=pl&units=ca`,
      adapter: jsonpAdapter
    })
    .then((res) => {
      const inputData = [...res.data.daily.data];
      const outputData = inputData.map(({ summary, temperatureHigh, temperatureLow, cloudCover, humidity, precipProbability, windSpeed, icon}) => {
        return {
          dailySummary: summary,
          tempDay: Math.round(temperatureHigh) + "°C",
          tempNight: Math.round(temperatureLow) + "°C",
          clouds: Math.round(cloudCover * 100) + "%",
          humidity: Math.round(humidity * 100) + "%",
          rainSnow: Math.round(precipProbability * 100) + "%",
          windSpeed: Math.round(windSpeed) + " km/h",
          icon: icon,
        }
      })
      console.log(outputData)
      dispatch({
        type: GET_FORECAST_SUCCESS,
        payload: {
          name,
          outputData,
        },
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: GET_FORECAST_FAILURE });
    });
};
