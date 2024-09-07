import React, { useState } from 'react';

function Form({ getWeather }) {
    const [city, setCity] = useState('');

    const getCity = e => {
        e.preventDefault();
        getWeather(city)
        setCity('')
    }

    return (
        <form onSubmit={getCity}>
            <input value={city} onChange={e => setCity(e.target.value)} type='text' name='city' />
            <button type='submit'>Get Weather</button>
        </form>
    )
}

export default Form