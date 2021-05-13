import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'c01f33698b101f2f3261afeaa8e4976a';

const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      APPID: API_KEY,
    },
  });
  return data;
};

export default fetchWeather;
