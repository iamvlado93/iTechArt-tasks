import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { Button, Container, TextField, Box } from '@material-ui/core';

import useStyles from './Styles/styles';
import fetchWeather from './API';
import SkeletonWeather from './Skeleton/skeletonWeather';

import './styles.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const search = async () => {
    if (query === '') {
      setError(true);
    } else {
      setLoading(true);
      const data = await fetchWeather(query);
      setWeather(data);
      setQuery('');
      setError(false);
      setLoading(false);
    }
  };

  const clear = () => {
    setWeather('');
  };

  const classes = useStyles();

  return (
    <Box className={classes.boxStyle}>
      <TextField
        required
        label="City Name"
        variant="filled"
        type="text"
        className={classes.inputStyle}
        placeholder="Search..."
        value={query}
        error={error}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button className={classes.buttonStyle} onClick={search} type="button">
        Search
      </Button>
      <Button className={classes.buttonStyle} onClick={clear} type="button">
        Clear
      </Button>
      {loading ? <SkeletonWeather /> : ''}
      {weather.main && (
        <Container className={classes.containerStyle}>
          <h2 className={classes.headerStyle}>
            <span className={classes.headerTextStyle}>City: {weather.name}</span>
            <span className={classes.headerTextStyle}>Country: {weather.sys.country}</span>
          </h2>
          <div className={classes.tempStyle}>Temp: {Math.round(weather.main.temp)}&deg;</div>
          <div className={classes.infoStyle}>
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <Typography variant="subtitle1">Wind Speed: {weather.wind.speed}</Typography>
            <Typography variant="subtitle2">Degree: {weather.wind.deg}</Typography>
            <Typography variant="subtitle2">
              Description: {weather.weather[0].description}
            </Typography>
          </div>
        </Container>
      )}
    </Box>
  );
};

export default App;
