import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

export const CHANGE_RANGE = 'CHANGE_RANGE';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const GET_FORECAST_SUCCESS = 'GET_FORECAST_SUCCESS';
export const GET_FORECAST_FAILURE = 'GET_FORECAST_FAILURE';

export const changeRange = (values) => ({type: CHANGE_RANGE, payload: {values}});

export const removeItem = (category, id) => ({type: REMOVE_ITEM, payload: {category, id}});

export const addItem = (category, item) => ({type: ADD_ITEM, payload: {category, item}});

export const toggleModal = (modalState) => ({type: TOGGLE_MODAL, payload: {modalState}});

export const getForecast = (name, lat, lon) => (dispatch) => {
  axios({
      url: `https://api.darksky.net/forecast/82dd8519eb0941abad295fda7a5ed88e/${lat},${lon}?lang=pl&units=ca`,
      adapter: jsonpAdapter
    })
    .then((res) => {
      const inputData = [...res.data.daily.data];
      const outputData = inputData.map(({ summary, temperatureHigh, temperatureLow, cloudCover, humidity, precipProbability, windSpeed, icon}) => {
        return {
          dailySummary: summary,
          tempDay: Math.round(temperatureHigh),
          tempNight: Math.round(temperatureLow),
          clouds: Math.round(cloudCover * 100),
          humidity: Math.round(humidity * 100),
          rainSnow: Math.round(precipProbability * 100),
          windSpeed: Math.round(windSpeed),
          icon: icon.replace(/-/g, ''),
        }
      })
      dispatch({
        type: GET_FORECAST_SUCCESS,
        payload: {
          name,
          outputData,
        },
      });
    })
    .catch(err => {
      dispatch({ type: GET_FORECAST_FAILURE });
    });
};
