import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

import InputForm from '../../components/form/InputForm';

import './main.css';

const MainPage = () => {
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState('');

  const handleSubmit = () => {
    try {
      axios
        .get(
          `https://api.open-meteo.com/v1/forecast
?latitude=${inputData.lat}.52&longitude=${inputData.lon}
&current_weather=true`
        )
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        });
    } catch (err) {
      console.error(err);
    }
  };
  console.log(inputData.lon);
  console.log(inputData.lat);
  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <InputForm handleChange={handleChange} handleSubmit={handleSubmit} />
    </>
  );
};

export default MainPage;
