import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

import './main.css';

const MainPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      axios
        .get(
          `https://api.open-meteo.com/v1/forecast
?latitude=52.52&longitude=13.41
&current_weather=true
&hourly=temperature_2m, relativehumidity_2m, windspeed_10m`
        )
        .then((res) => {
          console.log(res);
          setData();
        });
    } catch (err) {
      console.error(err);
    }
  }, []);

  return <div></div>;
};

export default MainPage;
