import {
  WEATHER_REQUEST,
  WEATHER_SUCCESS,
  WEATHER_FAIILURE
} from '/constants';

export const getWeather = (payload) => (dispatch) => {
  dispatch({
    type: WEATHER_REQUEST,
    payload
  });
  fetch({
    method: 'GET',
    url: 'http://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=ef0e46e6609976e57cf90284f882555e'
  })
    .then(response => response.toJSON())
    .then(data => {
      dispatch({
        type: WEATHER_SUCCESS,
        payload: data
      })
    })
    .catch(err => {
      console.log('Error');
    })
}
