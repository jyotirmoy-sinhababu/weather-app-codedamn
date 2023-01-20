import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

import InputForm from '../../components/form/InputForm';

import './main.css';

const MainPage = () => {
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState('');

  useEffect(() => {
    try {
      axios
        .get(
          `https://api.open-meteo.com/v1/forecast
?latitude=52.52&longitude=13.41
&current_weather=true`
        )
        .then((res) => {
          console.log(res.data);
          setData();
        });
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <>
      <InputForm />
    </>
  );
};

export default MainPage;
