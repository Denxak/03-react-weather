import React, { useState } from 'react';
import Form from './Form'
import Weather from './Weather'
import { api_key, base_url } from '../utils/constant'

function Data() {
  const [weatherInfo, setWetherInfo] = useState({})
  const [message, setMessage] = useState('Enter city name')

  const getWeather = async city => {
    try {
      const responce = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
      const data = await responce.json()
      const info = {
        city: data.name,
        country: data.sys.country,
        temp: data.main.temp,
        pressure: data.main.pressure,
        sunset: data.sys.sunset
      }
      setWetherInfo(info);
      setMessage('')
    } catch (e) {
      setMessage('Enter correct city name')
    }
  }

  return (
    <div>
      <Form getWeather={getWeather} />
      <Weather weather={weatherInfo} message={message} />
    </div>
  )
}

export default Data