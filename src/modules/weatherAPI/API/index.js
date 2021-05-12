/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'c01f33698b101f2f3261afeaa8e4976a';

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: API_KEY,
    },
  });
  // eslint-disable-next-line no-console
  console.log(data);
  return data;
};
