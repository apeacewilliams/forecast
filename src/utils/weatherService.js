// user makes call to geocoding api when submitting form
// map the lat lon of geocode api to the one call api
// then display data

import fetchGeocodeData from "./geocodeService";

const API_KEY = 'f004548ff7d1a85f464edfec953f5ed0';
const url = 'https://api.openweathermap.org/data/3.0/onecall'

const fetchWeatherData = async () => {
  try {
    const { lat, lng } = await fetchGeocodeData();

    const info = {
      lat,
      lng,
      apiKey: API_KEY,
      exclude: 'current,minutely,hourly',
      units: 'metric',
    };

    const { apiKey, exclude, units } = info;

    const response = await fetch(
      `${url}?lat=${lat}&lon=${lng}&exclude=${exclude}&appid=${apiKey}&units=${units}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export default fetchWeatherData;
