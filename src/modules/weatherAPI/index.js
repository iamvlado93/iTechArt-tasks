import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, TextField, Box } from '@material-ui/core';
import './styles.css';

import fetchWeather from './API';

const useStyles = makeStyles({
  boxStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background:
      'linear-gradient(90deg, rgba(0,22,36,1) 0%, rgba(9,88,121,1) 48%, rgba(0,212,255,1) 100%)',
    width: '90vw',
  },

  inputStyle: {
    color: 'cyan',
    label: {
      color: 'cyan',
    },
  },

  buttonStyle: {
    margin: '20px',
    background: 'none',
    width: '100px',
    height: '25px',
    border: '1px solid cyan',
  },

  containerStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    background: 'transparent',
    width: '35vw',
    height: '50vh',
    borderRadius: 20,
    border: '2px solid cyan',
  },

  headerStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50px',
    background: 'transparent',
    borderRadius: 20,
    border: '1px solid cyan',
  },

  headerTextStyle: {
    color: 'cyan',
    marginLeft: '10px',
  },

  tempStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40px',
    background: 'transparent',
    color: 'cyan',
    fontWeight: '800',
    borderRadius: 20,
    border: '1px solid cyan',
  },

  infoStyle: {
    height: '25vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    background: 'transparent',
    color: 'cyan',
    fontWeight: '600',
    borderRadius: 20,
    border: '1px solid cyan',
  },
});

const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [error, setError] = useState(false);

  const search = async () => {
    if (query === '') {
      setError(true);
    } else {
      const data = await fetchWeather(query);
      setWeather(data);
      setQuery('');
      setError(false);
    }
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
            <Typography variant="subtitle">Wind Speed: {weather.wind.speed}</Typography>
            <Typography variant="subtitle">Degree: {weather.wind.deg}</Typography>
            <Typography variant="subtitle">
              Description: {weather.weather[0].description}
            </Typography>
          </div>
        </Container>
      )}
    </Box>
  );
};

export default App;
