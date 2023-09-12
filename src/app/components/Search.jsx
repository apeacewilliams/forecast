import fetchWeatherData from '@/utils/weatherService';
import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs';

const Search = () => {
  const [city, setCity] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData(city)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setCity(e.target.value)}
        type='text'
        placeholder='Enter City' />
      <button type='submit' onClick={fetchWeatherData}>
        <BsSearch size={20} />
      </button>
    </form>
  )
}

export default Search;
